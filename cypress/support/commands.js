// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("login", (email, pass) => {
  cy.get("#email").type(email);
  cy.get("#pass").type(pass);
  cy.get(
    ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2"
  ).click();
});

Cypress.Commands.add("goClick", (locator) => {
  cy.get(locator).click();
});

Cypress.Commands.add("inputText", (locator, value) => {
  cy.get(locator).should("be.visible").clear();
  if (value != "") {
    cy.get(locator).type(value);
  }

  //.type(value)
});

Cypress.Commands.add("element", (locator) => {
  cy.get(locator);
});

Cypress.Commands.add("login", () => {
  cy.fixture("shoppingCart").then((shoppingCart) => {
    cy.xpath("//div[@class='panel header']//a[contains(.,'Sign In')]").click();
    cy.get("#email").type(shoppingCart.email);
    cy.get("#pass").type(shoppingCart.password);
    cy.get("#send2").click();
  });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
