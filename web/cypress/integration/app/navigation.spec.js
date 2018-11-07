/// <reference types="Cypress" />

const clickMobileNavLink = linkName => {
  cy.get("[data-test=mobile-nav]").click();
  cy.get(`[data-test=nav-${linkName}]`).click();
};

context("Navigation", () => {
  beforeEach(() => {
    cy.server();
    cy.route("data.json", "fixture:data");
  });

  it("can navigate to all routes through desktop navbar", () => {
    cy.visit("/");
    cy.get("[data-cy=homepage]").should("be.visible");
    cy.get("[data-test=nav-product]").click();
    cy.get("[data-cy=productpage]").should("be.visible");
    cy.get("[data-test=nav-about]").click();
    cy.get("[data-cy=aboutpage]").should("be.visible");
    cy.get("[data-test=nav-contact]").click();
    cy.get("[data-cy=contactpage]").should("be.visible");
    cy.get("[data-test=nav-home]").click();
    cy.get("[data-cy=homepage]").should("be.visible");
  });

  it("can navigate to all routes through mobile navbar", () => {
    cy.viewport(320, 480);
    cy.visit("/");

    clickMobileNavLink("product");
    cy.get("[data-cy=productpage]").should("be.visible");
    clickMobileNavLink("about");
    cy.get("[data-cy=aboutpage]").should("be.visible");
    clickMobileNavLink("contact");
    cy.get("[data-cy=contactpage]").should("be.visible");
    clickMobileNavLink("home");
    cy.get("[data-cy=homepage]").should("be.visible");
  });
});
