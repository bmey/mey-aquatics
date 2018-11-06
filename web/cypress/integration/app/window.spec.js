/// <reference types="Cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("title should match company name", () => {
    cy.title().should("include", "Mey's Aquatics");
  });
});
