// Prefissa i percorsi con il base path di Astro (vuoto sul dominio, "/portfolio" su github.io).
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
