let testAssertionMessages

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

describe('Create APIs', () => {
	

	beforeEach(() =>{
		    cy.login()
    	})


	it('Create a REST API', { tags: '@smoke' }, () => {
        cy.get('#API-tab__option').click()
		cy.get('#btn-nav-create-api').click()
        cy.get('#create-api-collapse-three').check({force: true})
        cy.get('.col-md-10 > .btn').click()
        cy.get('#Name').type('Demo API')
        cy.get('h4').click()
        cy.get('#url').type('http://localhost')
        cy.get('#btn-add-server-details-add').click()
        cy.get('#btn-Save').click()
        cy.get('#btn-Activate').should('be.visible')
        cy.get('#API-tab__option').click()
        cy.get('#icon-del-api-Demo-API').click()
        cy.get('#delete-yes').click()
	})

})
