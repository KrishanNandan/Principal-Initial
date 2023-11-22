describe('Startup test', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/');
  })
  it('Should find good news text', () => {
    cy.get("span").contains("Good news: We're going to make better UI soon.");
  })
})