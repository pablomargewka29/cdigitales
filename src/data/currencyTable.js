// src/data/currencyTable.js
// Tabla centralizada de moneda/FX por país (referencia para mostrar precio local)
// Editá aquí y se reflejará en todas las páginas que importen esta tabla.
// fx = multiplicador para convertir USD -> moneda local (solo referencia para mostrar)

export const CURRENCY_TABLE = {
  ar: { currency: "ARS", symbol: "$",  fx: 1200, locale: "es-AR" },
  mx: { currency: "MXN", symbol: "$",  fx:   18, locale: "es-MX" },
  co: { currency: "COP", symbol: "$",  fx: 4300, locale: "es-CO" },
  cl: { currency: "CLP", symbol: "$",  fx:  950, locale: "es-CL" },
  pe: { currency: "PEN", symbol: "S/ ",fx:  3.8, locale: "es-PE" },
  uy: { currency: "UYU", symbol: "$",  fx:   42, locale: "es-UY" },
  bo: { currency: "BOB", symbol: "Bs ",fx:  6.9, locale: "es-BO" },
  py: { currency: "PYG", symbol: "₲",  fx: 7400, locale: "es-PY" },
  ec: { currency: "USD", symbol: "$",  fx:    1, locale: "es-EC" }, // dolarizado
  cr: { currency: "CRC", symbol: "₡",  fx:  540, locale: "es-CR" },
  ve: { currency: "VES", symbol: "Bs ",fx:   40, locale: "es-VE" },
  gt: { currency: "GTQ", symbol: "Q ", fx:  7.8, locale: "es-GT" },
  do: { currency: "DOP", symbol: "RD$ ",fx: 59,  locale: "es-DO" },
  pa: { currency: "USD", symbol: "$",  fx:    1, locale: "es-PA" }, // dolarizado
  hn: { currency: "HNL", symbol: "L ", fx:   25, locale: "es-HN" },
  ni: { currency: "NIO", symbol: "C$ ",fx:   36, locale: "es-NI" },
  sv: { currency: "USD", symbol: "$",  fx:    1, locale: "es-SV" }, // dolarizado
  br: { currency: "BRL", symbol: "R$ ", fx: 5.5, locale: "pt-BR" },
};

// Helpers comunes (opcionales)
export const getCurrencyConfig = (paisCode) =>
  CURRENCY_TABLE[paisCode] || { currency: "USD", symbol: "$", fx: 1, locale: "es-ES" };

export const formatLocalPrice = (usd, cfg, withCode = false) => {
  const num = typeof usd === "number" && !Number.isNaN(usd) ? usd : 0;
  const base = Math.round(num * cfg.fx).toLocaleString(cfg.locale);
  return withCode ? `${cfg.symbol}${base} ${cfg.currency}` : `${cfg.symbol}${base}`;
};

export const formatUSDPrice = (usd) => {
  const num = typeof usd === "number" && !Number.isNaN(usd) ? usd : 0;
  return `USD ${num.toFixed(2)}`;
};

