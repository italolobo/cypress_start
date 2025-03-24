// <reference types="Cypress" />

describe("Tables", function () {
    it("AI", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('table#product[name="courses"] tbody tr td:nth-child(2)').as('elem').each(($e1, index, $list) => {

            const text = String($e1.text())

            if( text.includes('Resume')) {
                cy.get('@elem').eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('0')
                })
            }
        })
    });

    it("My suggestion", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('table#product[name="courses"] tbody tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = String($e1.text())

            if( text.includes('Resume')) {
                cy.wrap($e1).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('0')
                })
            }
        })
    });
});
