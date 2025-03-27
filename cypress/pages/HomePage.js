import ProductPage from './ProductPage';

class HomePage {   

    visit() {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#');
    }

    fillUsername(username) {
        cy.get('#username').type(username);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    checkTerms() {
        cy.get('input#terms').check();
    }

    getErrorMessage() {
        return cy.get('.alert.alert.alert-danger');
    }

    submit() {
        cy.get('input#signInBtn').click();
        return new ProductPage();
    }

}


export default HomePage;
