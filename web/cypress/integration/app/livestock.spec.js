/// <reference types="Cypress" />
import { SORT_BY } from '../../../src/utility/constants';

const setupDataResponse = (fishData = defaultFishData) => {
  cy.route({
    url: '/data.json',
    status: 200,
    response: {
      fish: fishData,
    },
  });
};

const canChangeFilters = () => {
  describe('can change filters', () => {
    it('common name sorting', () => {
      cy.get("[data-test='sort-dropdown']").click();
      cy.get(`[data-test='sort-option-${SORT_BY.ALPHABETICAL_COMMON_DESCENDING}']`).click();
      cy.get("[data-test^='livestock-item']:first").should(
        'have.attr',
        'data-test',
        'livestock-item-Z'
      );
    });

    it('scientific name sorting', () => {
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

    it('endangered species filter', () => {
      cy.get("[data-test='filter-endangered']").click();
      cy.get("[data-test^='livestock-item']")
        .should('have.length', 1)
        .and('have.attr', 'data-test', 'livestock-item-Z');

      cy.get("[data-test='filter-endangered']").click();
      cy.get("[data-test^='livestock-item']").should('have.length', 2);
    });

    it('origin filter', () => {
      cy.get(`[data-test='filter-origin-AF']`).click();
      cy.get("[data-test^='livestock-item']").should('have.length', 0);

      cy.get(`[data-test='filter-origin-AM-OTHER']`).click();
      cy.get("[data-test^='livestock-item']").should('have.length', 2);
    });
  });
};

context('Livestock', () => {
  beforeEach(() => {
    cy.server();
  });

  it('search submit returns filtered list', () => {
    setupDataResponse([
      setupFish(),
      setupFish({
        id: 'test-id-1',
        common: 'foo',
      }),
    ]);
    cy.visit('/livestock');

    cy.get("[data-test='search-input']").type('foo');
    cy.get("[data-test='search-submit']").click();

    cy.get("[data-test^='livestock-item']")
      .should('have.length', 1)
      .first()
      .should('have.attr', 'data-test', 'livestock-item-test-id-1');
  });

  context('view:desktop', () => {
    beforeEach(() => {
      setupDataResponse();
      cy.visit('/livestock');
    });

    canChangeFilters();
  });

  context('view:mobile', () => {
    beforeEach(() => {
      setupDataResponse();
      cy.viewport('iphone-6');
      cy.visit('/livestock');
      cy.get("[data-test='filter-button']").click();
    });

    canChangeFilters();
  });
});

const setupFish = (overrides = {}) => {
  return {
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
    ...overrides,
  };
};

const defaultFishData = [
  setupFish(),
  setupFish({
    id: 'Z',
    onCaresList: true,
    common: 'Z',
    scientific: 'AA',
  }),
];
