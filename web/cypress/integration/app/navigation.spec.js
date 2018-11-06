/// <reference types="Cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads homepage", () => {
    cy.get("h1").should("contain", "Welcome");
  });
});
