// <reference types="Cypress" />

import HomePage from '../../pages/HomePage';

describe("Test Login", () => {

    beforeEach(function () {  // I have to use beforeEach because I need to load the data before each test, the before does not work in this case
        cy.fixture('example').then((data) => {
            this.data = data;
        });    
    }); 


    it('Valid credentials', function () { 

        //Page
        const homePage = new HomePage();
        //Steps
        homePage.visit();
        homePage.fillUsername(this.data.username);
        homePage.fillPassword(this.data.password);
        homePage.checkTerms();
        homePage.submit();
        //Assertion
        homePage.getErrorMessage().should('not.exist');

    })

    it('Invalid username', function () { 

        //Page
        const homePage = new HomePage();
        //Steps
        homePage.visit();
        homePage.fillUsername('invalid');
        homePage.fillPassword(this.data.password);
        homePage.checkTerms();
        homePage.submit();
        //Assertion
        homePage.getErrorMessage().should('be.visible');

    })








});
