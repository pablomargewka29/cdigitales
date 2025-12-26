// src/data/gamesData.js
import { countryListJuegos } from "./countryListJuegos.js";

const countryMap = Object.fromEntries(
  countryListJuegos.map((c) => [c.code, c])
);

// precios aproximados, ajustalos a gusto
export const gamesData = [
  // ARGENTINA
  {
    countryCode: "ar",
    platform: "ps4",
    slug: "minecraft-ps4-argentina",
    localPrice: "ARS 9.200"
  },
  {
    countryCode: "ar",
    platform: "ps5",
    slug: "minecraft-ps5-argentina",
    localPrice: "ARS 10.500"
  },

  // MÉXICO
  {
    countryCode: "mx",
    platform: "ps4",
    slug: "minecraft-ps4-mexico",
    localPrice: "MXN 180"
  },
  {
    countryCode: "mx",
    platform: "ps5",
    slug: "minecraft-ps5-mexico",
    localPrice: "MXN 210"
  },

  // CHILE
  {
    countryCode: "cl",
    platform: "ps4",
    slug: "minecraft-ps4-chile",
    localPrice: "CLP 9.500"
  },
  {
    countryCode: "cl",
    platform: "ps5",
    slug: "minecraft-ps5-chile",
    localPrice: "CLP 10.500"
  },

  // COLOMBIA
  {
    countryCode: "co",
    platform: "ps4",
    slug: "minecraft-ps4-colombia",
    localPrice: "COP 38.000"
  },
  {
    countryCode: "co",
    platform: "ps5",
    slug: "minecraft-ps5-colombia",
    localPrice: "COP 42.000"
  },

  // PERÚ
  {
    countryCode: "pe",
    platform: "ps4",
    slug: "minecraft-ps4-peru",
    localPrice: "PEN 36"
  },
  {
    countryCode: "pe",
    platform: "ps5",
    slug: "minecraft-ps5-peru",
    localPrice: "PEN 40"
  },

  // URUGUAY
  {
    countryCode: "uy",
    platform: "ps4",
    slug: "minecraft-ps4-uruguay",
    localPrice: "UYU 380"
  },
  {
    countryCode: "uy",
    platform: "ps5",
    slug: "minecraft-ps5-uruguay",
    localPrice: "UYU 430"
  },

  // PARAGUAY
  {
    countryCode: "py",
    platform: "ps4",
    slug: "minecraft-ps4-paraguay",
    localPrice: "PYG 85.000"
  },
  {
    countryCode: "py",
    platform: "ps5",
    slug: "minecraft-ps5-paraguay",
    localPrice: "PYG 95.000"
  },

  // BOLIVIA
  {
    countryCode: "bo",
    platform: "ps4",
    slug: "minecraft-ps4-bolivia",
    localPrice: "BOB 70"
  },
  {
    countryCode: "bo",
    platform: "ps5",
    slug: "minecraft-ps5-bolivia",
    localPrice: "BOB 80"
  },

  // ECUADOR
  {
    countryCode: "ec",
    platform: "ps4",
    slug: "minecraft-ps4-ecuador",
    localPrice: "USD 9,50"
  },
  {
    countryCode: "ec",
    platform: "ps5",
    slug: "minecraft-ps5-ecuador",
    localPrice: "USD 10,50"
  },

  // VENEZUELA
  {
    countryCode: "ve",
    platform: "ps4",
    slug: "minecraft-ps4-venezuela",
    localPrice: "USD 9,50 (referencia)"
  },
  {
    countryCode: "ve",
    platform: "ps5",
    slug: "minecraft-ps5-venezuela",
    localPrice: "USD 10,50 (referencia)"
  },

  // ESPAÑA
  {
    countryCode: "es",
    platform: "ps4",
    slug: "minecraft-ps4-espana",
    localPrice: "EUR 9,50"
  },
  {
    countryCode: "es",
    platform: "ps5",
    slug: "minecraft-ps5-espana",
    localPrice: "EUR 10,50"
  }
];

export function getAllGamePaths() {
  return gamesData.map((game) => {
    const country = countryMap[game.countryCode];
    return {
      params: {
        pais: game.countryCode,
        slug: game.slug
      },
      props: {
        game: {
          ...game,
          countryName: country?.name ?? "",
          flag: country?.flag ?? ""
        }
      }
    };
  });
}

export function getGamesByCountry(code) {
  const games = gamesData.filter((g) => g.countryCode === code);
  const country = countryMap[code];
  return {
    countryCode: code,
    countryName: country?.name ?? "",
    flag: country?.flag ?? "",
    games
  };
}

export function getAllCountriesWithGames() {
  const uniqueCodes = Array.from(new Set(gamesData.map((g) => g.countryCode)));
  return uniqueCodes.map((code) => {
    const country = countryMap[code];
    return {
      code,
      name: country?.name ?? "",
      flag: country?.flag ?? ""
    };
  });
}

