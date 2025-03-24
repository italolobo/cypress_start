/// <reference types="Cypress" />

describe("Window", function () {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  /*
    CYPRESS CAN'T HNADLE NEW WINDOWS 
  */

  it("Course seggestion", () => {
    
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen') // Intercepta chamadas a window.open
    })

    cy.get('#openwindow').click() // Clica no botão que abre a nova janela
    
    cy.get('@windowOpen').then((stub) => {
      const newWindowUrl = stub.firstCall.args[0]; // Obtém o primeiro argumento passado para window.open()
      
      cy.log('Nova URL:', newWindowUrl); // Apenas para depuração

      cy.visit(newWindowUrl);

      cy.url().should('include', 'qa') 

      cy.get("div[class='button float-left'] a[class='main-btn']").should('contain.text', 'Access')
      
      

    });
    

  });


});
