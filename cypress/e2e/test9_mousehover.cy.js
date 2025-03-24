// <reference types="Cypress" />

describe("Mouse hover", function () {

  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("Show", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get(".mouse-hover-content").invoke("show")
    cy.contains("Top").click()
    cy.url().should("include", "top")

  });

  it("Forcing ", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.contains("Top").click({ force: true })
    cy.url().should("include", "top")

  });
});

