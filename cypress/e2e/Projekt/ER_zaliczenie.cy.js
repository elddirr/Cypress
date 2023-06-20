/// <reference types="cypress" />

describe("check siepomaga statut ver_4 from 12.11.2020", () => {
  it("TC 2_1 checking siepomaga previous statut", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.scrollTo("bottom");
    cy.get(
      ":nth-child(4) > .footer-footer-component__navigation__list > :nth-child(2) > .footer-footer-component__navigation__link"
    ).click();
    cy.url().should("contain", "regulamin");
    cy.scrollTo("bottom");
    cy.get("tbody > :nth-child(2) > :nth-child(1)").click();
    cy.url().should("contain", "regulamin/4");
  });
});

describe("check siepomaga 4 business", () => {
  it("TC 2_2 checking how business can help to siepomaga", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.scrollTo("bottom");
    cy.get(
      ":nth-child(6) > .footer-footer-component__navigation__list > :nth-child(6) > .footer-footer-component__navigation__link"
    ).click();
    cy.url().should("contain", "firmy");
    cy.contains("a", "Dowiedz się dlaczego").click({ force: true });
    cy.contains("a", "Skontaktuj się z nami").click();
  });
});

describe("learn about companies which support siepomaga, and check why it is worth to help", () => {
  it("TC 2_3 learn about companies which support siepomaga, checking why it is worth to help", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.scrollTo("bottom");
    cy.get(
      ":nth-child(6) > .footer-footer-component__navigation__list > :nth-child(6) > .footer-footer-component__navigation__link"
    ).click();
    cy.url().should("contain", "firmy");
    cy.get('[href="#why-it-is-worth"]').click();
  });
});

describe("add donation and pay by Blik", () => {
  it("TC 2_4 adds donation to chosen whip-round and choose BLIK as a method of payment", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/igor-antuszewski");
    cy.url().should("contain", "antuszewski");
    cy.contains("a", "Wesprzyj").click({ force: true });
    cy.get(
      '[data-testid="chip-20-choose-amount-payment-amount-form"] > .amountChipstyles__Chip-kcgslh'
    ).click();
    cy.get("#signature").type("Edwin");
    cy.get(
      ".payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "platnosc");
    cy.get('[data-testid="email-input-payment-method-form"]').type(
      "test@o2.pl"
    );
    cy.get(
      ":nth-child(1) > :nth-child(1) > .payment-choose-method-box-component > .payment-choose-method-box-component__container > .payment-choose-method-box-component__image"
    ).click();
    cy.get(
      ".payment-choose-method-form-container-component__action__button__default > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "blik");
  });
});

describe("add donation and check more options of payment", () => {
  it("TC 2_5 adds donation to chosen whip-round and check the list of options of payment", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/igor-antuszewski");
    cy.url().should("contain", "antuszewski");
    cy.contains("a", "Wesprzyj").click({ force: true });
    cy.get(
      '[data-testid="chip-20-choose-amount-payment-amount-form"] > .amountChipstyles__Chip-kcgslh'
    ).click();
    cy.get("#signature").type("Edwin");
    cy.get(
      ".payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text"
    ).click();
    cy.contains("span", "Więcej opcji płatności").click({ force: true });
  });
});

describe("go to people and need and check 2nd and 3rd page", () => {
  it("TC 2_6 checks 2nd and 3rd page of people in need list", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/");
    cy.url().should("contain", "siepomaga");
    cy.contains("a", "Potrzebujący").click();
    cy.url().should("contain", "potrzebujacy");
    cy.scrollTo("bottom");
    cy.get(
      ".common-pagination-component__item--next > .common-pagination-component__item__content > .common-pagination-component__item__content__text"
    ).click();
    cy.scrollTo("bottom");
    cy.get(
      ".common-pagination-component__item--next > .common-pagination-component__item__content > .common-pagination-component__item__content__text"
    ).click();
  });
});

describe("go to organizations and choose first organization from the list", () => {
  it("TC 2_7 goes to o organizations and choose first organization from the list", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/");
    cy.url().should("contain", "siepomaga");
    cy.contains("a", "Organizacje").click();
    cy.url().should("contain", "organizacje");
    cy.get(":nth-child(1) > .sp-foundation > .content > h3").click();
  });
});

describe("go to organizations and choose first organization from the list and donate 20 zł", () => {
  it("TC 2_8 goes to o organizations and choose first organization from the list and donate them", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl/");
    cy.url().should("contain", "siepomaga");
    cy.contains("a", "Organizacje").click();
    cy.url().should("contain", "organizacje");
    cy.get(":nth-child(1) > .sp-foundation > .content > h3").click();
    cy.get(".box > .big").click();
    cy.url().should("contain", "koszyk/dodaj");
    cy.get(".checkboxstyles__Label-ihiVU").click();
    cy.get(".form-checkbox-component__label").click();
    cy.get(
      ".payment-donation-form-container-component__controls__button > .common-button-component > .common-button-component__text"
    ).click();
    cy.url().should("contain", "platnosc/nowa");
  });
});

describe("search for foundraising by localisation with search-button", () => {
  it("TC 2_9 search for chosen whip-around by localisation and confirm with search button click", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(".header-bar-component__actions").should("be.visible");
    cy.get(".header-bar-component__search-toggle__button").click();
    cy.url().should("contain", "szukaj");
    cy.get("#search_query").type("Białystok");
    cy.get(".inline-submit > .sp-button").click();
    cy.url().should("contain", "szukaj");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .box > .cause-card > .content"
    ).click();
  });
});

describe("search for foundraising by localisation with enter", () => {
  it("TC 2_10 search for chosen whip-around by localisation and confirm with enter", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(".header-bar-component__actions").should("be.visible");
    cy.get(".header-bar-component__search-toggle__button").click();
    cy.url().should("contain", "szukaj");
    cy.get("#search_query")
      .should("be.visible")
      .type("Białystok")
      .type("{enter}");
    cy.url().should("contain", "szukaj");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .box > .cause-card > .content"
    ).click();
  });
});

describe("search for foundraising by localisation with enter and check how to donate by sms", () => {
  it("TC 2_11 search for chosen whip-around by localisation and confirm with enter and check how to donate by sms", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.get(".header-bar-component__actions").should("be.visible");
    cy.get(".header-bar-component__search-toggle__button").click();
    cy.url().should("contain", "szukaj");
    cy.get("#search_query").should("be.visible").type("Toruń").type("{enter}");
    cy.url().should("contain", "szukaj");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .box > .cause-card > .content"
    ).click();
    cy.get(
      '.cause-grid-component__secondary-column > .cause-donation-box-component > .cause-donation-box-component__additional-actions > .donation-sms-box-component > .common-accordion-component > [data-action="click->common-accordion-component#handleButtonClick"] > .donation-sms-box-component__button > h4'
    ).click();
    cy.get(
      ".cause-grid-component__secondary-column > .cause-donation-box-component > .cause-donation-box-component__additional-actions > .donation-sms-box-component > .common-accordion-component > .common-accordion-component__content-wrapper > .donation-sms-box-component__content > .donation-sms-box-component__content__main"
    ).should("be.visible");
  });
});

describe("check siepomaga privacy policy ver_3 from 28.02.2020", () => {
  it("TC 2_12 checking siepomaga previous privacy policy", () => {
    cy.viewport(1440, 1080);
    cy.visit("https://www.siepomaga.pl");
    cy.url().should("contain", "siepomaga");
    cy.scrollTo("bottom");
    cy.get(
      ":nth-child(4) > .footer-footer-component__navigation__list > :nth-child(4) > .footer-footer-component__navigation__link"
    ).click();
    cy.url().should("contain", "polityka-prywatnosci");
    cy.scrollTo("bottom");
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a").click();
    cy.url().should("contain", "polityka-prywatnosci/3");
  });
});
