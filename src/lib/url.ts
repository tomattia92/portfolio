// Prefissa i percorsi con il base path di Astro (vuoto, perché il sito sta alla radice del dominio).
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
