class ProductPage {

    getTitle() {
        return cy.get('div.container nav.navbar.navbar-expand-sm.bg-dark.navbar-dark a.navbar-brand')
    }

    selectProduct(productName) {
        cy.get('app-card')
            .filter(`:contains("${productName}")`)
            .contains('button', 'Add')
            .click();
    }






}


export default ProductPage;
