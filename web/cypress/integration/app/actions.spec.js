describe('Page actions', () => {
  it('renders error page if problem loading data', () => {
    cy.server();
    setupErrorResponse();
    assertErrorPageShown();
    setupSuccessResponse();
    assertAppLoadsCorrectly();
  });

  const assertErrorPageShown = () => {
    cy.visit('/');
    cy.get("[data-test='error']").should('be.visible');
  };

  const setupErrorResponse = () =>
    cy.route({ url: '/data.json', status: 404, response: { error: 'message' } });
  const setupSuccessResponse = () => cy.route('data.json', 'fixture:data');

  const assertAppLoadsCorrectly = () => {
    cy.get("[data-test='refresh']").click();
    cy.get("[data-test='loaded']").should('be.visible');
  };
});
