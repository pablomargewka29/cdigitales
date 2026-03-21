// src/data/giftCardsData.js
// Estructura unificada (LatAm): múltiples productos por país
// (Netflix + Spotify + Disney Plus + Google Play)
// Los campos matchean EXACTO lo que tu [slug].astro usa en Astro.props.

export const giftCardsData = {
  // =========================
  // Argentina
  // =========================
  ar: {
    code: "ar",
    country: "Argentina",
    flag: "🇦🇷",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-argentina",
        title: "Netflix Gift Card Argentina — Comprá online y canjeá fácil",
        description:
          "Comprá tu Netflix Gift Card para Argentina y activala en minutos. Pagá con transferencia en ARS, PayPal o criptomonedas. Envío por email dentro de 24 hs.",
        country: "Argentina",
        flag: "🇦🇷",
        redeemUrl: "https://www.netflix.com/ar/redeem",
        baseUSD1: 15,
        baseUSD3: 40,
        baseUSD6: 75,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para pagar Netflix sin tarjeta: saldo prepago, canje simple y soporte por email.",
      },
      {
        brand: "Spotify",
        slug: "spotify-argentina",
        title: "Spotify Gift Card Argentina — Premium sin tarjeta",
        description:
          "Activá Spotify Premium en Argentina con gift card prepaga. Sin tarjeta de crédito, con entrega por email y soporte. Transferencia en ARS, PayPal o cripto.",
        country: "Argentina",
        flag: "🇦🇷",
        redeemUrl: "https://www.spotify.com/ar/redeem",
        baseUSD1: 12,
        baseUSD3: 32,
        baseUSD6: 60,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Escuchá música sin anuncios, con descargas y audio de alta calidad usando saldo prepago.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Argentina — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recargá diamantes de Free Fire en Argentina con packs de 300, 500 o 1000 diamantes. Pagás online y te ayudamos a acreditar los diamantes en tu cuenta.",
        country: "Argentina",
        flag: "🇦🇷",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Pensado para jugadores de Free Fire en Argentina que quieren recargar diamantes sin complicarse.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-argentina",
  title: "Crunchyroll Argentina — Gift Card y Suscripción Premium",
  description:
    "Activá Crunchyroll Premium en Argentina con opciones de 1, 3 o 6 meses. Si no hay gift cards disponibles, enviamos una suscripción ya activada.",
  country: "Argentina",
  flag: "🇦🇷",
  redeemUrl: "https://www.crunchyroll.com/redeem", 
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Seleccioná 1, 3 o 6 meses de Crunchyroll Premium. Entrega digital por email.",
  },
      {
        brand: "Disney Plus",
        slug: "disney-plus-argentina",
        title:
          "Disney Plus Gift Card Argentina — Todo Disney, Marvel y más",
        description:
          "Accedé a Disney Plus en Argentina con una gift card prepaga. Mirá películas y series de Disney, Pixar, Marvel y Star Wars sin usar tarjeta de crédito.",
        country: "Argentina",
        flag: "🇦🇷",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 15,
        baseUSD3: 40,
        baseUSD6: 75,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Perfecta para familias y para regalar acceso a todo el catálogo de Disney Plus en Argentina.",
      },
      {
        brand: "Google Play",
        slug: "google-play-argentina",
        title:
          "Google Play Gift Card Argentina — Saldo para apps, juegos y películas",
        description:
          "Comprá tu Google Play Gift Card para Argentina y cargá saldo en tu cuenta de Play Store. Ideal para apps, juegos, compras dentro de juegos, alquiler o compra de películas y más. Entrega digital por email dentro de 24 hs.",
        country: "Argentina",
        flag: "🇦🇷",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 10,
        baseUSD3: 25,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Pensada para cargar saldo en Google Play sin usar tarjeta: apps, juegos, gemas y más en tu cuenta de Argentina.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-argentina",
  title: "HBO Max Gift Card Argentina — Activá HBO sin tarjeta argentina",
  description:
    "Comprá tu HBO Max Gift Card en Argentina y activá tu cuenta sin necesitar tarjeta de crédito local. Ideal si el banco te rechaza los pagos o no querés débito automático. Te enviamos el acceso por email con un paso a paso simple.",
  country: "Argentina",
  flag: "🇦🇷",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Perfecta para ver HBO Max en Argentina pagando en forma prepaga, sin tarjeta y sin complicaciones bancarias.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-argentina",
        title: "Tinder Gold Argentina — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Argentina sin tarjeta. Te enviamos acceso listo por email.",
        country: "Argentina",
        flag: "🇦🇷",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Argentina que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // México
  // =========================
  mx: {
    code: "mx",
    country: "México",
    flag: "🇲🇽",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-mexico",
        title: "Netflix Gift Card México — Compra segura y canje inmediato",
        description:
          "Compra tu tarjeta Netflix México y canjéala de forma segura. Recibe el código por email en menos de 24 horas. Sin tarjeta de crédito.",
        country: "México",
        flag: "🇲🇽",
        redeemUrl: "https://www.netflix.com/mx/redeem",
        baseUSD1: 9,
        baseUSD3: 25,
        baseUSD6: 48,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Paga Netflix en MX con saldo prepago. Perfecto para regalar o mantener tu suscripción activa.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire México — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en México con packs de 300, 500 o 1000 diamantes. Recarga rápida para tu ID de jugador.",
        country: "México",
        flag: "🇲🇽",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para jugadores de Free Fire en México que quieren recargar diamantes sin tarjeta local.",
      },

      {
  brand: "Crunchyroll",
  slug: "crunchyroll-mexico",
  title: "Crunchyroll México — Gift Card y Suscripciones",
  description:
    "Compra Crunchyroll Premium en México con 1, 3 o 6 meses. Si no hay gift card, enviamos una suscripción lista para usar.",
  country: "México",
  flag: "🇲🇽",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Opciones Premium por meses, entrega digital inmediata en México.",
},
      {
        brand: "Spotify",
        slug: "spotify-mexico",
        title: "Spotify Gift Card México — Premium prepago, sin tarjeta",
        description:
          "Activa Spotify Premium en México usando gift card. Recibe el código por email y disfruta música sin anuncios ni interrupciones.",
        country: "México",
        flag: "🇲🇽",
        redeemUrl: "https://www.spotify.com/mx/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para cuentas nuevas o existentes. Canje simple y soporte por correo.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-mexico",
        title:
          "Disney Plus Gift Card México — Películas y series para toda la familia",
        description:
          "Compra tu Disney Plus Gift Card México y activa tu cuenta sin tarjeta. Recibe el código por email y disfrutá del catálogo completo para toda la familia.",
        country: "México",
        flag: "🇲🇽",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 9,
        baseUSD3: 25,
        baseUSD6: 48,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Muy práctica para compartir en familia o regalar Disney Plus en México.",
      },
      {
        brand: "Google Play",
        slug: "google-play-mexico",
        title:
          "Google Play Gift Card México — Saldo para apps, juegos y contenido digital",
        description:
          "Compra tu Google Play Gift Card México y recibe el código por email. Carga saldo en tu cuenta de Google Play para juegos, aplicaciones, películas y más.",
        country: "México",
        flag: "🇲🇽",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 10,
        baseUSD3: 25,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Ideal para comprar en la Play Store de México sin usar tarjeta de crédito.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-mexico",
  title: "HBO Max Gift Card México — Suscripción prepaga sin tarjeta",
  description:
    "Compra tu HBO Max Gift Card México y paga tu suscripción como si fuera saldo prepago. No necesitas asociar tarjeta ni preocuparte por cargos automáticos. Te mandamos el acceso por correo con instrucciones claras.",
  country: "México",
  flag: "🇲🇽",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Pensada para usuarios de México que quieren pagar HBO Max con saldo prepago en lugar de tarjeta de crédito.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-méxico",
        title: "Tinder Gold México — Activá sin tarjeta",
        description: "Pagá Tinder Gold en México sin tarjeta. Te enviamos acceso listo por email.",
        country: "México",
        flag: "🇲🇽",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de México que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Colombia
  // =========================
  co: {
    code: "co",
    country: "Colombia",
    flag: "🇨🇴",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-colombia",
        title:
          "Netflix Gift Card Colombia — Saldo prepago y canje fácil",
        description:
          "Compra tu Netflix Gift Card en Colombia y actívala sin tarjeta. Envío del código por email en menos de 24 hs, con guía paso a paso.",
        country: "Colombia",
        flag: "🇨🇴",
        redeemUrl: "https://www.netflix.com/co/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Solución práctica para pagar Netflix en CO con saldo prepago. Ideal para regalar.",
      },
      {
        brand: "Spotify",
        slug: "spotify-colombia",
        title: "Spotify Gift Card Colombia — Activa Premium sin tarjeta",
        description:
          "Activa Spotify Premium en Colombia con gift card prepaga. Disfruta de música sin anuncios, descargas y sonido de alta calidad.",
        country: "Colombia",
        flag: "🇨🇴",
        redeemUrl: "https://www.spotify.com/co/redeem",
        baseUSD1: 7.5,
        baseUSD3: 21,
        baseUSD6: 40,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Código digital por email y soporte. Apto para cuentas nuevas y existentes.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Colombia — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recarga diamantes de Free Fire en Colombia con packs de 300, 500 o 1000 diamantes. Pagás online y nosotros gestionamos la acreditación.",
        country: "Colombia",
        flag: "🇨🇴",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Opción práctica para cargar diamantes de Free Fire en Colombia sin complicaciones.",
      },

      {
        brand: "Disney Plus",
        slug: "disney-plus-colombia",
        title:
          "Disney Plus Gift Card Colombia — Acceso rápido y sin tarjeta",
        description:
          "Activa Disney Plus en Colombia usando una gift card digital. Recibe tu código por email y empezá a ver contenido de Disney, Pixar y Marvel en minutos.",
        country: "Colombia",
        flag: "🇨🇴",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Práctico para quienes no quieren usar tarjeta de crédito en Colombia.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-colombia",
  title: "Crunchyroll Colombia — Gift Card y Suscripciones",
  description:
    "Accedé a Crunchyroll Premium por 1, 3 o 6 meses. Si no hay gift cards, enviamos una suscripción activa lista para usar.",
  country: "Colombia",
  flag: "🇨🇴",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Anime en HD y simulcast con entrega digital inmediata.",
},
      {
        brand: "Google Play",
        slug: "google-play-colombia",
        title:
          "Google Play Gift Card Colombia — Saldo digital para tu cuenta",
        description:
          "Compra tu Google Play Gift Card Colombia y recibí un código digital para cargar saldo en tu cuenta de Google Play. Perfecto para juegos, apps y películas.",
        country: "Colombia",
        flag: "🇨🇴",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Muy útil para comprar en la Play Store colombiana sin asociar tarjeta.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-colombia",
  title: "HBO Max Gift Card Colombia — Controla tu suscripción HBO",
  description:
    "Compra tu HBO Max Gift Card Colombia y mantén tu suscripción bajo control. Pagas solo los meses que quieras, sin compromisos largos ni tarjetas colombianas guardadas.",
  country: "Colombia",
  flag: "🇨🇴",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Ideal para usuarios de Colombia que quieren HBO Max con pagos puntuales, sin cargos automáticos ni sorpresas.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-colombia",
        title: "Tinder Gold Colombia — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Colombia sin tarjeta. Te enviamos acceso listo por email.",
        country: "Colombia",
        flag: "🇨🇴",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Colombia que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Chile
  // =========================
  cl: {
    code: "cl",
    country: "Chile",
    flag: "🇨🇱",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-chile",
        title: "Netflix Gift Card Chile — Compra online y canje local",
        description:
          "Consigue tu tarjeta Netflix Chile y canjéala en minutos. Recibe el código por email con instrucciones claras.",
        country: "Chile",
        flag: "🇨🇱",
        redeemUrl: "https://www.netflix.com/cl/redeem",
        baseUSD1: 9.5,
        baseUSD3: 26,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Paga Netflix sin tarjeta con saldo prepago. Fácil, rápido y seguro.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-chile",
  title: "Crunchyroll Chile — Gift Card y Membresías Premium",
  description:
    "Pagá Crunchyroll Premium con opciones de 1, 3 o 6 meses. Si no hay gift card, enviamos una cuenta activa.",
  country: "Chile",
  flag: "🇨🇱",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Suscripciones Premium digitales listas para activar en Chile.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Chile — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en Chile con packs de 300, 500 o 1000 diamantes. Envío y acreditación guiada para tu cuenta.",
        country: "Chile",
        flag: "🇨🇱",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Pensado para gamers de Free Fire en Chile que quieren recargar rápido y seguro.",
      },

      {
        brand: "Spotify",
        slug: "spotify-chile",
        title: "Spotify Gift Card Chile — Premium prepago",
        description:
          "Activa Spotify Premium en Chile usando gift card. Música sin anuncios, con descargas y uso multiplataforma.",
        country: "Chile",
        flag: "🇨🇱",
        redeemUrl: "https://www.spotify.com/cl/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 45,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Entrega por email dentro de 24 hs. Compatible con cuentas existentes.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-chile",
        title:
          "Disney Plus Gift Card Chile — Ideal para maratones en familia",
        description:
          "Compra tu Disney Plus Gift Card Chile y mirá contenido para toda la familia. Recibí el código por correo y activalo en pocos pasos.",
        country: "Chile",
        flag: "🇨🇱",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 9.5,
        baseUSD3: 26,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Muy buena opción para ver Disney, Pixar, Marvel y Star Wars en Chile sin tarjeta.",
      },
      {
        brand: "Google Play",
        slug: "google-play-chile",
        title:
          "Google Play Gift Card Chile — Saldo para Play Store chilena",
        description:
          "Comprá tu Google Play Gift Card Chile y cargá saldo en la Play Store chilena. Ideal para apps, juegos, monedas virtuales y películas.",
        country: "Chile",
        flag: "🇨🇱",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 10,
        baseUSD3: 25,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Pensada para compras digitales en Chile sin necesidad de tarjeta de crédito.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-chile",
  title: "HBO Max Gift Card Chile — Paga HBO como prepago digital",
  description:
    "Comprá tu HBO Max Gift Card en Chile y recibí acceso digital por correo. Activás HBO Max como servicio prepago, sin dejar tarjeta guardada ni preocupaciones por renovaciones automáticas.",
  country: "Chile",
  flag: "🇨🇱",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Ideal para ver HBO Max en Chile pagando mes a mes con saldo digital, sin tarjetas ni contratos.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-chile",
        title: "Tinder Gold Chile — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Chile sin tarjeta. Te enviamos acceso listo por email.",
        country: "Chile",
        flag: "🇨🇱",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Chile que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Perú
  // =========================
  pe: {
    code: "pe",
    country: "Perú",
    flag: "🇵🇪",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-peru",
        title: "Netflix Gift Card Perú — Canje rápido y saldo prepago",
        description:
          "Compra tu Netflix Gift Card para Perú y recibe el código por email. Canje rápido y asistencia por correo.",
        country: "Perú",
        flag: "🇵🇪",
        redeemUrl: "https://www.netflix.com/pe/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "La forma más simple de pagar Netflix en Perú sin tarjeta.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-peru",
  title: "Crunchyroll Perú — Gift Card y Membresías Premium",
  description:
    "Crunchyroll Premium por 1, 3 o 6 meses. Si no hay gift cards, enviamos suscripción activa.",
  country: "Perú",
  flag: "🇵🇪",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Entrega digital inmediata y planes premium.",
},
      {
        brand: "Spotify",
        slug: "spotify-peru",
        title:
          "Spotify Gift Card Perú — Premium sin tarjeta de crédito",
        description:
          "Activa Spotify Premium en Perú con gift card prepaga. Recibe el código por email y empieza a escuchar al instante.",
        country: "Perú",
        flag: "🇵🇪",
        redeemUrl: "https://www.spotify.com/pe/redeem",
        baseUSD1: 7.5,
        baseUSD3: 21,
        baseUSD6: 40,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Sin anuncios, con descargas y reproducción offline.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Perú — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recargá tu cuenta de Free Fire en Perú con packs de 300, 500 o 1000 diamantes. Te ayudamos a acreditar los diamantes en tu ID.",
        country: "Perú",
        flag: "🇵🇪",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Solución rápida para recargar Free Fire en Perú sin usar tarjeta local.",
      },

      {
        brand: "Disney Plus",
        slug: "disney-plus-peru",
        title:
          "Disney Plus Gift Card Perú — Contenido familiar sin tarjeta",
        description:
          "Activa Disney Plus en Perú con una gift card digital. Pagás con saldo prepago y disfrutás del catálogo completo en pocos pasos.",
        country: "Perú",
        flag: "🇵🇪",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para ver películas y series de Disney en familia en Perú sin usar tarjeta.",
      },
      {
        brand: "Google Play",
        slug: "google-play-peru",
        title:
          "Google Play Gift Card Perú — Saldo para apps, juegos y más",
        description:
          "Compra tu Google Play Gift Card Perú y recibí tu código digital por email. Cargá saldo en tu cuenta para comprar apps, juegos, gemas y películas.",
        country: "Perú",
        flag: "🇵🇪",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Muy práctica para pagar en la Play Store peruana usando saldo prepago.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-peru",
  title: "HBO Max Gift Card Perú — Activa HBO Max paso a paso",
  description:
    "Compra tu HBO Max Gift Card Perú y te enviamos todo por correo, con un instructivo paso a paso. No necesitas tarjeta peruana; usás saldo prepago para ver tus series y películas.",
  country: "Perú",
  flag: "🇵🇪",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Recomendada para usuarios de Perú que prefieren pagar HBO Max con recargas digitales en lugar de tarjeta.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-perú",
        title: "Tinder Gold Perú — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Perú sin tarjeta. Te enviamos acceso listo por email.",
        country: "Perú",
        flag: "🇵🇪",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Perú que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Uruguay
  // =========================
  uy: {
    code: "uy",
    country: "Uruguay",
    flag: "🇺🇾",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-uruguay",
        title:
          "Netflix Gift Card Uruguay — Compra online y canje seguro",
        description:
          "Adquirí tu tarjeta Netflix Uruguay y activala en minutos. Código digital enviado por email.",
        country: "Uruguay",
        flag: "🇺🇾",
        redeemUrl: "https://www.netflix.com/uy/redeem",
        baseUSD1: 10.5,
        baseUSD3: 28,
        baseUSD6: 54,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Saldo prepago para mantener tu suscripción activa sin tarjeta.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-uruguay",
  title: "Crunchyroll Uruguay — Gift Card y Suscripción Premium",
  description:
    "Crunchyroll Premium en Uruguay con 1, 3 o 6 meses. Si no hay gift card, enviamos suscripción activa.",
  country: "Uruguay",
  flag: "🇺🇾",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Acceso Premium de anime por meses.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Uruguay — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en Uruguay con packs de 300, 500 o 1000 diamantes. Pagás en USD y nosotros gestionamos la recarga.",
        country: "Uruguay",
        flag: "🇺🇾",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para jugadores uruguayos que quieren recargar Free Fire sin complicarse.",
      },

      {
        brand: "Spotify",
        slug: "spotify-uruguay",
        title: "Spotify Gift Card Uruguay — Premium prepago",
        description:
          "Activa Spotify Premium en Uruguay con gift card digital. Sin tarjeta, con entrega rápida por email.",
        country: "Uruguay",
        flag: "🇺🇾",
        redeemUrl: "https://www.spotify.com/uy/redeem",
        baseUSD1: 9.5,
        baseUSD3: 26,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Escuchá sin anuncios y con descargas en tus dispositivos.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-uruguay",
        title:
          "Disney Plus Gift Card Uruguay — Entretenimiento para chicos y grandes",
        description:
          "Comprá tu Disney Plus Gift Card Uruguay y recibí el código por email. Activá la cuenta y disfrutá contenido para todas las edades.",
        country: "Uruguay",
        flag: "🇺🇾",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 10.5,
        baseUSD3: 28,
        baseUSD6: 54,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Muy útil para hogares con chicos o para fans de Disney en Uruguay.",
      },
      {
        brand: "Google Play",
        slug: "google-play-uruguay",
        title:
          "Google Play Gift Card Uruguay — Saldo para la Play Store uruguaya",
        description:
          "Comprá tu Google Play Gift Card Uruguay y cargá saldo en tu cuenta de Google Play para comprar apps, juegos, libros y películas.",
        country: "Uruguay",
        flag: "🇺🇾",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 10,
        baseUSD3: 25,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Pensada para usuarios de Uruguay que quieren pagar contenido digital sin tarjeta.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-uruguay",
  title: "HBO Max Gift Card Uruguay — Estrenos y series en modo prepago",
  description:
    "Comprá tu HBO Max Gift Card Uruguay y activá tu cuenta como si fuera un servicio prepago. Es práctico si compartís pantalla en familia o no querés asociar tu tarjeta uruguaya directamente a la plataforma.",
  country: "Uruguay",
  flag: "🇺🇾",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Opción cómoda para usuarios de Uruguay que quieren HBO Max sin comprometer su tarjeta ni firmar planes largos.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-uruguay",
        title: "Tinder Gold Uruguay — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Uruguay sin tarjeta. Te enviamos acceso listo por email.",
        country: "Uruguay",
        flag: "🇺🇾",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Uruguay que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Bolivia
  // =========================
  bo: {
    code: "bo",
    country: "Bolivia",
    flag: "🇧🇴",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-bolivia",
        title:
          "Netflix Gift Card Bolivia — Saldo digital y canje guiado",
        description:
          "Comprá tu Netflix Gift Card en Bolivia y recibí el código con instrucciones por email. Soporte y guía paso a paso.",
        country: "Bolivia",
        flag: "🇧🇴",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Si no hay canje local, te enviamos guía práctica para completar el proceso.",
      },
      {
        brand: "Spotify",
        slug: "spotify-bolivia",
        title:
          "Spotify Gift Card Bolivia — Premium para todos tus dispositivos",
        description:
          "Activá Spotify Premium en Bolivia sin tarjeta. Código digital por email, compatible con cuentas existentes.",
        country: "Bolivia",
        flag: "🇧🇴",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Escucha sin anuncios y descarga música para escuchar offline.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-bolivia",
  title: "Crunchyroll Bolivia — Gift Card y Suscripción Premium",
  description:
    "Crunchyroll Premium digital con 1, 3 o 6 meses. Si no hay gift card, enviamos suscripción lista para usar.",
  country: "Bolivia",
  flag: "🇧🇴",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Opciones Premium digitales en Bolivia.",
},
      {
        brand: "Disney Plus",
        slug: "disney-plus-bolivia",
        title:
          "Disney Plus Gift Card Bolivia — Acceso guiado al catálogo completo",
        description:
          "Comprá tu Disney Plus Gift Card en Bolivia y te guiamos en todo el proceso de activación. Código digital enviado por email.",
        country: "Bolivia",
        flag: "🇧🇴",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Incluye ayuda por correo si necesitás soporte adicional para el canje en Bolivia.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Bolivia — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recargá diamantes de Free Fire en Bolivia con packs de 300, 500 o 1000 diamantes. Te guiamos en la acreditación si lo necesitás.",
        country: "Bolivia",
        flag: "🇧🇴",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Incluye ayuda por correo si tenés dudas para acreditar los diamantes en Free Fire.",
      },

      {
        brand: "Google Play",
        slug: "google-play-bolivia",
        title:
          "Google Play Gift Card Bolivia — Saldo digital con ayuda en el canje",
        description:
          "Comprá tu Google Play Gift Card en Bolivia y recibí el código por email. Te ayudamos con el paso a paso si lo necesitás.",
        country: "Bolivia",
        flag: "🇧🇴",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Ideal para compras en Google Play desde Bolivia, con soporte por correo en caso de dudas.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-bolivia",
  title: "HBO Max Gift Card Bolivia — Series y películas en formato prepago",
  description:
    "Comprá tu HBO Max Gift Card Bolivia y recibí por correo los datos para entrar. Es una forma simple de tener HBO Max sin tarjeta de crédito boliviana ni cuentas bancarias complicadas.",
  country: "Bolivia",
  flag: "🇧🇴",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Solución práctica para usuarios de Bolivia que quieren HBO Max pagando en dólares de forma prepaga.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-bolivia",
        title: "Tinder Gold Bolivia — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Bolivia sin tarjeta. Te enviamos acceso listo por email.",
        country: "Bolivia",
        flag: "🇧🇴",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Bolivia que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Paraguay
  // =========================
  py: {
    code: "py",
    country: "Paraguay",
    flag: "🇵🇾",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-paraguay",
        title:
          "Netflix Gift Card Paraguay — Compra digital y envío por email",
        description:
          "Obtené tu tarjeta Netflix Paraguay y canjeala sin tarjeta. Recibí el código por correo con instrucciones.",
        country: "Paraguay",
        flag: "🇵🇾",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 9.5,
        baseUSD3: 25,
        baseUSD6: 48,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Incluimos guía si el canje local no estuviera disponible.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-paraguay",
  title: "Crunchyroll Paraguay — Gift Card y Membresías",
  description:
    "Crunchyroll Premium por 1, 3 o 6 meses. Si no hay gift cards, enviamos suscripción activa.",
  country: "Paraguay",
  flag: "🇵🇾",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Planes por meses para ver anime ilimitado.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Paraguay — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en Paraguay con packs de 300, 500 o 1000 diamantes. Recarga digital pensada para jugadores locales.",
        country: "Paraguay",
        flag: "🇵🇾",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Muy buena opción para recargar diamantes de Free Fire en Paraguay sin usar tarjeta.",
      },

      {
        brand: "Spotify",
        slug: "spotify-paraguay",
        title: "Spotify Gift Card Paraguay — Premium prepago",
        description:
          "Activá Spotify Premium en Paraguay con saldo prepago. Disfrutá de música sin anuncios y con descargas.",
        country: "Paraguay",
        flag: "🇵🇾",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Código digital enviado por email en menos de 24 hs.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-paraguay",
        title:
          "Disney Plus Gift Card Paraguay — Ideal para regalar",
        description:
          "Comprá tu Disney Plus Gift Card Paraguay y regalá acceso al catálogo completo de Disney. Código digital por correo.",
        country: "Paraguay",
        flag: "🇵🇾",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 9.5,
        baseUSD3: 25,
        baseUSD6: 48,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Muy buena opción como regalo digital para amigos y familia en Paraguay.",
      },
      {
        brand: "Google Play",
        slug: "google-play-paraguay",
        title:
          "Google Play Gift Card Paraguay — Regalo digital perfecto",
        description:
          "Comprá tu Google Play Gift Card Paraguay y enviamos el código por email. Ideal para regalar saldo en la Play Store paraguaya.",
        country: "Paraguay",
        flag: "🇵🇾",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 9.5,
        baseUSD3: 25,
        baseUSD6: 48,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Excelente opción para saldo digital en Paraguay sin compartir tarjeta.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-paraguay",
  title: "HBO Max Gift Card Paraguay — Acceso a HBO sin tarjeta local",
  description:
    "Comprá tu HBO Max Gift Card en Paraguay y te mandamos el acceso por email. Activás tu cuenta sin depender de tarjetas paraguayas ni bancos que rechazan pagos al exterior.",
  country: "Paraguay",
  flag: "🇵🇾",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Pensada para ver HBO Max en Paraguay cuando tu tarjeta no pasa o preferís pagar por fuera de la plataforma.",
},


      {
        brand: "Tinder Gold",
        slug: "tinder-gold-paraguay",
        title: "Tinder Gold Paraguay — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Paraguay sin tarjeta. Te enviamos acceso listo por email.",
        country: "Paraguay",
        flag: "🇵🇾",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Paraguay que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Ecuador
  // =========================
  ec: {
    code: "ec",
    country: "Ecuador",
    flag: "🇪🇨",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-ecuador",
        title: "Netflix Gift Card Ecuador — Canje sencillo y soporte",
        description:
          "Compra tu Netflix Gift Card en Ecuador y recíbela por email. Te guiamos en el proceso de canje si lo necesitás.",
        country: "Ecuador",
        flag: "🇪🇨",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Solución práctica para pagar Netflix sin tarjeta de crédito.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-ecuador",
  title: "Crunchyroll Ecuador — Gift Card y Suscripción Premium",
  description:
    "Crunchyroll Premium por 1, 3 o 6 meses con entrega digital. Si falta gift card, enviamos suscripción completa.",
  country: "Ecuador",
  flag: "🇪🇨",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Anime y simulcast en Ecuador con acceso premium guiado.",
},
      {
        brand: "Spotify",
        slug: "spotify-ecuador",
        title: "Spotify Gift Card Ecuador — Premium sin anuncios",
        description:
          "Activa Spotify Premium en Ecuador con una gift card prepaga. Código digital por email.",
        country: "Ecuador",
        flag: "🇪🇨",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 7.5,
        baseUSD3: 21,
        baseUSD6: 40,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Escucha música sin interrupciones, con descargas y alta calidad.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Ecuador — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recargá tu cuenta de Free Fire en Ecuador con packs de 300, 500 o 1000 diamantes. Acreditamos los diamantes usando tu ID de jugador.",
        country: "Ecuador",
        flag: "🇪🇨",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Pensado para jugadores de Free Fire en Ecuador que quieren una recarga guiada.",
      },

      {
        brand: "Disney Plus",
        slug: "disney-plus-ecuador",
        title:
          "Disney Plus Gift Card Ecuador — Fácil de activar y usar",
        description:
          "Comprá tu Disney Plus Gift Card en Ecuador y recibí tu código por email. Activación sencilla y acceso inmediato al contenido.",
        country: "Ecuador",
        flag: "🇪🇨",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para quienes quieren pagar Disney Plus en Ecuador de forma prepaga.",
      },
      {
        brand: "Google Play",
        slug: "google-play-ecuador",
        title:
          "Google Play Gift Card Ecuador — Saldo para tu cuenta de Google",
        description:
          "Compra tu Google Play Gift Card Ecuador y recíbela por email. Cargá saldo en tu cuenta para comprar apps, juegos y contenido digital.",
        country: "Ecuador",
        flag: "🇪🇨",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Muy práctica para la Play Store ecuatoriana, sin necesidad de tarjeta.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-ecuador",
  title: "HBO Max Gift Card Ecuador — Suscripción digital sin tarjeta",
  description:
    "Comprá tu HBO Max Gift Card Ecuador y activá la cuenta con saldo digital. Es útil si tu banco rechaza compras online o si compartís la cuenta y no querés exponer tu tarjeta.",
  country: "Ecuador",
  flag: "🇪🇨",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Pensada para ver HBO Max en Ecuador usando recargas prepagas en lugar de pagos directos con tarjeta.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-ecuador",
        title: "Tinder Gold Ecuador — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Ecuador sin tarjeta. Te enviamos acceso listo por email.",
        country: "Ecuador",
        flag: "🇪🇨",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Ecuador que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Costa Rica
  // =========================
  cr: {
    code: "cr",
    country: "Costa Rica",
    flag: "🇨🇷",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-costa-rica",
        title: "Netflix Gift Card Costa Rica — Compra online",
        description:
          "Consigue tu Netflix Gift Card en Costa Rica y canjéala en minutos. Código por email, sin tarjeta.",
        country: "Costa Rica",
        flag: "🇨🇷",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Incluye guía paso a paso para canje y soporte por correo.",
      },
      {
        brand: "Spotify",
        slug: "spotify-costa-rica",
        title: "Spotify Gift Card Costa Rica — Premium prepago",
        description:
          "Activa Spotify Premium en Costa Rica con gift card. Música sin anuncios, multiplataforma y descargas.",
        country: "Costa Rica",
        flag: "🇨🇷",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 7.8,
        baseUSD3: 21.5,
        baseUSD6: 41,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Código por email en menos de 24 horas.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-costa-rica",
        title:
          "Disney Plus Gift Card Costa Rica — Entretenimiento para compartir",
        description:
          "Compra tu Disney Plus Gift Card en Costa Rica y compartí tu cuenta con familia o amigos. Código digital enviado por correo.",
        country: "Costa Rica",
        flag: "🇨🇷",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Excelente opción para ver Disney, Marvel y Pixar en Costa Rica.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Costa Rica — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en Costa Rica con packs de 300, 500 o 1000 diamantes. Recibís instrucciones por correo para acreditar tu recarga.",
        country: "Costa Rica",
        flag: "🇨🇷",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Solución digital para recargar Free Fire en Costa Rica con soporte incluido.",
      },

      {
        brand: "Google Play",
        slug: "google-play-costa-rica",
        title:
          "Google Play Gift Card Costa Rica — Saldo digital inmediato",
        description:
          "Comprá tu Google Play Gift Card Costa Rica y recibí el código por email. Podés usarlo para apps, juegos y películas en la Play Store.",
        country: "Costa Rica",
        flag: "🇨🇷",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Solución rápida para cargar saldo digital en Costa Rica sin usar tarjeta.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-costa-rica",
  title: "HBO Max Gift Card Costa Rica — HBO en modo prepago",
  description:
    "Comprá tu HBO Max Gift Card en Costa Rica y te enviamos el acceso por correo. Activás HBO Max de forma prepaga, sin tarjeta y con soporte si necesitás ayuda al canjear.",
  country: "Costa Rica",
  flag: "🇨🇷",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Buena alternativa para ver HBO Max en Costa Rica sin registrar tarjeta bancaria.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-costa-rica",
        title: "Tinder Gold Costa Rica — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Costa Rica sin tarjeta. Te enviamos acceso listo por email.",
        country: "Costa Rica",
        flag: "🇨🇷",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Costa Rica que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Venezuela
  // =========================
  ve: {
    code: "ve",
    country: "Venezuela",
    flag: "🇻🇪",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-venezuela",
        title:
          "Netflix Gift Card Venezuela — Canje con guía y soporte",
        description:
          "Compra Netflix Gift Card para Venezuela y recibe el código por email. Si el canje local no está disponible, te enviamos guía práctica.",
        country: "Venezuela",
        flag: "🇻🇪",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Saldo prepago para usar Netflix sin tarjeta de crédito.",
      },
      {
  brand: "Crunchyroll",
  slug: "crunchyroll-venezuela",
  title: "Crunchyroll Venezuela — Gift Card y Membresías Premium",
  description:
    "Crunchyroll Premium por 1, 3 o 6 meses. Si falta stock, enviamos suscripción activa lista para usar.",
  country: "Venezuela",
  flag: "🇻🇪",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Entrega digital Premium para fanáticos del anime en Venezuela.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Venezuela — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recargá diamantes de Free Fire en Venezuela con packs de 300, 500 o 1000 diamantes. Incluye ayuda para completar la acreditación.",
        country: "Venezuela",
        flag: "🇻🇪",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Muy útil para jugadores de Free Fire en Venezuela que necesitan soporte durante la recarga.",
      },

      {
        brand: "Spotify",
        slug: "spotify-venezuela",
        title: "Spotify Gift Card Venezuela — Premium sin tarjeta",
        description:
          "Activa Spotify Premium en Venezuela con gift card prepaga. Entrega digital y soporte por email.",
        country: "Venezuela",
        flag: "🇻🇪",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Música sin anuncios y con descargas en tus dispositivos.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-venezuela",
        title:
          "Disney Plus Gift Card Venezuela — Acceso con ayuda personalizada",
        description:
          "Compra tu Disney Plus Gift Card para Venezuela y recibí tu código junto con una guía práctica para activarlo.",
        country: "Venezuela",
        flag: "🇻🇪",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Incluye soporte por correo si necesitás asistencia extra durante el canje.",
      },
      {
        brand: "Google Play",
        slug: "google-play-venezuela",
        title:
          "Google Play Gift Card Venezuela — Saldo con soporte de activación",
        description:
          "Compra tu Google Play Gift Card para Venezuela y recibí tu código por email. Si necesitás ayuda con el canje, te guiamos por correo.",
        country: "Venezuela",
        flag: "🇻🇪",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Muy útil para comprar en Google Play desde Venezuela con ayuda incluida si hiciera falta.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-venezuela",
  title: "HBO Max Gift Card Venezuela — HBO Max sin tarjeta internacional",
  description:
    "Comprá tu HBO Max Gift Card Venezuela y recibí un acceso listo para usar. Es una forma práctica de disfrutar HBO Max aunque no tengas tarjeta internacional o métodos de pago aceptados directamente.",
  country: "Venezuela",
  flag: "🇻🇪",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Pensada para usuarios de Venezuela que buscan una alternativa real para pagar HBO Max sin tarjeta compatible.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-venezuela",
        title: "Tinder Gold Venezuela — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Venezuela sin tarjeta. Te enviamos acceso listo por email.",
        country: "Venezuela",
        flag: "🇻🇪",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Venezuela que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Guatemala
  // =========================
  gt: {
    code: "gt",
    country: "Guatemala",
    flag: "🇬🇹",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-guatemala",
        title: "Netflix Gift Card Guatemala — Compra digital",
        description:
          "Compra tu tarjeta Netflix Guatemala y recíbela por email. Canje fácil, sin tarjeta.",
        country: "Guatemala",
        flag: "🇬🇹",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Incluye instrucciones claras para completar la activación.",
      },
      {
  slug: "crunchyroll-guatemala",
  brand: "Crunchyroll",
  country: "Guatemala",
  flag: "🇬🇹",
  title: "Crunchyroll Premium Gift Card Guatemala",
  description:
    "Activá Crunchyroll Premium en Guatemala por 1, 3 o 6 meses sin usar tarjeta de crédito.",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  seoNote:
    "Con esta gift card de Crunchyroll podés activar tu cuenta Premium en Guatemala sin tarjeta, ideal para ver anime en HD y episodios recientes.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Guatemala — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en Guatemala con packs de 300, 500 o 1000 diamantes. Recibís soporte si necesitás ayuda con tu recarga.",
        country: "Guatemala",
        flag: "🇬🇹",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Pensado para gamers de Guatemala que quieren recargar Free Fire con ayuda incluida.",
      },

      {
        brand: "Spotify",
        slug: "spotify-guatemala",
        title: "Spotify Gift Card Guatemala — Premium prepago",
        description:
          "Activa Spotify Premium en Guatemala usando gift card. Código por email en menos de 24 hs.",
        country: "Guatemala",
        flag: "🇬🇹",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 7.8,
        baseUSD3: 21.5,
        baseUSD6: 41,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para cuentas nuevas o existentes, sin anuncios.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-guatemala",
        title:
          "Disney Plus Gift Card Guatemala — Ideal para toda la casa",
        description:
          "Comprá tu Disney Plus Gift Card en Guatemala y activá el servicio para toda tu casa usando saldo prepago.",
        country: "Guatemala",
        flag: "🇬🇹",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Perfecta para maratones de Disney, Marvel y Star Wars en Guatemala.",
      },
      {
        brand: "Google Play",
        slug: "google-play-guatemala",
        title:
          "Google Play Gift Card Guatemala — Saldo digital para la familia",
        description:
          "Comprá tu Google Play Gift Card Guatemala y usá el saldo para juegos, apps y películas en todos los dispositivos de tu casa.",
        country: "Guatemala",
        flag: "🇬🇹",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Muy buena opción para compras digitales familiares en Guatemala.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-guatemala",
  title: "HBO Max Gift Card Guatemala — Activa HBO Max sin complicarte",
  description:
    "Comprá tu HBO Max Gift Card Guatemala y activá la cuenta usando acceso enviado por email. No tenés que aprobar pagos internacionales ni usar tarjeta guatemalteca.",
  country: "Guatemala",
  flag: "🇬🇹",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Solución para usuarios de Guatemala que quieren HBO Max y tienen problemas para pagar directamente en la plataforma.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-guatemala",
        title: "Tinder Gold Guatemala — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Guatemala sin tarjeta. Te enviamos acceso listo por email.",
        country: "Guatemala",
        flag: "🇬🇹",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Guatemala que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // República Dominicana
  // =========================
  do: {
    code: "do",
    country: "República Dominicana",
    flag: "🇩🇴",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-republica-dominicana",
        title:
          "Netflix Gift Card República Dominicana — Canje sencillo",
        description:
          "Consigue tu Netflix Gift Card para República Dominicana. Código digital por email y soporte.",
        country: "República Dominicana",
        flag: "🇩🇴",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Saldo prepago para mantener tu suscripción activa sin tarjeta.",
      },
      {
  slug: "crunchyroll-republica-dominicana",
  brand: "Crunchyroll",
  country: "República Dominicana",
  flag: "🇩🇴",
  title: "Crunchyroll Premium Gift Card República Dominicana",
  description:
    "Activá Crunchyroll Premium en República Dominicana por 1, 3 o 6 meses sin tarjeta de crédito.",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  seoNote:
    "La gift card de Crunchyroll para República Dominicana te permite pagar tu suscripción Premium en forma prepaga y segura.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire República Dominicana — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recargá diamantes de Free Fire en República Dominicana con packs de 300, 500 o 1000 diamantes. Pagás online y te guiamos en la acreditación.",
        country: "República Dominicana",
        flag: "🇩🇴",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para jugadores de Free Fire en República Dominicana que prefieren pagar en USD con guía incluida.",
      },

      {
        brand: "Spotify",
        slug: "spotify-republica-dominicana",
        title:
          "Spotify Gift Card República Dominicana — Premium sin tarjeta",
        description:
          "Activa Spotify Premium en República Dominicana con gift card prepaga. Entrega digital por email.",
        country: "República Dominicana",
        flag: "🇩🇴",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Reproducción sin anuncios, descargas y alta calidad de audio.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-republica-dominicana",
        title:
          "Disney Plus Gift Card República Dominicana — Diversión asegurada",
        description:
          "Compra tu Disney Plus Gift Card para República Dominicana y accedé a un catálogo enorme de películas y series.",
        country: "República Dominicana",
        flag: "🇩🇴",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Excelente opción como regalo o para activar tu propia cuenta en República Dominicana.",
      },
      {
        brand: "Google Play",
        slug: "google-play-republica-dominicana",
        title:
          "Google Play Gift Card República Dominicana — Saldo listo para usar",
        description:
          "Comprá tu Google Play Gift Card República Dominicana y recibí el código por correo electrónico. Cargá saldo en la Play Store y empezá a comprar en minutos.",
        country: "República Dominicana",
        flag: "🇩🇴",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Excelente complemento para quienes ya usan Netflix, Spotify o Disney y quieren saldo en Google Play.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-republica-dominicana",
  title: "HBO Max Gift Card República Dominicana — Series y películas en streaming",
  description:
    "Comprá tu HBO Max Gift Card en República Dominicana y recibí por email cómo acceder. Activás HBO Max sin tarjeta dominicana y con ayuda si surge alguna duda.",
  country: "República Dominicana",
  flag: "🇩🇴",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Buena opción para ver HBO Max en República Dominicana cuando la tarjeta o el banco ponen trabas a los pagos online.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-república-dominicana",
        title: "Tinder Gold República Dominicana — Activá sin tarjeta",
        description: "Pagá Tinder Gold en República Dominicana sin tarjeta. Te enviamos acceso listo por email.",
        country: "República Dominicana",
        flag: "🇩🇴",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de República Dominicana que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Panamá
  // =========================
  pa: {
    code: "pa",
    country: "Panamá",
    flag: "🇵🇦",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-panama",
        title: "Netflix Gift Card Panamá — Compra online",
        description:
          "Compra tu Netflix Gift Card en Panamá y recíbela por email. Canje guiado y soporte por correo.",
        country: "Panamá",
        flag: "🇵🇦",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Paga Netflix sin tarjeta con saldo prepago.",
      },
      {
  slug: "crunchyroll-panama",
  brand: "Crunchyroll",
  country: "Panamá",
  flag: "🇵🇦",
  title: "Crunchyroll Premium Gift Card Panamá",
  description:
    "Activá Crunchyroll Premium en Panamá por 1, 3 o 6 meses sin usar tarjeta de crédito.",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  seoNote:
    "Con esta gift card de Crunchyroll en Panamá podés disfrutar de anime en HD y sin anuncios pagando con saldo prepago.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Panamá — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en Panamá con packs de 300, 500 o 1000 diamantes. Nosotros gestionamos la recarga en tu cuenta.",
        country: "Panamá",
        flag: "🇵🇦",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Buena opción para recargar Free Fire en Panamá sin usar tarjeta local.",
      },

      {
        brand: "Spotify",
        slug: "spotify-panama",
        title: "Spotify Gift Card Panamá — Premium prepago",
        description:
          "Activa Spotify Premium en Panamá con gift card. Código enviado por email en menos de 24 hs.",
        country: "Panamá",
        flag: "🇵🇦",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Compatible con cuentas nuevas y existentes.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-panama",
        title:
          "Disney Plus Gift Card Panamá — Acceso simple y digital",
        description:
          "Compra tu Disney Plus Gift Card en Panamá y recibí tu código digital por correo. Activación rápida y sin tarjeta.",
        country: "Panamá",
        flag: "🇵🇦",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Muy práctico para pagar Disney Plus mes a mes en Panamá sin complicaciones.",
      },
      {
        brand: "Google Play",
        slug: "google-play-panama",
        title:
          "Google Play Gift Card Panamá — Saldo prepago para Play Store",
        description:
          "Comprá tu Google Play Gift Card Panamá y usá el saldo en la Play Store para juegos, apps y más. Código enviado por email.",
        country: "Panamá",
        flag: "🇵🇦",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 9,
        baseUSD3: 24,
        baseUSD6: 46,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Permite pagar contenido digital en Panamá sin asociar tarjeta de crédito.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-panama",
  title: "HBO Max Gift Card Panamá — Suscripción digital flexible",
  description:
    "Comprá tu HBO Max Gift Card Panamá y elegí cuántos meses querés ver HBO. Usás acceso prepago en lugar de tarjeta, con envío rápido por correo electrónico.",
  country: "Panamá",
  flag: "🇵🇦",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Ideal para ver HBO Max en Panamá controlando cuánto pagás y cuánto tiempo tenés activo el servicio.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-panamá",
        title: "Tinder Gold Panamá — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Panamá sin tarjeta. Te enviamos acceso listo por email.",
        country: "Panamá",
        flag: "🇵🇦",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Panamá que quieren Tinder Gold en modo prepago."
      },
    ],
  },
  // =========================
  // Brazil
  // =========================

    br: {
    code: "br",
    country: "Brasil",
    flag: "🇧🇷",
    products: [
      // 🎵 Spotify Brasil
      {
        brand: "Spotify",
        slug: "spotify-brasil",
        title: "Spotify Gift Card Brasil — Premium pré-pago sem cartão",
        description:
          "Ative Spotify Premium no Brasil com uma gift card digital. Receba o código por email e aproveite música sem anúncios e downloads offline.",
        country: "Brasil",
        flag: "🇧🇷",
        redeemUrl: "https://www.spotify.com/br/redeem/",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Perfeito para quem quer Spotify Premium no Brasil sem usar cartão de crédito.",
      },

      // 🎬 Netflix Brasil
      {
        brand: "Netflix",
        slug: "netflix-brasil",
        title: "Netflix Gift Card Brasil — Assinatura digital pré-paga",
        description:
          "Ative sua assinatura Netflix no Brasil com uma gift card digital. Receba tudo por email e assista séries e filmes em HD ou 4K.",
        country: "Brasil",
        flag: "🇧🇷",
        redeemUrl: "https://www.netflix.com/redeem",
        baseUSD1: 10,
        baseUSD3: 25,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para ativar Netflix no Brasil sem cartão e sem complicação.",
      },

      // 🧡 Crunchyroll Brasil
      {
        brand: "Crunchyroll",
        slug: "crunchyroll-brasil",
        title:
          "Crunchyroll Gift Card Brasil — Anime Premium com código digital",
        description:
          "Ative Crunchyroll Premium no Brasil com uma gift card digital. Receba o código ou uma conta já ativada, conforme a disponibilidade.",
        country: "Brasil",
        flag: "🇧🇷",
        redeemUrl: "https://www.crunchyroll.com/redeem",
        baseUSD1: 8,
        baseUSD3: 22,
        baseUSD6: 42,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ótimo para ver animes em HD e novos episódios rapidamente no Brasil.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-brasil",
  title: "HBO Max Gift Card Brasil — Assinatura HBO em modo pré-pago",
  description:
    "Compre sua HBO Max Gift Card no Brasil e receba o acesso por email. Você ativa ou renova a assinatura sem usar cartão de crédito brasileiro diretamente na plataforma, com instruções em português.",
  country: "Brasil",
  flag: "🇧🇷",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Perfeita para quem quer HBO Max / Max no Brasil pagando de forma pré-paga e controlando os meses de uso.",
},


      // 🟦 Google Play Brasil
      {
        brand: "Google Play",
        slug: "google-play-brasil",
        title:
          "Google Play Gift Card Brasil — Saldo digital para apps e jogos",
        description:
          "Carregue saldo Google Play no Brasil com uma gift card digital. Pague YouTube Premium, jogos e compras dentro de apps.",
        country: "Brasil",
        flag: "🇧🇷",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 10,
        baseUSD3: 25,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Perfeito para pagar YouTube Premium e jogos sem cartão brasileiro.",
      },

      // ⭐ Disney Plus Brasil
      {
        brand: "Disney Plus",
        slug: "disney-plus-brasil",
        title: "Disney Plus Gift Card Brasil — Código digital pré-pago",
        description:
          "Ative Disney Plus no Brasil com uma gift card digital. Filmes e séries da Disney, Marvel, Star Wars e mais.",
        country: "Brasil",
        flag: "🇧🇷",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 10,
        baseUSD3: 25,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para quem quer Disney+ no Brasil sem usar cartão de crédito.",
      },

      // 🔥 Free Fire Brasil (diamantes)
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire-brasil",
        title:
          "Diamantes Free Fire Brasil — Recarga de 300, 500 ou 1000 diamantes",
        description:
          "Compre diamantes de Free Fire no Brasil e receba tudo por email. Basta enviar o ID do jogador para ativar a recarga.",
        country: "Brasil",
        flag: "🇧🇷",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,   // 300 diamantes
        baseUSD3: 8,   // 500 diamantes
        baseUSD6: 15,  // 1000 diamantes
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Recarga rápida de diamantes Free Fire no Brasil com suporte por email.",
      },
    ],
  },

  // =========================
  // Honduras
  // =========================
  hn: {
    code: "hn",
    country: "Honduras",
    flag: "🇭🇳",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-honduras",
        title: "Netflix Gift Card Honduras — Canje práctico",
        description:
          "Adquiere tu Netflix Gift Card en Honduras y canjéala sin tarjeta. Código por email y guía de uso.",
        country: "Honduras",
        flag: "🇭🇳",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Fácil de usar, ideal para regalar o mantener tu suscripción.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Honduras — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recargá diamantes de Free Fire en Honduras con packs de 300, 500 o 1000 diamantes. Te ayudamos a completar la recarga si lo necesitás.",
        country: "Honduras",
        flag: "🇭🇳",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Pensado para jugadores de Free Fire en Honduras que buscan una recarga simple y guiada.",
      },

      {
  slug: "crunchyroll-honduras",
  brand: "Crunchyroll",
  country: "Honduras",
  flag: "🇭🇳",
  title: "Crunchyroll Premium Gift Card Honduras",
  description:
    "Activá Crunchyroll Premium en Honduras por 1, 3 o 6 meses sin usar tarjeta de crédito.",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  seoNote:
    "La gift card de Crunchyroll para Honduras te permite ver anime en HD y sin anuncios pagando de forma prepaga.",
},
      {
        brand: "Spotify",
        slug: "spotify-honduras",
        title: "Spotify Gift Card Honduras — Premium prepago",
        description:
          "Activa Spotify Premium en Honduras con gift card. Entrega por email.",
        country: "Honduras",
        flag: "🇭🇳",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 7.8,
        baseUSD3: 21.5,
        baseUSD6: 41,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Música sin anuncios y con descargas.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-honduras",
        title:
          "Disney Plus Gift Card Honduras — Activación sin tarjeta",
        description:
          "Compra tu Disney Plus Gift Card en Honduras y recibí tu código digital para activar el servicio de forma prepaga.",
        country: "Honduras",
        flag: "🇭🇳",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Solución simple para ver Disney Plus sin depender de tarjeta en Honduras.",
      },
      {
        brand: "Google Play",
        slug: "google-play-honduras",
        title:
          "Google Play Gift Card Honduras — Saldo prepago para tus juegos",
        description:
          "Comprá tu Google Play Gift Card Honduras y usá el saldo para comprar juegos, gemas, apps y películas en la Play Store.",
        country: "Honduras",
        flag: "🇭🇳",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Ideal para gamers y usuarios frecuentes de la Play Store en Honduras.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-honduras",
  title: "HBO Max Gift Card Honduras — Suscripción sin tarjeta de crédito",
  description:
    "Compra tu HBO Max Gift Card Honduras y activá tu cuenta recibiendo todo por email. No hace falta tener tarjeta internacional ni cuenta bancaria especial.",
  country: "Honduras",
  flag: "🇭🇳",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Pensada para usuarios de Honduras que quieren acceder a HBO Max pero tienen problemas con los medios de pago tradicionales.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-honduras",
        title: "Tinder Gold Honduras — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Honduras sin tarjeta. Te enviamos acceso listo por email.",
        country: "Honduras",
        flag: "🇭🇳",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Honduras que quieren Tinder Gold en modo prepago."
      },
    ],
  },
  // =========================
  // España
  // =========================
  es: {
    code: "es",
    country: "España",
    flag: "🇪🇸",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-espana",
        title: "Netflix Gift Card España — Paga en euros sin tarjeta",
        description:
          "Compra tu Netflix Gift Card para España y paga tu suscripción en euros sin usar tarjeta de crédito. Recibe el código por email con una guía clara de canje.",
        country: "España",
        flag: "🇪🇸",
        redeemUrl: "https://www.netflix.com/es/redeem",
        baseUSD1: 11,
        baseUSD3: 30,
        baseUSD6: 58,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para pagar Netflix en España sin exponer tu tarjeta de crédito.",
      },
            {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire España — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en España con packs de 300, 500 o 1000 diamantes. Recarga digital con soporte si necesitás ayuda con tu cuenta.",
        country: "España",
        flag: "🇪🇸",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Enfocado en jugadores de Free Fire en España que quieren una recarga rápida y clara.",
      },

      {
  brand: "Crunchyroll",
  slug: "crunchyroll-espana",
  title: "Crunchyroll España — Gift Card y Suscripción Premium",
  description:
    "Accede a Crunchyroll Premium en España durante 1, 3 o 6 meses. Si no hay gift card, enviamos una suscripción activa.",
  country: "España",
  flag: "🇪🇸",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  fx: 1,
  currency: "USD",
  symbol: "$",
  image: "/img/crunchy-hero.png",
  seoNote:
    "Acceso Instantáneo al anime premium en España.",
},
      {
        brand: "Spotify",
        slug: "spotify-espana",
        title: "Spotify Gift Card España — Premium prepago en euros",
        description:
          "Activa Spotify Premium en España con una gift card prepaga. Disfruta música sin anuncios, descargas y sonido de alta calidad sin necesidad de tarjeta.",
        country: "España",
        flag: "🇪🇸",
        redeemUrl: "https://www.spotify.com/es/redeem",
        baseUSD1: 11,
        baseUSD3: 30,
        baseUSD6: 58,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Compatible con cuentas nuevas o existentes de Spotify en España.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-espana",
        title: "Disney Plus Gift Card España — Todo Disney, Marvel y Star Wars",
        description:
          "Compra tu Disney Plus Gift Card España y paga la suscripción sin tarjeta. Recibe el código por email con instrucciones para activarlo en pocos pasos.",
        country: "España",
        flag: "🇪🇸",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 11,
        baseUSD3: 30,
        baseUSD6: 58,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Perfecta para ver Disney, Pixar, Marvel y Star Wars en España sin tarjeta.",
      },
      {
        brand: "Google Play",
        slug: "google-play-espana",
        title: "Google Play Gift Card España — Saldo digital para Play Store",
        description:
          "Añade saldo a tu cuenta de Google Play España con una gift card digital. Úsala para apps, juegos, películas, libros y compras dentro de juegos.",
        country: "España",
        flag: "🇪🇸",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 10,
        baseUSD3: 25,
        baseUSD6: 50,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Ideal para comprar en la Play Store española sin usar tarjeta.",
      },
      {
  brand: "HBO Max",
  slug: "hbo-max-espana",
  title: "HBO Max Gift Card España — Paga HBO en euros sin tarjeta",
  description:
    "Compra tu HBO Max Gift Card España y recibe un acceso digital que te permite disfrutar de HBO Max sin asociar tu tarjeta española a la plataforma. Todo se envía por correo con instrucciones sencillas.",
  country: "España",
  flag: "🇪🇸",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Útil para usuarios de España que prefieren pagar HBO Max con saldos prepagos o que tienen problemas con su banco o tarjeta.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-españa",
        title: "Tinder Gold España — Activá sin tarjeta",
        description: "Pagá Tinder Gold en España sin tarjeta. Te enviamos acceso listo por email.",
        country: "España",
        flag: "🇪🇸",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de España que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // Nicaragua
  // =========================
  ni: {
    code: "ni",
    country: "Nicaragua",
    flag: "🇳🇮",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-nicaragua",
        title: "Netflix Gift Card Nicaragua — Compra digital",
        description:
          "Consigue tu Netflix Gift Card en Nicaragua y recíbela por email. Canje y soporte incluidos.",
        country: "Nicaragua",
        flag: "🇳🇮",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Paga sin tarjeta usando saldo prepago.",
      },
      {
  slug: "crunchyroll-nicaragua",
  brand: "Crunchyroll",
  country: "Nicaragua",
  flag: "🇳🇮",
  title: "Crunchyroll Premium Gift Card Nicaragua",
  description:
    "Activá Crunchyroll Premium en Nicaragua por 1, 3 o 6 meses sin tarjeta de crédito.",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  seoNote:
    "Con esta gift card de Crunchyroll en Nicaragua podés acceder a anime en HD y simulcast sin necesidad de tarjeta.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire Nicaragua — Recarga 300, 500 o 1000 diamantes",
        description:
          "Recargá diamantes de Free Fire en Nicaragua con packs de 300, 500 o 1000 diamantes. Pagás en USD y te asistimos si tenés dudas.",
        country: "Nicaragua",
        flag: "🇳🇮",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Solución para recargar Free Fire en Nicaragua con soporte por correo.",
      },

      {
        brand: "Spotify",
        slug: "spotify-nicaragua",
        title: "Spotify Gift Card Nicaragua — Premium prepago",
        description:
          "Activa Spotify Premium en Nicaragua con gift card. Código por email.",
        country: "Nicaragua",
        flag: "🇳🇮",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 7.8,
        baseUSD3: 21.5,
        baseUSD6: 41,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Disfruta música sin anuncios, multiplataforma.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-nicaragua",
        title:
          "Disney Plus Gift Card Nicaragua — Contenido en pocos pasos",
        description:
          "Comprá tu Disney Plus Gift Card en Nicaragua y recibí un código para activar el servicio de forma rápida y sencilla.",
        country: "Nicaragua",
        flag: "🇳🇮",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Muy cómoda para quienes prefieren pagar Disney Plus con saldo prepago.",
      },
      {
        brand: "Google Play",
        slug: "google-play-nicaragua",
        title:
          "Google Play Gift Card Nicaragua — Saldo sencillo de usar",
        description:
          "Comprá tu Google Play Gift Card Nicaragua y recibí el código por email. Cargá saldo en tu cuenta y empezá a comprar en la Play Store.",
        country: "Nicaragua",
        flag: "🇳🇮",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Solución simple para pagar apps y juegos en Nicaragua sin tarjeta.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-nicaragua",
  title: "HBO Max Gift Card Nicaragua — HBO sin tarjeta ni banco",
  description:
    "Comprá tu HBO Max Gift Card Nicaragua y te mandamos todo por email. Activás tu suscripción sin usar tarjeta de crédito ni débito y sin trámites en el banco.",
  country: "Nicaragua",
  flag: "🇳🇮",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Pensada para usuarios de Nicaragua que quieren HBO Max pero no tienen tarjeta o prefieren no usarla online.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-nicaragua",
        title: "Tinder Gold Nicaragua — Activá sin tarjeta",
        description: "Pagá Tinder Gold en Nicaragua sin tarjeta. Te enviamos acceso listo por email.",
        country: "Nicaragua",
        flag: "🇳🇮",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de Nicaragua que quieren Tinder Gold en modo prepago."
      },
    ],
  },

  // =========================
  // El Salvador
  // =========================
  sv: {
    code: "sv",
    country: "El Salvador",
    flag: "🇸🇻",
    products: [
      {
        brand: "Netflix",
        slug: "netflix-el-salvador",
        title: "Netflix Gift Card El Salvador — Canje simple",
        description:
          "Adquiere tu Netflix Gift Card en El Salvador y recíbela por email. Guía de canje incluida.",
        country: "El Salvador",
        flag: "🇸🇻",
        redeemUrl: "https://www.netflix.com/browse",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Usa Netflix sin tarjeta con una solución prepaga.",
      },
      {
  slug: "crunchyroll-el-salvador",
  brand: "Crunchyroll",
  country: "El Salvador",
  flag: "🇸🇻",
  title: "Crunchyroll Premium Gift Card El Salvador",
  description:
    "Activá Crunchyroll Premium en El Salvador por 1, 3 o 6 meses sin tarjeta de crédito.",
  redeemUrl: "https://www.crunchyroll.com/redeem",
  baseUSD1: 7,
  baseUSD3: 20,
  baseUSD6: 38,
  seoNote:
    "Usá esta gift card de Crunchyroll en El Salvador para ver anime sin anuncios y con calidad HD, sin asociar tu tarjeta.",
},
      {
        brand: "Free Fire",
        slug: "diamantes-free-fire",
        title:
          "Diamantes Free Fire El Salvador — Recarga 300, 500 o 1000 diamantes",
        description:
          "Compra diamantes de Free Fire en El Salvador con packs de 300, 500 o 1000 diamantes. Recarga pensada para jugadores locales.",
        country: "El Salvador",
        flag: "🇸🇻",
        redeemUrl: "https://shop.garena.sg/app",
        baseUSD1: 5,
        baseUSD3: 8,
        baseUSD6: 15,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para gamers de El Salvador que quieren recargar Free Fire rápido y en USD.",
      },

      {
        brand: "Spotify",
        slug: "spotify-el-salvador",
        title: "Spotify Gift Card El Salvador — Premium sin tarjeta",
        description:
          "Activa Spotify Premium en El Salvador con gift card. Envío por email.",
        country: "El Salvador",
        flag: "🇸🇻",
        redeemUrl: "https://www.spotify.com/redeem",
        baseUSD1: 7.8,
        baseUSD3: 21.5,
        baseUSD6: 41,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Escucha sin anuncios y con descargas.",
      },
      {
        brand: "Disney Plus",
        slug: "disney-plus-el-salvador",
        title:
          "Disney Plus Gift Card El Salvador — Suscripción prepaga",
        description:
          "Compra tu Disney Plus Gift Card en El Salvador y activá la plataforma usando saldo prepago. Código enviado por correo electrónico.",
        country: "El Salvador",
        flag: "🇸🇻",
        redeemUrl: "https://www.disneyplus.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote:
          "Ideal para ver Disney Plus en El Salvador sin usar tarjeta de crédito.",
      },
      {
        brand: "Google Play",
        slug: "google-play-el-salvador",
        title:
          "Google Play Gift Card El Salvador — Saldo para compras digitales",
        description:
          "Comprá tu Google Play Gift Card El Salvador y recibí el código por email. Cargá saldo en la Play Store para juegos, apps y películas.",
        country: "El Salvador",
        flag: "🇸🇻",
        redeemUrl: "https://play.google.com/redeem",
        baseUSD1: 8.5,
        baseUSD3: 23,
        baseUSD6: 44,
        fx: 1,
        currency: "USD",
        symbol: "$",
        image: "/ai/googleplay-card-hero.png",
        seoNote:
          "Muy buena forma de pagar Google Play en El Salvador sin exponer tu tarjeta.",
      },
{
  brand: "HBO Max",
  slug: "hbo-max-el-salvador",
  title: "HBO Max Gift Card El Salvador — Acceso simple a HBO",
  description:
    "Adquirí tu HBO Max Gift Card en El Salvador y recibí la información por correo para entrar a la cuenta. Es una forma directa de disfrutar HBO Max sin tarjeta de crédito salvadoreña.",
  country: "El Salvador",
  flag: "🇸🇻",
  redeemUrl: "https://www.hbomax.com",
  baseUSD1: 8.5,
  baseUSD3: 23,
  baseUSD6: 44,
  fx: 1,
  currency: "USD",
  symbol: "$",
  seoNote:
    "Opción sencilla para ver HBO Max en El Salvador usando acceso prepago en vez de pagos directos.",
},

      {
        brand: "Tinder Gold",
        slug: "tinder-gold-el-salvador",
        title: "Tinder Gold El Salvador — Activá sin tarjeta",
        description: "Pagá Tinder Gold en El Salvador sin tarjeta. Te enviamos acceso listo por email.",
        country: "El Salvador",
        flag: "🇸🇻",
        redeemUrl: "https://www.tinder.com",
        baseUSD1: 12,
        baseUSD3: 30,
        baseUSD6: 55,
        fx: 1,
        currency: "USD",
        symbol: "$",
        seoNote: "Pensado para usuarios de El Salvador que quieren Tinder Gold en modo prepago."
      },
    ],
  },
};

// =========================
// Helpers
// =========================

export function getCountryCodes() {
  return Object.keys(giftCardsData);
}

export function getCountryData(code) {
  return giftCardsData[code];
}

export function getProductsByCountry(code) {
  const c = giftCardsData[code];
  return c?.products ?? [];
}

export function findProduct(code, slug) {
  return getProductsByCountry(code).find((p) => p.slug === slug);
}

// Genera TODAS las rutas estáticas para [pais]/[slug] con props del producto
export function getAllProductPaths() {
  const paths = [];
  for (const [pais, data] of Object.entries(giftCardsData)) {
    for (const prod of data.products) {
      paths.push({
        params: { pais, slug: prod.slug },
        // Props que tu [slug].astro ya espera (sin romper el layout)
        props: {
          pais,
          ...prod,
        },
      });
    }
  }
  return paths;
}

// Link alternates por BRAND (Netflix, Spotify, Disney Plus, Google Play) en todos los países
export function getHreflangsForBrand(brand) {
  const list = [];
  for (const [code, data] of Object.entries(giftCardsData)) {
    for (const prod of data.products) {
      if (prod.brand === brand) {
        list.push({
          href: `https://cuentasdigitales.com.ar/gift-cards/${code}/${prod.slug}/`,
          lang: `es-${code.toUpperCase()}`,
        });
      }
    }
  }
  return list;
}



