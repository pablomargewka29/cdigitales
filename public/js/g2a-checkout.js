// public/js/g2a-checkout.js
// Lee parámetros de la URL y actualiza la página:
// - Producto (item)
// - Monto a comprar (elige 10/15/20/25 USDT según price_usd)
// - Link hacia G2A
//
// Se usa JS externo (no inline) para evitar bloqueos por CSP.

const OPTIONS = [
  { amount: 10, url: "https://www.g2a.com/es/binance-gift-card-10-usdt-key-i10000301475008" },
  { amount: 15, url: "https://www.g2a.com/es/binance-gift-card-15-usdt-key-i10000301475013" },
  { amount: 20, url: "https://www.g2a.com/es/binance-gift-card-20-usdt-key-i10000301475012" },
  { amount: 25, url: "https://www.g2a.com/es/binance-gift-card-25-usdt-key-i10000301475003" },
];

function toNumber(raw) {
  if (!raw) return NaN;
  const s = String(raw).trim().replace(",", ".");
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

function pickClosest(target) {
  if (!Number.isFinite(target) || target <= 0) return OPTIONS[0];
  let best = OPTIONS[0];
  for (const opt of OPTIONS) {
    const dBest = Math.abs(best.amount - target);
    const dOpt = Math.abs(opt.amount - target);
    if (dOpt < dBest) best = opt;
    else if (dOpt === dBest && opt.amount > best.amount) best = opt; // empate -> mayor
  }
  return best;
}

function run() {
  const params = new URLSearchParams(window.location.search);

  const item = (params.get("item") || "").trim();
  const brand = (params.get("brand") || "").trim();
  const country = (params.get("country") || "").trim();

  const productName = item || [brand, country].filter(Boolean).join(" ") || "Producto";

  const priceUsd = toNumber(params.get("price_usd"));
  const chosen = pickClosest(priceUsd);

  const elItem = document.getElementById("js-item");
  const elChosen = document.getElementById("js-chosen");
  const elLink = document.getElementById("js-g2a-link");

  if (elItem) elItem.textContent = productName;
  if (elChosen) elChosen.textContent = `${chosen.amount} USDT`;
  if (elLink) {
    elLink.href = chosen.url;
    elLink.textContent = `🛒 Ir a G2A y comprar (${chosen.amount} USDT)`;
  }

  document.title = `Pago - ${productName}`;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}
