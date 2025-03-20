describe('template spec', () => {

  it('passes', () => {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000) // wait for 2 seconds
    cy.get('.product:visible').should('have.length', 4)


  })





})
