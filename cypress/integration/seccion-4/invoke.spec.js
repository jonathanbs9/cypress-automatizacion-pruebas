/// <reference types="Cypress" />
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Seccion 4 -  Invoke", () => {
    it('Test Case 01 - Invoke test', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")
        
        
        cy.get('[for="firstname"').invoke("text").as("labelName")
        cy.get('@labelName').should("contain", "First name:").then( () => {
            cy.get('#firstname').should("be.visible").type("Jonathan")
        })
    })

    it('Test Case 02 - Estilos', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get("[for='firstname']").invoke("attr", "style", "color:blue; font-size: 28px")
    })

    it('Test Case 03 - Ocultar y Mostrar', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get("[for='firstname']").invoke("hide")
        cy.get('#firstname').invoke("hide")

        cy.wait(3000)

        cy.get("[for='firstname']").invoke("show", "2s")
        cy.get('#firstname').invoke("show", "2s")
    })

    it('Test Case 04 - Challenge', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")
        

        cy.get('#firstname').should("be.visible").type("Jonathan").then(() => {
            cy.wait(1400)
            cy.get('[for="surname"]').invoke("show", "3s")
            cy.get('#surname').invoke("show", "4s")
            cy.get("#surname").type("TestingLargeSurname")
        })
    })

    it.only('Test Case 05 - About Blank Issue', () => {
        cy.visit("https://dvwa.co.uk/")
        cy.title().should("eq", "DVWA - Damn Vulnerable Web Application")
        cy.xpath("//*[@id='pagewidth']/div/div[5]/a[2]").invoke('removeAttr', 'target').click()
        
    })
})