/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  this.beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  /*
    CYPRESS CAN'T HNADLE NEW TABS IN A SINGLE TEST
    AND
    CYPRESS CAN'T HANDLE MULTIPLE DOMAINS IN A SINGLE TEST
  */

  it("AI suggestion", function () {
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      cy.log(url);
      cy.visit(url);
    });
  });

  it("Course seggestion", () => {
    cy.get("#opentab").invoke("removeAttr", "target").click();

    //cy.get('#navbarSupportedContent a[href*="About"]').click(); // does not work because not supported new domain

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get('#navbarSupportedContent a[href*="about"]').click();
      cy.get(".page-banner-cont > h2").should("have.text", "About Us");

    });
  });
});
