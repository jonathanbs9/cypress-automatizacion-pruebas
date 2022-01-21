/// <reference types='Cypress' />
import 'cypress-file-upload'

require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
 
describe('Seccion 7 - Fixtures ', () => { 
    /*before(() => {
        cy.fixture('example.json').then((data) => {
            globalThis.data = data
        })
    })*/

    before(() => {
        cy.fixture('example.json').as("usuarios")
    })

    it('Test Case 01 - Data From json', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')

        cy.get("@usuarios").then((data) => {
            cy.get('#userName').should("be.visible").type(data.name)
            cy.get('#userEmail').should("be.visible").type(data.email)
            cy.get('#currentAddress').should("be.visible").type(data.current_address)
            cy.get('#permanentAddress').should("be.visible").type(data.permanent_address)
            cy.get('#submit').should("be.visible").click()
            
        })  
    })

    it.only('Test Case 02 - Multiple-Data From json ', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.wait(2000)
        cy.title().should('eq', 'ToolsQA')

        cy.fixture('mock_data.json').then((testdata) => {
            testdata.forEach(data => {
                const d_name = data.name
                const d_email = data.email 
                const d_current_address = data.current_address
                const d_permanent_address = data.permanent_address

                cy.get('#userName').should("be.visible").clear().type(d_name)
                cy.get('#userEmail').should("be.visible").clear().type(d_email)
                cy.get('#currentAddress').should("be.visible").clear().type(d_current_address)
                cy.get('#permanentAddress').should("be.visible").clear().type(d_permanent_address)
                cy.get('#submit').should("be.visible").click()
            })
        })

        
        /*cy.get('#userName').should("be.visible").type(data.name)
        cy.get('#userEmail').should("be.visible").type(data.email)
        cy.get('#currentAddress').should("be.visible").type(data.current_address)
        cy.get('#permanentAddress').should("be.visible").type(data.permanent_address)
        cy.get('#submit').should("be.visible").click()*/
            
        
        
    })



})