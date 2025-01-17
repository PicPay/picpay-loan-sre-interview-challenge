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
Cypress.Commands.add('visitLoanPage', () => {
    cy.visit('/')
})

Cypress.Commands.add('fillCpfAndSubmit', (cpf) => {
    cy.get('[name="cpf"]').clear().type(cpf)
    cy.get('button').click()
})

Cypress.Commands.add('validateError', (selector, errorMessage) => {
    cy.get(selector).should('be.visible').and('contain.text', errorMessage)
})