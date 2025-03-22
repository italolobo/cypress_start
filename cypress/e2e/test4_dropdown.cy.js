/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Static Dropdown
    cy.get("select#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2");


    // Dynamic Dropdown
    cy.get("input#autocomplete").type("ind");
    //nao seleciona o elemento India da lista de opcoes
    //cy.get(".ui-menu-item div").contains("India").click();

    cy.get("input#autocomplete").type("{selectall}{del}");
    cy.get("input#autocomplete").type("ind");
    //seleciona o elemento India da lista de opcoes
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("input#autocomplete").should("have.value", "India");


  });
});
