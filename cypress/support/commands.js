require('cypress-xpath')
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

Cypress.Commands.add('Texto_visible', (selector, texto) => { 
    cy.get(selector).should("be.visible").type(texto)
})

Cypress.Commands.add('Click', (selector) => { 
    cy.get(selector).should("be.visible").click()
})

Cypress.Commands.add('Click_force', (selector) => { 
    cy.get(selector).should("be.visible").click({force: true})
})

Cypress.Commands.add('Click_force_xpath', (selectorXpath) => { 
    cy.xpath(selectorXpath).should("be.visible").click({force: true})
})

// Bloque ToolsQA
Cypress.Commands.add('Bloque_ToolsQA', (name, email, dir1, dir2) => { 
    cy.get("#userName").should("be.visible").type(name)
    cy.get("#userEmail").should("be.visible").type(email)
    cy.get("#currentAddress").should("be.visible").type(dir1)
    cy.get("#permanentAddress").should("be.visible").type(dir2)
    cy.Click("#submit")
})

// Bloque Intranet
Cypress.Commands.add('IntranetLoginForm', (email, password) => { 
    // Email
    cy.get('#email').should("be.visible").then( () => {
        cy.get('#email').type(email)
    })

    // Password
    cy.get('#password').should("be.visible").then( () => {
        cy.get('#password').type(password)
    })
})

Cypress.Commands.add('IntranetOnlyPassForm', (password) => { 
    // Password
    cy.get('#password').should("be.visible").then( () => {
        cy.get('#password').type(password)
    })
})

Cypress.Commands.add('IntranetOnlyEmailForm', (email) => { 
    // Email
    cy.get('#email').should("be.visible").then( () => {
        cy.get('#email').type(email)
    })
})

Cypress.Commands.add('IntranetValidarCampo', (selector, msg, nombreCampo ) => {     
    cy.xpath(selector).should("be.visible").should("contain", msg).then((val) => {
        cy.log("############################################")
        cy.log("######### " + nombreCampo + " no es valido! #############")
        cy.log("############################################")
    })
})
