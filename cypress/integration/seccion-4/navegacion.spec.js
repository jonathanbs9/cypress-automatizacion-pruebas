/// <reference types='Cypress' />
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
 
describe('Seccion 4 - Navegacion', () => { 
    it('Test Case 01  - Back Forward ', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq', 'ToolsQA')

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should("be.visible").click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should("be.visible").click()
        cy.wait(1500)
        cy.go("back")
        cy.go("forward")
        cy.go("back")
        cy.go("forward")

    })

    it.only('Test Case 02  - Reload ', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq', 'ToolsQA')

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should("be.visible").click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should("be.visible").click()
        cy.wait(1500)
        
        cy.get('#userName').type("Jonathan")
        cy.get('#userEmail').type("test.automation@gmail.com")
        
        cy.wait(1500)
        cy.reload()
        

    })
})