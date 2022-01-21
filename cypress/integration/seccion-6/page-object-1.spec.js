/// <reference types='Cypress' />
import 'cypress-file-upload'
import ProyectoUno from '../../support/pageObjects/proyecto1-pom/proyecto1-pom'

require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
 
describe('Seccion 6 - Page Object Models', () => { 
    const master = new ProyectoUno()
    master.visitHome()
    
    it('Test Case 01 - Alternative Path 1 - Login  ', () => {
        master.SeccionUno("fakeusername", "fakePässword")
        cy.log("Hola mundo")
        cy.get('#btnLogin').should("be.visible").click()
        cy.screenshot("Test Case 01")
    })

    it('Test Case 02 - Alternative Path 2 - Login  ', () => {
        
        master.SeccionUno("fakeUsername", "fakePässword")
        //cy.IntranetValidarCampo("//*[@id='spanMessage']", "Username cannot be empty", "username")
        cy.log("Hola mundo")
        cy.get('#btnLogin').should("be.visible").click()
    })

    it('Test Case 03 - Alternative Path 3 - Login  ', () => {
        master.SeccionUno("fakeusername", " ")
        cy.log("empty password")
        cy.get('#btnLogin').should("be.visible").click()
    })
})