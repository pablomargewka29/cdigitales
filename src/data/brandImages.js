// src/data/brandImages.js
export function getBrandImage(brand) {
  const key = String(brand || "").toLowerCase().trim();

  if (key.includes("netflix")) return "/ai/netflix-hero.png";
  if (key.includes("spotify")) return "/ai/spotify-hero.png";
  if (key.includes("disney")) return "/ai/disneyplus-hero.png";
  if (key.includes("crunchyroll")) return "/ai/crunchyroll-hero.png";
  if (key.includes("google play")) return "/ai/googleplay-hero.png";
  if (key.includes("free fire")) return "/ai/freefire-hero.png";

  return "/ai/default-hero.png";
}

