export const prerender = true;

export async function GET() {
  const content = `User-agent: *
Allow: /

Disallow: /pago
Disallow: /pago-tarjeta
Disallow: /pago/

Sitemap: https://cuentasdigitales.com.ar/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
