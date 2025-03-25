// <reference types="Cypress" />
// <reference types="Cypress-iframe" />
import 'cypress-iframe'



// to handle frames in cypress we must to install the plugin cypress-iframe -> npm install -D cypress-iframe



describe("frames", function () {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });

    /*
      CYPRESS CAN'T HNADLE FRAMES
    */

    it("Test 1", () => {

        cy.frameLoaded('#courses-iframe')

        cy.iframe().should('be.visible');

        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        cy.wait(1000);

        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)


    });

    it("Teste com verificação robusta do iframe", () => {
        // 1. Espera o iframe existir no DOM
        cy.get('#courses-iframe', { timeout: 10000 })
            .should('exist')
            .then(($iframe) => {
                // 2. Verifica se o iframe está carregado
                cy.wrap($iframe).should(iframe => {
                    expect(iframe[0].contentDocument).to.not.be.null;
                    expect(iframe[0].contentWindow).to.not.be.null;
                });

                // 3. Interage com o iframe
                cy.wrap($iframe)
                    .its('0.contentDocument.body')
                    .should('not.be.empty')
                    .within(() => {
                        // 4. Localiza e clica no link
                        cy.get('a[href*="mentorship"]').first().click();
                    });

                // 5. Espera o recarregamento (nova abordagem)
                cy.get('#courses-iframe', { timeout: 15000 })
                    .should(iframe => {
                        // Verifica se o iframe foi recarregado
                        const newDoc = iframe[0].contentDocument;
                        expect(newDoc).to.not.be.null;
                        expect(newDoc.body).to.not.be.null;
                        expect(newDoc.body.innerHTML).to.not.contain('Loading');
                    })
                    .its('0.contentDocument.body')
                    .within(() => {
                        // 6. Verifica os elementos h1
                        cy.get("h1[class*='pricing-title']", { timeout: 10000 })
                            .should('have.length', 2);
                    });
            });
    });

    it("Teste com verificação alterado", () => {

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        // 5. Espera o recarregamento (nova abordagem)
        cy.get('#courses-iframe', { timeout: 15000 })
            .its('0.contentDocument.body')
            .within(() => {
                // 6. Verifica os elementos h1
                cy.get("h1[class*='pricing-title']", { timeout: 10000 })
                    .should('have.length', 2);
            });
    });



});
