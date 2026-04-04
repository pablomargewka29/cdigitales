export const prerender = true;

const SITE = "https://cuentasdigitales.com.ar";

const urls = [
  { loc: `${SITE}/`, priority: "1.0", changefreq: "weekly" },
  { loc: `${SITE}/ayuda/`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/`, priority: "0.9", changefreq: "weekly" },

  // Netflix — cuentas originales
  { loc: `${SITE}/cuentas-digitales/cuenta-netflix-argentina`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-netflix-argentina-1-mes`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-netflix-argentina-3-meses`, priority: "0.8", changefreq: "weekly" },

  // Netflix — cuentas nuevas
  { loc: `${SITE}/cuentas-digitales/comprar-cuenta-netflix-argentina`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/netflix-premium-4-pantallas-argentina`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/netflix-estandar-argentina`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/netflix-estandar-con-anuncios-argentina`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/netflix-argentina-sin-tarjeta`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/netflix-argentina-precio-pesos`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/netflix-argentina-pago-mercadopago`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-netflix-compartida-argentina`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-netflix-perfil-propio-argentina`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-netflix-trimestral-argentina`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/netflix-argentina-6-meses`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/netflix-4-pantallas-argentina`, priority: "0.8", changefreq: "weekly" },

  // Spotify
  { loc: `${SITE}/cuentas-digitales/cuenta-spotify-argentina-1-mes`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-spotify-argentina-3-meses`, priority: "0.8", changefreq: "weekly" },

  // Disney+
  { loc: `${SITE}/cuentas-digitales/cuenta-disney-plus-argentina-1-mes`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-disney-plus-argentina-3-meses`, priority: "0.8", changefreq: "weekly" },

  // HBO Max
  { loc: `${SITE}/cuentas-digitales/cuenta-hbo-max-argentina-1-mes`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-hbo-max-argentina-3-meses`, priority: "0.8", changefreq: "weekly" },

  // Amazon Prime
  { loc: `${SITE}/cuentas-digitales/cuenta-amazon-prime-argentina-1-mes`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-amazon-prime-argentina-3-meses`, priority: "0.8", changefreq: "weekly" },

  // YouTube Premium
  { loc: `${SITE}/cuentas-digitales/cuenta-youtube-premium-argentina-1-mes`, priority: "0.8", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-youtube-premium-argentina-3-meses`, priority: "0.8", changefreq: "weekly" },

  // Crunchyroll
  { loc: `${SITE}/cuentas-digitales/cuenta-crunchyroll-argentina-1-mes`, priority: "0.7", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-crunchyroll-argentina-3-meses`, priority: "0.7", changefreq: "weekly" },

  // Paramount+
  { loc: `${SITE}/cuentas-digitales/cuenta-paramount-plus-argentina-1-mes`, priority: "0.7", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-paramount-plus-argentina-3-meses`, priority: "0.7", changefreq: "weekly" },

  // Apple TV+
  { loc: `${SITE}/cuentas-digitales/cuenta-apple-tv-argentina-1-mes`, priority: "0.7", changefreq: "weekly" },
  { loc: `${SITE}/cuentas-digitales/cuenta-apple-tv-argentina-3-meses`, priority: "0.7", changefreq: "weekly" },

  // Artículos de ayuda — originales
  { loc: `${SITE}/ayuda/como-conseguir-cuenta-netflix-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/cuanto-cuesta-netflix-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/impuestos-netflix-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-no-acepta-tarjeta-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-no-acepta-debito-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-no-acepta-tarjeta-naranja-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-rechaza-tarjeta-visa-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-rechaza-tarjeta-mastercard-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-error-pago-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-no-puede-procesar-el-pago-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-pago-rechazado-aunque-tengo-saldo`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/pagar-netflix-sin-tarjeta-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/pagar-netflix-en-efectivo-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/pagar-netflix-por-transferencia-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-mercado-pago`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-rapipago-pagofacil-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-gift-card-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/precio-netflix-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/spotify-no-acepta-tarjeta-argentina`, priority: "0.7", changefreq: "monthly" },

  // Artículos de ayuda — nuevos
  { loc: `${SITE}/ayuda/netflix-no-acepta-tarjeta-prepaga-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-no-acepta-uala-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-plan-basico-desaparecio-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-cuanto-son-los-impuestos-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-me-subio-el-precio-solo-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-por-que-cobran-en-dolares-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-cobra-mas-de-lo-que-dice-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-no-me-deja-compartir-cuenta-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-miembro-extra-muy-caro-argentina`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-rechaza-tarjeta-cabal-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/netflix-aumento-precio-argentina`, priority: "0.9", changefreq: "weekly" },
  { loc: `${SITE}/ayuda/netflix-plan-muy-caro-argentina`, priority: "0.8", changefreq: "monthly" },
  { loc: `${SITE}/ayuda/como-pagar-netflix-mas-barato-argentina`, priority: "0.9", changefreq: "monthly" },

  // Institucionales
  { loc: `${SITE}/como-funciona`, priority: "0.5", changefreq: "monthly" },
  { loc: `${SITE}/opiniones`, priority: "0.5", changefreq: "monthly" },
  { loc: `${SITE}/acerca`, priority: "0.4", changefreq: "monthly" },
  { loc: `${SITE}/contacto`, priority: "0.4", changefreq: "monthly" },
  { loc: `${SITE}/metodologia`, priority: "0.3", changefreq: "monthly" },
  { loc: `${SITE}/terminos`, priority: "0.2", changefreq: "yearly" },
  { loc: `${SITE}/privacidad`, priority: "0.2", changefreq: "yearly" },
];

const lastmod = new Date().toISOString().split("T")[0];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
