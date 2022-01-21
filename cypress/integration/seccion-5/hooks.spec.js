/// <reference types='Cypress' />
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
 
describe('Seccion 5 - Hooks', () => { 
    before(() => {
        cy.log("########### Principio ########### ")
    })
    
    beforeEach(() => {
        cy.log("Antes de cada Test")
    })

    afterEach(() => {
        cy.log("Despues de cada test")
    })

    after(() => {
        cy.log("########### Final ########### ")
    })

    it('Test Case 01 - Hooks', () => {
         cy.log('test 01 is valid!')
    })

    it('Test Case 02 - Hooks 2', () => {
        cy.log('test 02 is  valid!')
   })
})