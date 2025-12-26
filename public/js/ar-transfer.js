// public/js/ar-transfer.js

// Helpers
const $ = (id) => document.getElementById(id);

function parseQuery() {
  const qs = new URLSearchParams(window.location.search);

  // En tus URLs venís usando:
  // item, price_usd, price_local, price_local_text, currency, symbol, brand, country, pais
  const item =
    qs.get("item") ||
    qs.get("producto") ||
    qs.get("name") ||
    qs.get("title") ||
    "Producto";

  const priceLocalText =
    qs.get("price_local_text") ||
    qs.get("amount_text") ||
    qs.get("price_text") ||
    "";

  const symbol = qs.get("symbol") || "$";
  const currency = qs.get("currency") || "";
  const priceLocal = qs.get("price_local") || "";
  const priceUsd = qs.get("price_usd") || "";

  const brand = qs.get("brand") || "";
  const country = qs.get("country") || "";
  const pais = (qs.get("pais") || qs.get("paisCode") || "ar").toLowerCase();

  // Monto mostrado (prioridad a price_local_text si viene formateado)
  let amountText = priceLocalText?.trim();
  if (!amountText) {
    // fallback: si viene numérico
    if (priceLocal) amountText = `${symbol}${priceLocal} ${currency}`.trim();
    else if (priceUsd) amountText = `$${priceUsd} USD`;
    else amountText = "—";
  }

  return {
    item,
    amountText,
    priceLocalText,
    symbol,
    currency,
    priceLocal,
    priceUsd,
    brand,
    country,
    pais,
  };
}

function setStatus(msg, kind = "info") {
  const statusBox = $("js-status");
  if (!statusBox) return;

  statusBox.classList.remove("hidden");
  statusBox.textContent = msg;

  statusBox.className =
    "mt-4 rounded-2xl border p-4 text-sm " +
    (kind === "ok"
      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
      : kind === "error"
      ? "border-rose-200 bg-rose-50 text-rose-900"
      : "border-slate-200 bg-slate-50 text-slate-700");
}

async function copyText(text, okMsg) {
  try {
    await navigator.clipboard.writeText(String(text || ""));
    setStatus(okMsg || "Copiado ✅", "ok");
  } catch (e) {
    // Fallback (algunos navegadores bloquean clipboard sin https o permisos)
    const ta = document.createElement("textarea");
    ta.value = String(text || "");
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    setStatus(okMsg || "Copiado ✅", "ok");
  }
}

function wireCopyButtons() {
  const copyCbu = $("copy-cbu");
  const copyAlias = $("copy-alias");

  // Tomamos los textos directamente del DOM (por si cambian en el Astro)
  const cbuText = copyCbu?.closest("div")?.querySelector("p.font-mono")?.textContent?.trim();
  const aliasText = copyAlias?.closest("div")?.querySelector("p.font-mono")?.textContent?.trim();

  if (copyCbu) {
    copyCbu.addEventListener("click", () =>
      copyText(cbuText, "✅ CBU copiado. Pegalo en tu banco para transferir.")
    );
  }
  if (copyAlias) {
    copyAlias.addEventListener("click", () =>
      copyText(aliasText, "✅ Alias copiado. Pegalo en tu banco para transferir.")
    );
  }
}

function fillProductInfo() {
  const { item, amountText } = parseQuery();
  const itemEl = $("js-item");
  const amountEl = $("js-amount");

  if (itemEl) itemEl.textContent = item;
  if (amountEl) amountEl.textContent = amountText;
}

function wireFormSubmit() {
  const form = $("js-form");
  if (!form) return;

  // ✅ CLAVE: leemos el endpoint del dataset (NO window.__SHEETS_ENDPOINT)
  const endpoint = (form.dataset.sheetsEndpoint || "").trim();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!endpoint || endpoint.includes("PEGAR_ACA")) {
      setStatus(
        "Falta configurar la URL del Google Sheets (Apps Script) en transferencia.astro.",
        "error"
      );
      return;
    }

    const {
      item,
      amountText,
      priceLocalText,
      symbol,
      currency,
      priceLocal,
      priceUsd,
      brand,
      country,
      pais,
    } = parseQuery();

    const fd = new FormData(form);

    const payload = {
      nombre: String(fd.get("nombre") || "").trim(),
      apellido: String(fd.get("apellido") || "").trim(),
      email: String(fd.get("email") || "").trim(),

      // info del pedido (para que te quede en Sheets)
      producto: item,
      importe: amountText,

      pais,
      brand,
      country,
      price_local_text: priceLocalText || "",
      price_local: priceLocal || "",
      price_usd: priceUsd || "",
      currency: currency || "",
      symbol: symbol || "",

      source: "transferencia_ar",
      page: window.location.pathname,
      url: window.location.href,
      ts: new Date().toISOString(),
    };

    const btn = form.querySelector('button[type="submit"]');
    const originalBtnText = btn?.textContent || "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Enviando…";
    }

    try {
      // Enviamos JSON (si tu Apps Script espera FormData decime y lo cambio)
const formData = new FormData();

Object.entries(payload).forEach(([key, value]) => {
  formData.append(key, value);
});

const res = await fetch(endpoint, {
  method: "POST",
  body: formData,
});


      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus(
        "✅ Notificación enviada. Ahora validamos la transferencia y procesamos tu pedido.",
        "ok"
      );
      form.reset();
      // scrollea al mensaje en mobile
      $("js-status")?.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (err) {
      setStatus(
        "❌ No pudimos enviar la notificación. Probá de nuevo en unos segundos.",
        "error"
      );
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = originalBtnText || "🚀 Enviar notificación";
      }
    }
  });
}

function init() {
  fillProductInfo();
  wireCopyButtons();
  wireFormSubmit();
}

document.addEventListener("DOMContentLoaded", init);
