import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Tailwind ha il proprio Vite: il cast evita il conflitto di tipi tra le due versioni.
export default defineConfig({
  // Il sito è servito alla radice di borntobewild.tech. Le variabili servono solo
// per provare la build su un altro indirizzo (es. SITE_URL / BASE_PATH=/portfolio).
site: process.env.SITE_URL ?? "https://borntobewild.tech",
  base: process.env.BASE_PATH ?? "/",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss() as any] },
});
