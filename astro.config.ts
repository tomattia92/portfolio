import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Tailwind ha il proprio Vite: il cast evita il conflitto di tipi tra le due versioni.
export default defineConfig({
  // In produzione sul dominio queste variabili non servono. Il workflow le imposta
// solo finché il sito vive su tomattia92.github.io/portfolio.
site: process.env.SITE_URL ?? "https://borntobewild.tech",
  base: process.env.BASE_PATH ?? "/",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss() as any] },
});
