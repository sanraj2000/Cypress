Cypress.Commands.add('login', () => {
    const username = Cypress.env('USERNAME') || throwMissingCypressEnvError('USERNAME')
    const password = Cypress.env('PASSWORD') || throwMissingCypressEnvError('PASSWORD')


        cy.session([username, password], () => {
            cy.visit("/")
            cy.get('#username').type(Cypress.env('USERNAME'))
            cy.get('#password').type(Cypress.env('PASSWORD'))
            cy.get('#kc-login').click()
        },
            {
                cacheAcrossSpecs: true
            })
        cy.visit("/")

        cy.waitUntil(() =>cy.get('#API-tab__option').should('be.visible'))
    })