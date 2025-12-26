// src/pages/sitemap.xml.js
export const prerender = true;

const SITE = "https://cuentasdigitales.com.ar";

export async function GET() {
  const urls = [
    `${SITE}/`,
    `${SITE}/ayuda/`,
    `${SITE}/cuentas-digitales/`,
    `${SITE}/contacto`,
    `${SITE}/acerca`,
    `${SITE}/opiniones`,
    `${SITE}/terminos`,
    `${SITE}/privacidad`,
  ];

  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `<url>
  <loc>${u}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${u === SITE + "/" ? "1.0" : "0.7"}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
