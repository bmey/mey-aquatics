/// <reference types="Cypress" />
import { SORT_BY } from "../../../src/utility/constants";

context("Livestock", () => {
  beforeEach(() => {
    cy.server();
  });

  it("can change endangered species filter", () => {
    cy.route({ url: "/data.json", status: 200, response: fishData });
    cy.visit("/livestock");

    cy.get("[data-test-filter='endangered']").click();
    cy.get("[data-test='livestock-item']")
      .should("have.length", 1)
      .and("have.attr", "data-test-id", "Z");

    cy.get("[data-test-filter='endangered']").click();
    cy.get("[data-test='livestock-item']").should("have.length", 2);
  });

  it("can change common name sorting", () => {
    cy.route({ url: "/data.json", status: 200, response: fishData });
    cy.visit("/livestock");

    cy.get("[data-test='sort-dropdown']").click();
    cy.get(`[data-test-sort='${SORT_BY.ALPHABETICAL_COMMON_DESCENDING}']`).click();
    cy.get("[data-test='livestock-item']:first").should("have.attr", "data-test-id", "Z");
  });

  it("can change scientific name sorting", () => {
    cy.route({ url: "/data.json", status: 200, response: fishData });
    cy.visit("/livestock");

    cy.get("[data-test='sort-dropdown']").click();
    cy.get(`[data-test-sort='${SORT_BY.ALPHABETICAL_SCIENTIFIC}']`).click();
    cy.get("[data-test='livestock-item']:first").should("have.attr", "data-test-id", "Z");

    cy.get("[data-test='sort-dropdown']").click();
    cy.get(`[data-test-sort='${SORT_BY.ALPHABETICAL_SCIENTIFIC_DESCENDING}']`).click();
    cy.get("[data-test='livestock-item']:first").should("have.attr", "data-test-id", "A");
  });
});

const fishData = {
  fish: [
    {
      id: "A",
      onCaresList: false,
      common: "A",
      scientific: "ZZ",
      origin: "A",
      sizes: {
        S: {
          length: 0,
          price: 0,
          count: 0,
        },
      },
    },
    {
      id: "Z",
      onCaresList: true,
      common: "Z",
      scientific: "AA",
      origin: "Z",
      sizes: {
        S: {
          length: 0,
          price: 0,
          count: 0,
        },
      },
    },
  ],
};
