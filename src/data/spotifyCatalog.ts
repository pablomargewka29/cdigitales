// src/data/spotifyCatalog.ts
export type Plan = {
  id: string;
  title: string;
  months: number;
  price: number;
  badge?: string;
};

export type SpotifyCountryItem = {
  countryCode: string;
  countryName: string;
  slug: string;
  currency: string;
  canonical: string;
  image: string;
  keywords: string[];
  description: string;
  plans: Plan[];
};

export const spotifyCatalog: SpotifyCountryItem[] = [
  {
    countryCode: "ar",
    countryName: "Argentina",
    slug: "spotify-argentina",
    currency: "ARS",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/ar/spotify-argentina/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Comprá tu Spotify Gift Card Argentina y escuchá música sin anuncios en Premium. Pagá en pesos argentinos y recibí tu código digital por correo dentro de las 24hs. Canjeá fácil en spotify.com/redeem.",
    keywords: [
      "Spotify gift card Argentina",
      "tarjeta prepaga Spotify",
      "comprar Spotify en Argentina",
      "pagar Spotify sin tarjeta Argentina",
      "código Spotify AR",
    ],
    plans: [
      { id: "sp-ar-1m", title: "1 mes", months: 1, price: 4500 },
      { id: "sp-ar-3m", title: "3 meses", months: 3, price: 13500 },
      { id: "sp-ar-6m", title: "6 meses", months: 6, price: 27000 },
    ],
  },
  {
    countryCode: "mx",
    countryName: "México",
    slug: "spotify-mexico",
    currency: "MXN",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/mx/spotify-mexico/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Disfrutá tu música favorita con Spotify Premium México. Pagá en pesos mexicanos y recibí tu código digital al instante. Canjeá tu tarjeta en spotify.com/redeem.",
    keywords: [
      "Spotify gift card México",
      "comprar Spotify México",
      "tarjeta Spotify MX",
      "pagar Spotify sin tarjeta México",
      "código digital Spotify México",
    ],
    plans: [
      { id: "sp-mx-1m", title: "1 mes", months: 1, price: 129 },
      { id: "sp-mx-3m", title: "3 meses", months: 3, price: 387 },
      { id: "sp-mx-6m", title: "6 meses", months: 6, price: 774 },
    ],
  },
  {
    countryCode: "cl",
    countryName: "Chile",
    slug: "spotify-chile",
    currency: "CLP",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/cl/spotify-chile/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Accedé a Spotify Premium Chile sin tarjeta de crédito. Pagá en pesos chilenos y recibí tu código por email en minutos. Canjealo en spotify.com/redeem.",
    keywords: [
      "Spotify gift card Chile",
      "tarjeta Spotify Chile",
      "pagar Spotify sin tarjeta Chile",
      "comprar Spotify Premium Chile",
    ],
    plans: [
      { id: "sp-cl-1m", title: "1 mes", months: 1, price: 4890 },
      { id: "sp-cl-3m", title: "3 meses", months: 3, price: 14670 },
      { id: "sp-cl-6m", title: "6 meses", months: 6, price: 29340 },
    ],
  },
  {
    countryCode: "co",
    countryName: "Colombia",
    slug: "spotify-colombia",
    currency: "COP",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/co/spotify-colombia/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Conseguí tu Spotify Gift Card Colombia y escuchá sin interrupciones. Pagá en pesos colombianos y canjeá en spotify.com/redeem. Ideal para regalar o renovar Premium.",
    keywords: [
      "Spotify gift card Colombia",
      "tarjeta Spotify Colombia",
      "pagar Spotify sin tarjeta Colombia",
      "comprar Spotify Premium Colombia",
    ],
    plans: [
      { id: "sp-co-1m", title: "1 mes", months: 1, price: 17900 },
      { id: "sp-co-3m", title: "3 meses", months: 3, price: 53700 },
      { id: "sp-co-6m", title: "6 meses", months: 6, price: 107400 },
    ],
  },
  {
    countryCode: "pe",
    countryName: "Perú",
    slug: "spotify-peru",
    currency: "PEN",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/pe/spotify-peru/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Activá Spotify Premium Perú en minutos. Pagá en soles peruanos, recibí tu código digital por correo y canjealo fácil en spotify.com/redeem.",
    keywords: [
      "Spotify gift card Perú",
      "tarjeta Spotify Perú",
      "comprar Spotify Premium Perú",
      "pagar Spotify sin tarjeta Perú",
    ],
    plans: [
      { id: "sp-pe-1m", title: "1 mes", months: 1, price: 19.9 },
      { id: "sp-pe-3m", title: "3 meses", months: 3, price: 59.7 },
      { id: "sp-pe-6m", title: "6 meses", months: 6, price: 119.4 },
    ],
  },
  {
    countryCode: "uy",
    countryName: "Uruguay",
    slug: "spotify-uruguay",
    currency: "UYU",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/uy/spotify-uruguay/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Comprá Spotify Premium Uruguay con tarjeta prepaga o transferencia. Pagá en pesos uruguayos y recibí tu código al instante por email.",
    keywords: [
      "Spotify gift card Uruguay",
      "tarjeta Spotify Uruguay",
      "pagar Spotify sin tarjeta Uruguay",
      "comprar Spotify Premium Uruguay",
    ],
    plans: [
      { id: "sp-uy-1m", title: "1 mes", months: 1, price: 249 },
      { id: "sp-uy-3m", title: "3 meses", months: 3, price: 747 },
      { id: "sp-uy-6m", title: "6 meses", months: 6, price: 1494 },
    ],
  },
  {
    countryCode: "ec",
    countryName: "Ecuador",
    slug: "spotify-ecuador",
    currency: "USD",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/ec/spotify-ecuador/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Disfrutá Spotify Premium Ecuador pagando en dólares y recibiendo tu código digital en minutos. Sin tarjeta de crédito, sin límites.",
    keywords: [
      "Spotify gift card Ecuador",
      "tarjeta Spotify Ecuador",
      "comprar Spotify Premium Ecuador",
      "pagar Spotify sin tarjeta Ecuador",
    ],
    plans: [
      { id: "sp-ec-1m", title: "1 mes", months: 1, price: 5.99 },
      { id: "sp-ec-3m", title: "3 meses", months: 3, price: 17.97 },
      { id: "sp-ec-6m", title: "6 meses", months: 6, price: 35.94 },
    ],
  },
  {
    countryCode: "bo",
    countryName: "Bolivia",
    slug: "spotify-bolivia",
    currency: "BOB",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/bo/spotify-bolivia/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Comprá Spotify Gift Card Bolivia y escuchá sin límites. Pagá en bolivianos, recibí tu código digital en minutos y canjeá en spotify.com/redeem.",
    keywords: [
      "Spotify gift card Bolivia",
      "tarjeta Spotify Bolivia",
      "comprar Spotify Premium Bolivia",
      "pagar Spotify sin tarjeta Bolivia",
    ],
    plans: [
      { id: "sp-bo-1m", title: "1 mes", months: 1, price: 30 },
      { id: "sp-bo-3m", title: "3 meses", months: 3, price: 90 },
      { id: "sp-bo-6m", title: "6 meses", months: 6, price: 180 },
    ],
  },
  {
    countryCode: "py",
    countryName: "Paraguay",
    slug: "spotify-paraguay",
    currency: "PYG",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/py/spotify-paraguay/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Escuchá tus playlists sin anuncios con Spotify Gift Card Paraguay. Pagá en guaraníes y recibí el código por correo dentro del día.",
    keywords: [
      "Spotify gift card Paraguay",
      "tarjeta Spotify Paraguay",
      "comprar Spotify Premium Paraguay",
      "pagar Spotify sin tarjeta Paraguay",
    ],
    plans: [
      { id: "sp-py-1m", title: "1 mes", months: 1, price: 35000 },
      { id: "sp-py-3m", title: "3 meses", months: 3, price: 105000 },
      { id: "sp-py-6m", title: "6 meses", months: 6, price: 210000 },
    ],
  },
  {
    countryCode: "cr",
    countryName: "Costa Rica",
    slug: "spotify-costa-rica",
    currency: "CRC",
    canonical: "https://cuentasdigitales.com.ar/gift-cards/cr/spotify-costa-rica/",
    image: "/tech/spotify-giftcard.jpg",
    description:
      "Activá Spotify Premium Costa Rica en segundos. Pagá en colones costarricenses y recibí tu código digital por correo electrónico.",
    keywords: [
      "Spotify gift card Costa Rica",
      "tarjeta Spotify Costa Rica",
      "comprar Spotify Premium Costa Rica",
      "pagar Spotify sin tarjeta Costa Rica",
    ],
    plans: [
      { id: "sp-cr-1m", title: "1 mes", months: 1, price: 3150 },
      { id: "sp-cr-3m", title: "3 meses", months: 3, price: 9450 },
      { id: "sp-cr-6m", title: "6 meses", months: 6, price: 18900 },
    ],
  },
];
