/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
    it("My FirstTest case", function () {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#checkBoxOption1').as('checkBox1')
      cy.get('@checkBox1').should('have.value','option1')
      cy.get('@checkBox1').uncheck().should('not.be.checked')
      //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('input[type="checkbox"]').check(['option2','option3'])
      cy.get('input[type="checkbox"]').check()
  







    });
  });
  