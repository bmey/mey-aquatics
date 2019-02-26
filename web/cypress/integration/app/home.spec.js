/// <reference types="Cypress" />
import { SORT_BY } from '../../../src/utility/constants';

const testOrigins = [
  {
    id: 'AF',
    origin: 'AF-CONGO',
    description: 'Africa',
  },
  {
    id: 'AM',
    origin: 'AM-OTHER',
    description: 'Americas',
  },
  {
    id: 'SEA',
    origin: 'SEA-OTHER',
    description: 'Asia',
  },
];

context('Home page', () => {
  beforeEach(() => {
    cy.server();
    cy.route({ url: '/data.json', status: 200, response: fishData });
  });

  context('view:desktop', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    describe('can use region link', () => {
      testOrigins.forEach(({ id, origin, description }) => {
        it(description, () => {
          cy.get(`[data-test='view-region-${id}']`).click();

          cy.get(`[data-test^='filter-origin-${id}']`).should('be.checked');
          cy.get("[data-test^='livestock-item']").should(
            'have.attr',
            'data-test',
            `livestock-item-${origin}`
          );
        });
      });
    });
  });

  context('view:mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
      cy.visit('/');
    });

    describe('can use region link', () => {
      testOrigins.forEach(({ id, origin, description }) => {
        it(description, () => {
          cy.get(`[data-test='view-region-${id}']`).click();
          cy.get("[data-test='filter-button']").click();

          cy.get(`[data-test^='filter-origin-${id}']`).should('be.checked');
          cy.get("[data-test^='livestock-item']").should(
            'have.attr',
            'data-test',
            `livestock-item-${origin}`
          );
        });
      });
    });
  });
});

const setupFish = origin => {
  return {
    id: origin,
    common: origin,
    scientific: origin,
    origin: origin,
  };
};

const fishData = {
  fish: testOrigins.map(({ origin }) => setupFish(origin)),
};
