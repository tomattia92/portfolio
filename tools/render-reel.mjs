// Render offline dello showreel: reel/reel.html → public/video/showreel.{mp4,webm} + poster.
// Uso:  npm run reel            (render completo)
//       node tools/render-reel.mjs --stills   (solo fotogrammi di controllo in .scratch/)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import ffmpegPath from "ffmpeg-static";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const reelDir = path.join(root, "reel");
const outDir = path.join(root, "public", "video");
const CHROME = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const FPS = 30, DUR = 15, TOTAL = FPS * DUR;
const stills = process.argv.includes("--stills");

const mime = { ".html": "text/html", ".woff2": "font/woff2", ".js": "text/javascript" };
const server = http.createServer((req, res) => {
  const file = path.join(reelDir, decodeURIComponent(req.url.split("?")[0]).replace(/^\/$/, "/reel.html"));
  if (!file.startsWith(reelDir) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": mime[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}).listen(0);
const port = server.address().port;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--force-color-profile=srgb"] });
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
await page.goto(`http://localhost:${port}/reel.html?render`);
await page.evaluate(() => window.fontsReady);
const grab = (t) => page.evaluate((t) => { window.renderFrame(t); return document.getElementById("c").toDataURL("image/jpeg", 0.95).split(",")[1]; }, t);

if (stills) {
  const dir = path.join(root, ".scratch"); fs.mkdirSync(dir, { recursive: true });
  for (const t of [0.6, 1.2, 2.2, 3.6, 4.4, 5.2, 6.3, 7.2, 8.0, 9.8, 10.6, 11.9, 12.6, 13.3, 14.4]) {
    fs.writeFileSync(path.join(dir, `t${String(t).replace(".", "_")}.jpg`), Buffer.from(await grab(t), "base64"));
  }
  await browser.close(); server.close(); process.exit(0);
}

fs.mkdirSync(outDir, { recursive: true });
const run = (args) => spawn(ffmpegPath, ["-y", "-loglevel", "error", ...args], { stdio: ["pipe", "inherit", "inherit"] });
const mp4 = run(["-f", "image2pipe", "-framerate", String(FPS), "-c:v", "mjpeg", "-i", "-",
  "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an",
  path.join(outDir, "showreel.mp4")]);
for (let f = 0; f < TOTAL; f++) {
  mp4.stdin.write(Buffer.from(await grab(f / FPS), "base64"));
  if (f % 60 === 0) console.log(`frame ${f}/${TOTAL}`);
}
mp4.stdin.end();
await new Promise((r) => mp4.on("close", r));

// poster: fotogramma del lockup finale
fs.writeFileSync(path.join(outDir, "poster.jpg"), Buffer.from(await grab(13.6 + 0.9), "base64"));
await browser.close(); server.close();

// webm (VP9) per i browser che lo preferiscono — più leggero
const webm = run(["-i", path.join(outDir, "showreel.mp4"), "-c:v", "libvpx-vp9", "-crf", "34", "-b:v", "0", "-an", path.join(outDir, "showreel.webm")]);
await new Promise((r) => webm.on("close", r));
console.log("fatto →", outDir);
