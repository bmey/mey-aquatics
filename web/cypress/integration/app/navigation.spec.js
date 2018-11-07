/// <reference types="Cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.server();
    cy.route("data.json", "fixture:data");
    cy.visit("/");
  });

  it("loads homepage", () => {
    cy.get("h1").should("contain", "Welcome");
  });
});
