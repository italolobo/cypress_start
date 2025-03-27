// <reference types="Cypress" />

import HomePage from '../../pages/HomePage';

describe("Test Login", () => {

    beforeEach(function () {  // I have to use beforeEach because I need to load the data before each test, the before does not work in this case
        cy.fixture('example').then((data) => {
            this.data = data;
            //Page
            this.homePage = new HomePage();
        });
    });

    it.only('Valid credentials', function () {

        //Steps
        this.homePage.visit();
        this.homePage.fillUsername(this.data.username);
        this.homePage.fillPassword(this.data.password);
        this.homePage.checkTerms();
        const productPage = this.homePage.submit();
        //Assertion
        productPage.getTitle()
            .should('be.visible')
            .and('contain.text', 'ProtoCommerce');
    })

    it('Invalid username', function () {

        //Steps
        this.homePage.visit();
        this.homePage.fillUsername('invalid');
        this.homePage.fillPassword(this.data.password);
        this.homePage.checkTerms();
        this.homePage.submit();
        //Assertion
        this.homePage.getErrorMessage()
            .should('be.visible');
    })








});
