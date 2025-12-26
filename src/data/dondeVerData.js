// src/data/dondeVerData.js

// Lista de países que van a tener sección "Dónde ver"
export const whereToWatchCountries = [
  { code: "ar", name: "Argentina", flag: "🇦🇷" },
  { code: "mx", name: "México", flag: "🇲🇽" },
  { code: "es", name: "España", flag: "🇪🇸" },
  { code: "cl", name: "Chile", flag: "🇨🇱" },
  { code: "co", name: "Colombia", flag: "🇨🇴" },
  // Agregá más países si querés
];

// Artículos por país
// Podés ir sumando más eventos/series/películas.
export const whereToWatchData = {
ar: [
  {
    slug: "colapinto-f1-qatar-2025",
    title: "Dónde ver a Franco Colapinto en el GP de Qatar 2025 (F1) desde Argentina",
    seoTitle:
      "Dónde ver la carrera de Franco Colapinto en el GP de Qatar 2025 en vivo desde Argentina",
    description:
      "Descubrí cómo ver en vivo la participación de Franco Colapinto en el Gran Premio de Qatar 2025 de Fórmula 1 desde Argentina, con Disney+ (ESPN) como la plataforma oficial para seguir toda la acción.",
    eventType: "sports",
    eventName: "Gran Premio de Qatar 2025 - Fórmula 1",

    mainPlatform: "Disney+ (con ESPN incluido)",
    otherPlatforms: [
      "Señales de ESPN en tu servicio de TV por cable, si tu paquete las incluye",
      "Apps de tu operador de TV (Flow, DGO, etc.) con ESPN en vivo"
    ],

    // CARRERA – HORA ARGENTINA
    eventDateISO: "2025-11-30T13:00:00Z", // se convierte a 10:00 Argentina
    timezoneNote:
      "El horario estimado para Argentina es domingo 30 de noviembre de 2025 a las 10:00 hs.",

    countryNote:
      "En Argentina, la Fórmula 1 se transmite por ESPN. La forma más cómoda de verla online es a través de Disney+, que incluye ESPN dentro de su oferta de streaming.",

    giftCardBrand: "disney_plus",
    giftCardSlugByCountry: {
      ar: "disney-plus-argentina"
    },

    // 🗓️ HORARIOS en Argentina
    sessions: [
      {
        label: "Práctica libre 1",
        day: "Viernes 28 de noviembre de 2025",
        time: "07:30 - 08:30 (hora de Argentina)"
      },
      {
        label: "Sprint Qualifying",
        day: "Viernes 28 de noviembre de 2025",
        time: "11:30 - 12:14 (hora de Argentina)"
      },
      {
        label: "Sprint",
        day: "Sábado 29 de noviembre de 2025",
        time: "08:00 - 09:00 (hora de Argentina)"
      },
      {
        label: "Clasificación",
        day: "Sábado 29 de noviembre de 2025",
        time: "12:00 - 13:00 (hora de Argentina)"
      }
    ],

    faq: [
      {
        question: "¿Puedo ver la carrera de Colapinto gratis desde Argentina?",
        answer:
          "No suele haber transmisiones oficiales gratuitas. La opción más estable es verla por Disney+ (que incluye ESPN) o mediante las señales de ESPN si tu servicio de cable las ofrece."
      },
      {
        question: "¿Necesito Disney+ para ver la carrera online?",
        answer:
          "Si querés ver la carrera por streaming y no tenés un paquete de cable con ESPN, la recomendación es contratar Disney+, que incluye ESPN."
      }
    ]
  },

  {
    slug: "colapinto-f1-abu-dabi-2025",
    title: "Dónde ver a Franco Colapinto en el GP de Abu Dabi 2025 (F1) desde Argentina",
    seoTitle:
      "Cómo ver en vivo la carrera de Franco Colapinto en el GP de Abu Dabi 2025 desde Argentina",
    description:
      "Guía para ver en vivo la última carrera del año de Franco Colapinto en el Gran Premio de Abu Dabi 2025 de Fórmula 1 desde Argentina, destacando Disney+ (ESPN) como opción principal.",
    eventType: "sports",
    eventName: "Gran Premio de Abu Dabi 2025 - Fórmula 1",

    mainPlatform: "Disney+ (con ESPN incluido)",
    otherPlatforms: [
      "Señales de ESPN en tu servicio de TV por cable, si tu paquete las incluye",
      "Plataformas de TV de tu operador (Flow, DGO, etc.) con ESPN en vivo"
    ],

    // CARRERA – HORA ARGENTINA
    eventDateISO: "2025-12-07T09:00:00Z", // se convierte a 06:00 Argentina
    timezoneNote:
      "El horario estimado para Argentina es domingo 7 de diciembre de 2025 a las 06:00 hs.",

    countryNote:
      "El GP de Abu Dabi cierra la temporada de Fórmula 1 y en Argentina se ve por ESPN. La forma más cómoda de verlo online es a través de Disney+, que incluye ESPN en su catálogo.",

    giftCardBrand: "disney_plus",
    giftCardSlugByCountry: {
      ar: "disney-plus-argentina"
    },

    // 🗓️ HORARIOS en Argentina
    sessions: [
      {
        label: "Práctica libre 1",
        day: "Viernes 5 de diciembre de 2025",
        time: "02:30 - 03:30 (hora de Argentina)"
      },
      {
        label: "Práctica libre 2",
        day: "Viernes 5 de diciembre de 2025",
        time: "06:00 - 07:00 (hora de Argentina)"
      },
      {
        label: "Práctica libre 3",
        day: "Sábado 6 de diciembre de 2025",
        time: "03:30 - 04:30 (hora de Argentina)"
      },
      {
        label: "Clasificación",
        day: "Sábado 6 de diciembre de 2025",
        time: "07:00 - 08:00 (hora de Argentina)"
      }
    ],

    faq: [
      {
        question: "¿Vale la pena levantarse temprano para ver el GP de Abu Dabi?",
        answer:
          "Es la última carrera del año y puede definir posiciones del campeonato. Además, puede ser la última participación de Colapinto en la temporada."
      },
      {
        question: "¿Puedo ver la carrera en diferido si no llego al horario?",
        answer:
          "Disney+ y algunos servicios de TV permiten ver repeticiones o resúmenes. Revisá si tu app ofrece contenido on-demand de ESPN."
      }
    ]
  }
],
  mx: [
    {
      slug: "colapinto-f1-qatar-2025",
      title: "Dónde ver la carrera de Franco Colapinto F1 Qatar 2025 en México",
      seoTitle: "Cómo ver la carrera de Franco Colapinto F1 Qatar 2025 en vivo desde México",
      description:
        "Opciones para ver en vivo la carrera de Franco Colapinto en el GP de Qatar 2025 desde México, con plataformas oficiales.",
      eventType: "sports",
      eventName: "Gran Premio de Qatar 2025 - F1",
      mainPlatform: "Star+ / ESPN",
      otherPlatforms: ["Operadores de TV de paga que incluyan ESPN"],
      eventDateISO: "2025-03-10T11:00:00Z",
      timezoneNote: "El horario puede variar según la confirmación oficial de la F1.",
      countryNote:
        "En México, Star+ y ESPN suelen tener los derechos de transmisión de la Fórmula 1.",
      giftCardBrand: "disney_plus",
      giftCardSlugByCountry: {
        mx: "disney-plus-mexico",
      },
      faq: [
        {
          question: "¿Necesito Star+ para ver la carrera?",
          answer:
            "En la mayoría de los casos sí. Revisá si tu operador incluye ESPN en tu paquete y si ofrece acceso por app.",
        },
      ],
    },
  ],
  es: [
    {
      slug: "colapinto-f1-qatar-2025",
      title: "Dónde ver la carrera de Franco Colapinto F1 Qatar 2025 en España",
      seoTitle: "Dónde ver en directo a Franco Colapinto en el GP de Qatar 2025 desde España",
      description:
        "Formas legales de ver la carrera de Franco Colapinto en el Gran Premio de Qatar 2025 desde España.",
      eventType: "sports",
      eventName: "Gran Premio de Qatar 2025 - F1",
      mainPlatform: "DAZN F1 (según derechos vigentes)",
      otherPlatforms: ["Operadores que incluyan el canal de F1 en su paquete"],
      eventDateISO: "2025-03-10T20:00:00Z",
      timezoneNote: "Horario aproximado, verificá la programación oficial en los días previos.",
      countryNote:
        "En España, la Fórmula 1 suele emitirse a través de DAZN o acuerdos con operadores locales.",
      giftCardBrand: "dazn",
      giftCardSlugByCountry: {
        es: "dazn-espana",
      },
      faq: [
        {
          question: "¿Puedo ver la F1 sin contrato de TV?",
          answer:
            "Sí, cuando DAZN tiene los derechos, podés contratar la suscripción directamente en su app o web.",
        },
      ],
    },
  ],
  // Podés seguir sumando más países y más eventos acá
};

// Devuelve info básica de un país
export function getWhereToWatchCountryMeta(countryCode) {
  return (
    whereToWatchCountries.find((c) => c.code === countryCode) || {
      code: countryCode,
      name: countryCode.toUpperCase(),
      flag: "🌎",
    }
  );
}

// Artículos de un país
export function getWhereToWatchArticlesForCountry(countryCode) {
  return whereToWatchData[countryCode] || [];
}

// Un artículo específico
export function getWhereToWatchArticle(countryCode, slug) {
  const list = whereToWatchData[countryCode] || [];
  return list.find((item) => item.slug === slug) || null;
}

// Para getStaticPaths del [pais]/[slug].astro
export function getAllWhereToWatchPaths() {
  const paths = [];

  for (const [countryCode, articles] of Object.entries(whereToWatchData)) {
    const meta = getWhereToWatchCountryMeta(countryCode);
    for (const article of articles) {
      paths.push({
        params: {
          pais: countryCode,
          slug: article.slug,
        },
        props: {
          countryCode,
          countryName: meta.name,
          flag: meta.flag,
          article,
        },
      });
    }
  }

  return paths;
}

// Para getStaticPaths del [pais]/index.astro
export function getCountryPathsForWhereToWatch() {
  const paths = [];

  for (const country of whereToWatchCountries) {
    const articles = getWhereToWatchArticlesForCountry(country.code);
    if (articles.length === 0) continue;

    paths.push({
      params: {
        pais: country.code,
      },
      props: {
        countryCode: country.code,
        countryName: country.name,
        flag: country.flag,
      },
    });
  }

  return paths;
}
