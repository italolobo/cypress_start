// <reference types="Cypress" />

describe("End to end e-commerce Test", () => {

    it.only('Submit order - mine', () => {

        const productName = 'Nokia Edge';

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#');
        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        cy.get('input#terms').check();
        cy.get('input#signInBtn').click();
        cy.get('h1.my-4').should('have.text', 'Shop Name');

        cy.get('app-card').as('prods').should('have.length', 4);
        cy.get('@prods')
            .filter(`:contains("${productName}")`)
            .contains('button', 'Add')
            .click();


        cy.get('@prods')
            .eq(0)
            .contains('button', 'Add')
            .click();

        cy.get('a.nav-link.btn.btn-primary').as('btn_checkout').then(($el) => {

            const text = $el.text();
            const qty = text.split(' ')[3];

            expect(qty).to.equal('2');
        });

        cy.get('@btn_checkout').click();

        let sum = 0;
        cy.get('tr td:nth-child(4) strong')
            .each(($el, index, $list) => {

                let price = Number($el.text().split(' ')[1].trim());
                sum += price;

                cy.log(price);
                cy.log(sum);
            }).then(() => {
                expect(sum).to.equal(165000);
            })

        cy.get('button.btn.btn-success').click();

        cy.get('#country').type('indi');

        cy.get('div.suggestions ul li a', { timeout: 10000 })
        .contains('India')
        .click();

        cy.get('input.btn.btn-success.btn-lg').click();

        cy.get('div.alert.alert-success.alert-dismissible strong')
        .should('contain', 'Success!');



        





        // .find('button',)
        // .click();


    })

    it('Submit order - course', () => {

        const productName = 'Nokia Edge';

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#');
        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        cy.get('input#terms').check();
        cy.get('input#signInBtn').click();
        cy.get('h1.my-4').should('have.text', 'Shop Name');

        cy.get('app-card').as('prods').should('have.length', 4);
        cy.get('@prods')
            .filter(`:contains("${productName}")`)
            .then(($el) => {
                cy.wrap($el).contains('button', 'Add').click();
            });


    })
});
