describe("Page actions", () => {
  it("renders error page if problem loading data", () => {
    cy.server();
    cy.route({ url: "/data.json", status: 404, response: { error: "message" } });
    cy.visit("/");

    cy.get("[data-test='error']").should("be.visible");
  });
});
