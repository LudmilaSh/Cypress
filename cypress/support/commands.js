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

Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click()

    if (email) {
        cy.get('#mail').type(email)
    }
    if (password) {
        cy.get('#pass').type(password)
    }

    cy.get('button[type=submit]').click()
})

Cypress.Commands.add('createNewBook', (title, authors) => {
    cy.contains('Add new').click()
    cy.get('#title').type(title)
    cy.get('#authors').type(authors)

    cy.get('button[type=submit]').click()
})