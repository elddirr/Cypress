/// <reference types="cypress" />

describe("change language", () => {
  it("TC1_1 changes language from polish to english", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.scrollTo("bottom");
    cy.get(".footer-footer-component__additional").should("be.visible");
    cy.get(".footer-footer-component__language__link").click();
    cy.url().should("contain", "en");
  });
});

describe("accept cookies", () => {
  it("TC 1_2 accepts cookies", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(
      ".header-cookies-component__content-container > :nth-child(1)"
    ).should("be.visible");
    cy.get(
      ".header-cookies-component__button-container > .common-button-component > .common-button-component__text"
    ).click();
  });
});

describe("search for foundraising with search-button", () => {
  it("TC 1_3 search for chosen whip-around and confirm with search button click", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(".header-bar-component__actions").should("be.visible");
    cy.get(".header-bar-component__search-toggle__button").click();
    cy.url().should("contain", "szukaj");
    cy.get("#search_query").should("be.visible").type("igor antuszewski");
    cy.get(".inline-submit > .sp-button").click();
    cy.url().should("contain", "antuszewski");
    cy.get(".content > h3").should("be.visible").click();
    cy.url().should("contain", "antuszewski");
  });
});

describe("search for foundrising with enter", () => {
  it("TC 1_4 search for chosen whip-around and confirm it with enter", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(".header-bar-component__actions").should("be.visible");
    cy.get(".header-bar-component__search-toggle__button").click();
    cy.url().should("contain", "szukaj");
    cy.get("#search_query")
      .should("be.visible")
      .type("igor antuszewski")
      .type("{enter}");
    cy.url().should("contain", "antuszewski");
    cy.get(".content > h3").should("be.visible").click();
    cy.url().should("contain", "antuszewski");
  });
});

describe("add donation", () => {
  it("TC 1_5 adds donation to chosen whip-round", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/igor-antuszewski");
    cy.url().should("contain", "antuszewski");
    cy.contains("a", "Wesprzyj").click({ force: true });
    cy.get(
      '[data-testid="chip-20-choose-amount-payment-amount-form"] > .amountChipstyles__Chip-kcgslh'
    ).click();
    cy.get("#signature").type("Paula");
    cy.get(
      ".payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "platnosc");
    cy.get('[data-testid="email-input-payment-method-form"]').type(
      "pulpaula@proton.me"
    );
    cy.get(
      ":nth-child(1) > :nth-child(9) > .payment-choose-method-box-component > .payment-choose-method-box-component__container"
    ).click();
    cy.get(
      ".payment-choose-method-form-container-component__action__button__default > .common-button-component"
    ).click();
    cy.url().should("contain", "przelew-tradycyjny");
  });
});

describe("add donation anonymously", () => {
  it("TC1_6 adds donation to chosen whip-round, but stays annonymous", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/igor-antuszewski");
    cy.url().should("contain", "antuszewski");
    cy.contains("a", "Wesprzyj").click({ force: true });
    cy.get(
      '[data-testid="chip-20-choose-amount-payment-amount-form"] > .amountChipstyles__Chip-kcgslh'
    ).click();
    cy.get(".form-checkbox-component__label").click();
    cy.get(
      ".payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "platnosc");
    cy.get('[data-testid="email-input-payment-method-form"]').type(
      "pulpaula@proton.me"
    );
    cy.get(
      ":nth-child(1) > :nth-child(9) > .payment-choose-method-box-component > .payment-choose-method-box-component__container"
    ).click();
    cy.get(
      ".payment-choose-method-form-container-component__action__button__default > .common-button-component"
    ).click();
    cy.url().should("contain", "przelew-tradycyjny");
  });
});

describe("donate, but hide the amount", () => {
  it("TC1_7 adds donation to chosen whip-round, but hides the amount of donation", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/igor-antuszewski");
    cy.url().should("contain", "antuszewski");
    cy.contains("a", "Wesprzyj").click({ force: true });
    cy.get(
      '[data-testid="chip-20-choose-amount-payment-amount-form"] > .amountChipstyles__Chip-kcgslh'
    ).click();
    cy.get(".checkboxstyles__Label-ihiVU").click();
    cy.get("#signature").type("Paula");
    cy.get(
      ".payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "platnosc");
    cy.get('[data-testid="email-input-payment-method-form"]').type(
      "pulpaula@proton.me"
    );
    cy.get(
      ":nth-child(1) > :nth-child(9) > .payment-choose-method-box-component > .payment-choose-method-box-component__container"
    ).click();
    cy.get(
      ".payment-choose-method-form-container-component__action__button__default > .common-button-component"
    ).click();
    cy.url().should("contain", "przelew-tradycyjny");
  });
});

describe("donate with custom ammount and send some love", () => {
  it("TC1_8 adds donation to chosen whip-round, donate with custom ammount", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/igor-antuszewski");
    cy.url().should("contain", "antuszewski");
    cy.contains("a", "Wesprzyj").click({ force: true });
    cy.contains("label", "Inna kwota").click({ force: true });
    cy.get(
      '[data-testid="payment-text-input-choose-amount-payment-amount-form"]'
    ).type("123");
    cy.get("#signature").type("Paula");
    cy.get(
      ".payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "platnosc");
    cy.get('[data-testid="email-input-payment-method-form"]').type(
      "pulpaula@proton.me"
    );
    cy.get(
      ":nth-child(1) > :nth-child(9) > .payment-choose-method-box-component > .payment-choose-method-box-component__container"
    ).click();
    cy.get(
      ".payment-choose-method-form-container-component__action__button__default > .common-button-component"
    ).click();
    cy.url().should("contain", "przelew-tradycyjny");
  });
});

describe("donate with custom ammount and send some love", () => {
  it("TC1_9 adds donation to chosen whip-round, donate with custom ammount and adds best wishes", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/igor-antuszewski");
    cy.url().should("contain", "antuszewski");
    cy.contains("a", "Wesprzyj").click({ force: true });
    cy.contains("label", "Inna kwota").click({ force: true });
    cy.get(
      '[data-testid="payment-text-input-choose-amount-payment-amount-form"]'
    ).type("123");
    cy.get("#signature").type("Paula");
    cy.get("#comment_text").type("Igor, powodzenia w zbiórce i rehabilitacji!");
    cy.get(
      ".payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "platnosc");
    cy.get('[data-testid="email-input-payment-method-form"]').type(
      "pulpaula@proton.me"
    );
    cy.get(
      ":nth-child(1) > :nth-child(9) > .payment-choose-method-box-component > .payment-choose-method-box-component__container"
    ).click();
    cy.get(
      ".payment-choose-method-form-container-component__action__button__default > .common-button-component"
    ).click();
    cy.url().should("contain", "przelew-tradycyjny");
  });
});

describe("look for the campaigns and filter most recent ones", () => {
  it("TC 1_10 search most recent campaigns", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(":nth-child(3) > .header-bar-component__menu__item").click();
    cy.url().should("contain", "kampanie");
    cy.contains("a", "Najnowsze").click({ force: true });
    cy.url().should("contain", "najnowsze");
  });
});

describe("look for the people in need and filter most popular foundraising", () => {
  it("TC 1_11 search most popular foundraising of people in need", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(":nth-child(1) > .header-bar-component__menu__item").click();
    cy.url().should("contain", "potrzebujacy");
    cy.contains("a", "Najpopularniejsze").click({ force: true });
    cy.url().should("contain", "najpopularniejsze");
  });
});

describe("look for the blogpost about coronavirus", () => {
  it("TC 1_12 search for the blogpost about coronavirus", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.scrollTo("bottom");
    cy.get(
      ":nth-child(4) > .footer-footer-component__navigation__list > :nth-child(3) > .footer-footer-component__navigation__link"
    ).click();
    cy.url().should("contain", "blog");
    cy.contains("a", "Koronawirus").click({ force: true });
    cy.url().should("contain", "koronawirus");
  });
});

describe("look for the organization- Polska Akcja Humanitarna", () => {
  it("TC 1_13 search Polska Akcja Humanitarna in organizations", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(":nth-child(2) > .header-bar-component__menu__item").click();
    cy.url().should("contain", "organizacje");
    cy.get("#q").type("Polska Akcja Humanitarna").type("{enter}");
    cy.contains("h3", "Polska Akcja Humanitarna").click({ force: true });
    cy.url().should("contain", "polskaakcjahumanitarna");
  });
});

describe("learn how to pass 1,5% of your tax", () => {
  it("TC 1_14 learn how to pass 1,5% of your tax", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.scrollTo("bottom");
    cy.get(
      ".footer-footer-component__navigation > :nth-child(2) > .footer-footer-component__navigation__list > :nth-child(1) > .footer-footer-component__navigation__link"
    ).click();
    cy.url().should("contain", "przekaz-procent-podatku");
    cy.get(
      ".one-percent-cooperation-component__action-container > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "zbieraj-procent-podatku");
    cy.get(
      '[data-testid="text-collect-button-start-collect-intro-start-collect-page"]'
    ).click();
    cy.url().should("contain", "rejestracja-potrzebujacego");
  });
});
