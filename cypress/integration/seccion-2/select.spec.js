/// <reference types="Cypress" />

require('cypress-xpath')

describe("Second Challenge", () => {
    it("Test Case 01 - Select ", () => {
        cy.visit("http://www.google.com.ar")
        cy.title().should("eq", "Google")

        cy.get("[name='q']").should("be.visible").type("Lionel Messi {enter}")
        cy.wait(1500)
        
        // Imagenes
        cy.get('.MUFPAc > :nth-child(2) > a').click()
        // Busqueda por Microfono 
        //cy.get(".goxjub").click()
    })

    it("Test Case 02 - Select ", () => {
        cy.visit("http://www.seleniymeasy.com/test/basic-select-dropdown-demo.html")

        cy.get("#multi-select").should("be.visible").select(["California", "Ohio","Washington"]).then( () => {
            console.log("Arrow function!")
            cy.get("#printMe").should("be.visible").click()
        })
    
    })    

})