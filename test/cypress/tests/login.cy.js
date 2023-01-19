const cypress = require("cypress")
const { describe } = require("mocha")

let testAssertionMessages

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe ('Add Runtime tests', () => {
    beforeEach(() => {
    cy.login()
    })

    it('Login with valid cred',  {tags: '@smoke'}, () => {
        cy.get('#usermenu-dropdown').click()
        cy.get('#logout-option').click()
    })
})