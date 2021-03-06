/// <reference types="Cypress" />

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

const itCanUseEndangeredLink = () => {
  it('can use endangered link', () => {
    const testData = {
      fish: [...fishData.fish, { ...setupFish('ENDANGERED'), onCaresList: true }],
    };
    cy.route({ url: '/data.json', status: 200, response: testData });
    cy.visit('/');

    cy.get("[data-test='view-endangered']").click();

    cy.get("[data-test^='livestock-item']")
      .should('have.length', 1)
      .should('have.attr', 'data-test', 'livestock-item-ENDANGERED');
  });
};

const itCanUseHotItemLink = () => {
  it('can navigate to a "hot" item', () => {
    const testId = 'test-hot-id';
    const common = 'Test Hot Item';
    const testData = {
      fish: [...fishData.fish, { ...setupFish(testId), common }],
      hotItems: [testId],
    };
    cy.route({ url: '/data.json', status: 200, response: testData });
    cy.visit('/');

    cy.get('a')
      .contains(common)
      .click();

    cy.contains(common);
  });
};

context('Home page', () => {
  beforeEach(() => {
    cy.server();
    cy.route({ url: '/data.json', status: 200, response: fishData });
  });

  context('view:desktop', () => {
    describe('can use region link', () => {
      testOrigins.forEach(({ id, origin, description }) => {
        it(description, () => {
          cy.visit('/');

          cy.get(`[data-test='view-region-${id}']`).click();

          cy.get(`[data-test^='filter-origin-${id}'] input[type=checkbox]`).should('be.checked');
          cy.get("[data-test^='livestock-item']").should(
            'have.attr',
            'data-test',
            `livestock-item-${origin}`
          );
        });
      });
    });

    itCanUseHotItemLink();
    itCanUseEndangeredLink();
  });

  context('view:mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('can use region link', () => {
      const { id, origin } = testOrigins[0];
      cy.visit('/');
      cy.get(`[data-test='view-region-${id}']`).click();
      cy.get("[data-test='filter-button']").click();

      cy.get(`[data-test^='filter-origin-${id}'] input[type=checkbox]`).should('be.checked');
      cy.get("[data-test='go-back']").click();
      cy.get("[data-test^='livestock-item']").should(
        'have.attr',
        'data-test',
        `livestock-item-${origin}`
      );
    });

    itCanUseHotItemLink();
    itCanUseEndangeredLink();
  });
});

const setupFish = origin => {
  return {
    id: origin,
    common: origin,
    scientific: origin,
    origin: origin,
    sizes: {
      S: {},
      M: {},
      L: {},
      B: {},
      F: {},
    },
  };
};

const fishData = {
  fish: testOrigins.map(({ origin }) => setupFish(origin)),
};
