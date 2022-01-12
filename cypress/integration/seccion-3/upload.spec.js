/// <reference types="Cypress" />
require('cypress-xpath')
import 'cypress-file-upload'

describe("Seccion 3 - Upload", () => {
    
    it("Test Case 01 -  ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        
        const path = 'image_test.png'
        
        cy.get('[type="file"]').attachFile(path)
        cy.get('#uploadPicture').should("contain.value", path)
        cy.xpath('//input[@id="uploadPicture"]').should("contain.value", "image_test.png")
    })


})