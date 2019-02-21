/// <reference types="Cypress" />
import { SORT_BY } from '../../../src/utility/constants';

context('Livestock', () => {
  beforeEach(() => {
    cy.server();
  });

  it('can change endangered species filter', () => {
    cy.route({ url: '/data.json', status: 200, response: fishData });
    cy.visit('/livestock');

    cy.get("[data-test='filter-endangered']").click();
    cy.get("[data-test^='livestock-item']")
      .should('have.length', 1)
      .and('have.attr', 'data-test', 'livestock-item-Z');

    cy.get("[data-test='filter-endangered']").click();
    cy.get("[data-test^='livestock-item']").should('have.length', 2);
  });

  it('can change common name sorting', () => {
    cy.route({ url: '/data.json', status: 200, response: fishData });
    cy.visit('/livestock');

    cy.get("[data-test='sort-dropdown']").click();
    cy.get(`[data-test='sort-option-${SORT_BY.ALPHABETICAL_COMMON_DESCENDING}']`).click();
    cy.get("[data-test^='livestock-item']:first").should(
      'have.attr',
      'data-test',
      'livestock-item-Z'
    );
  });

  it('can change scientific name sorting', () => {
    cy.route({ url: '/data.json', status: 200, response: fishData });
    cy.visit('/livestock');

    cy.get("[data-test='sort-dropdown']").click();
    cy.get(`[data-test='sort-option-${SORT_BY.ALPHABETICAL_SCIENTIFIC}']`).click();
    cy.get("[data-test^='livestock-item']:first").should(
      'have.attr',
      'data-test',
      'livestock-item-Z'
    );

    cy.get("[data-test='sort-dropdown']").click();
    cy.get(`[data-test='sort-option-${SORT_BY.ALPHABETICAL_SCIENTIFIC_DESCENDING}']`).click();
    cy.get("[data-test^='livestock-item']:first").should(
      'have.attr',
      'data-test',
      'livestock-item-A'
    );
  });

  it('can change origin filter', () => {
    cy.route({ url: '/data.json', status: 200, response: fishData });
    cy.visit('/livestock');

    cy.get(`[data-test='filter-origin-AF']`).click();
    cy.get("[data-test^='livestock-item']").should('have.length', 0);

    cy.get(`[data-test='filter-origin-AM-OTHER']`).click();
    cy.get("[data-test^='livestock-item']").should('have.length', 2);
  });
});

const fishData = {
  fish: [
    {
      id: 'A',
      onCaresList: false,
      common: 'A',
      scientific: 'ZZ',
      origin: 'AM-OTHER',
      sizes: {
        S: {
          length: 0,
          count: 0,
        },
      },
    },
    {
      id: 'Z',
      onCaresList: true,
      common: 'Z',
      scientific: 'AA',
      origin: 'AM-OTHER',
      sizes: {
        S: {
          length: 0,
          count: 0,
        },
      },
    },
  ],
};
