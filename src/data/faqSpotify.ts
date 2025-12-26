// src/data/faqSpotify.ts
export const faqSpotifyItems = (redeemUrl: string, countryName: string) => [
  {
    q: `¿Cómo canjeo mi Gift Card de Spotify en ${countryName}?`,
    a: `Entrá a ${redeemUrl}, iniciá sesión en tu cuenta de Spotify y escribí el código recibido por email. Automáticamente se acreditará el tiempo de Spotify Premium.`,
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Podés pagar con transferencia bancaria, PayPal o criptomonedas (BTC, USDT, etc.), según tu país.",
  },
  {
    q: "¿La entrega es inmediata?",
    a: "En la mayoría de los casos enviamos el código digital en menos de 24 horas, los 7 días de la semana.",
  },
  {
    q: "¿Sirve para planes Familia, Duo o Estudiante?",
    a: "No. Las gift cards solo aplican a Spotify Premium Individual según las condiciones locales.",
  },
  {
    q: "¿Cuánto dura la gift card?",
    a: "Las tarjetas Spotify tienen una validez de 12 meses desde su compra, salvo que el país indique otro plazo.",
  },
];
