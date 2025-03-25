

describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        const month = 5
        const day = 17
        const year = 1988

        cy.get('div.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label').click()


        function navigateCalendar() {
            cy.get('.react-calendar__tile').then(($el) => {
                const min = $el.first().text();  // Primeiro elemento (menor ano visível)
                const max = $el.last().text();   // Último elemento (maior ano visível)
        
                if (year < min) {
                    cy.get('button.react-calendar__navigation__prev-button')
                    .should('be.visible')
                    .click();
                    cy.wait(300).then(() => navigateCalendar());  // Pequeno delay para evitar erros de renderização // Chama novamente a função para verificar
            
                } else if (year > max) {
                    cy.get('button.react-calendar__navigation__next-button')
                    .should('be.visible')
                    .click();
                    cy.wait(300).then(() => navigateCalendar());
                } else {
                    cy.get('.react-calendar__tile').contains(year).click();
                }
            });
        }        
        // Chamar a função no teste
        navigateCalendar();

        cy.get('button.react-calendar__year-view__months__month').eq(month-1).click()

        cy.get('button.react-calendar__month-view__days__day').contains(day).click()

        cy.get('input.react-date-picker__inputGroup__month').should('have.value', month)    
        cy.get('input.react-date-picker__inputGroup__day').should('have.value', day)    
        cy.get('input.react-date-picker__inputGroup__year').should('have.value', year)    















    })
})