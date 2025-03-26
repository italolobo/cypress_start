class HomePage {

    constructor() {
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = 'input#signInBtn';
        this.termCheckbox = 'input#terms';
        this.errorMessage = '.alert.alert.alert-danger';
        this.roleSelect = 'select.form-control';
        this.optionsRadio = 'div.form-check-inline';
    }

    visit() {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#');
    }

    fillUsername(username) {
        cy.get(this.usernameField).type(username);
    }

    fillPassword(password) {
        cy.get(this.passwordField).type(password);
    }

    checkTerms() {
        cy.get(this.termCheckbox).check();
    }

    getErrorMessage() {
        return cy.get(this.errorMessage);
    }

    submit() {
        cy.get(this.loginButton).click();
    }

}


export default HomePage;
