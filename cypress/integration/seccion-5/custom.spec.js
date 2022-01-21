/// <reference types='Cypress' />
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
 
describe('Seccion 5 - Custom', () => { 
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
    })

    it('Test Case 01 - ', () => {
        cy.log("Test 01")
        cy.Texto_visible("#userName", "Jonathan")
        cy.Texto_visible("#userEmail", "test.automation@gmail.com")
        cy.Click("#submit")
    })

    it.only('Test Case 02 - With Commands', () => {
      cy.Bloque_ToolsQA("Jonathan", "test.automation@gmail.com", "123 Fs Street", "APT 1")  
    })
})
