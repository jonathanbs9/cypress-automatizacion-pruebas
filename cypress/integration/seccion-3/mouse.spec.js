/// <reference types="Cypress" />
import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')




describe("Seccion 3 - Mouse events", () => {
    
    it("Test Case 01 - Drag and drop ", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should("eq", "The Internet")
        cy.wait(1600)
        cy.get('#column-a').drag('#column-b', {force:true})
        
    })

    it("Test Case 02 - Drag and drop ", () => {
        cy.visit("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop")
        cy.title().should("eq", "Tryit Editor v3.7")
        cy.wait(1600)
        //cy.get('#column-a').drag('#column-b', {force:true})
        cy.get('#runbtn').click()
        cy.get('#runbtn').drag()
    })

    
    it("Test Case 03 - Mouse hover ", () => {
        cy.visit("https://way2automation.com/")
        cy.title().should("eq", "Get Online Selenium Certification Course | Way2Automation")

        // Fix => aparece un popup random. Y cuando hago el over del menu no se despliega en el navegador
        
        cy.contains("Video Tutorial").should("be.visible").trigger('mouseover')
        
        //cy.contains("Selenium with Java").invoke("removeAttr", "class").click()
    })

    it.only("Test Case 04 - Slider ", () => {
        
        cy.visit("http://w3.unpocodetodo.info/css3/input-type-range.php")
        //cy.title().should("eq", "")

        //cy.get("#elemento").invoke("attr", "value", "80")
        cy.get('[type="range"]').should("be.visible").invoke("attr", "value", "87")
        cy.wait(1000)
        cy.get('[type="range"]').should("be.visible").invoke("attr", "value", "5")
        cy.wait(1000)
        cy.get('[type="range"]').should("be.visible").invoke("attr", "value", "99")
        
        
        
    })

})