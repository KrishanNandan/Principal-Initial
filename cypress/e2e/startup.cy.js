describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });
  it("button click", () => {
    cy.visit("http://localhost:3000");
    cy.get("span").contains("Good news: We're going to make better UI soon.");
    cy.get("button").click();
    cy.wait(5000);
    cy.get("p").contains("Title");
  });
  it("negative testing button", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").should('be.visible');
  });
});
