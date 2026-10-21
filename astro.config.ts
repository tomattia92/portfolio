import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Tailwind ha il proprio Vite: il cast evita il conflitto di tipi tra le due versioni.
export default defineConfig({
  site: "https://borntobewild.tech",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss() as any] },
});
