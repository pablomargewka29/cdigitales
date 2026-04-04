// src/data/faqCopy.js
import { faqLocales } from "./countryCopy.js";

export const faqItems = (redeemUrl, pais) => {
  const base = [
    {
      q: "¿Cómo activo el servicio?",
      a: "Vas a recibir por email un código o una suscripción/cuenta ya activada (si no hubiera stock de códigos) junto con instrucciones paso a paso.",
    },
    {
      q: "¿Cómo canjeo mi Gift Card de Netflix?",
      a: `Si tu pedido incluye código, canjealo en ${redeemUrl}. En el email te mandamos los pasos detallados.`,
    },
    {
      q: "¿Qué pasa si no hay stock de códigos?",
      a: "Te enviamos una suscripción o cuenta ya activada para que empieces a usar el servicio de inmediato. Incluimos instrucciones claras para el acceso.",
    },
    { q: "¿Necesito VPN?", a: "Solo si tu país no coincide con el de la Gift Card. En ese caso te explicamos cómo usar una VPN." },
    { q: "¿La entrega es instantánea?", a: "Enviamos por correo en menos de 24 horas, todos los días. Revisá Spam por las dudas." },
    { q: "¿Qué métodos de pago aceptan?", a: "Transferencia (según país), PayPal y criptomonedas (USD)." },
  ];

  const extra = pais && faqLocales[pais] ? faqLocales[pais] : [];
  return [...base, ...extra];
};
