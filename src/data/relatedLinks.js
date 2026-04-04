export const relatedLinks = (countryCode) => {
  const countryBase = `/gift-cards/${countryCode}/`;
  const helpGuide = `/${countryCode}/ayuda/como-pagar-netflix-con-gift-card/`; // podés dejar la URL igual por ahora
  return {
    moreInCountry: { href: countryBase, text: "Gift Cards disponibles en " },
    helpGuide: {
      href: helpGuide,
      text: "guía para pagar suscripciones con Gift Card",
    },
  };
};
