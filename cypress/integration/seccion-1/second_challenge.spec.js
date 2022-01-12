/// <reference types="Cypress" />
require('cypress-xpath')
describe("Second Challenge", () => {
    it("Test Case 01 - Search ACE ", () =>{
        console.log("Hello World from console.log !")
        cy.log("Hello World from cy.log!")

        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq', 'Computers database')
        
        // Search      
        cy.xpath("//*[@id='searchbox']").should("be.visible").should("be.enabled").type("ACE")
        cy.get('#searchsubmit').should("be.visible").click()

        cy.get('#main > h1').contains("computers found")
        cy.get('#main > h1').should("contain.text", "6 computers found")
    }) 

    it("Test Case 02 - ADD ", () =>{ 
        cy.get('#add').should("be.visible").click()
        cy.wait(2000)
        
        // Add
        cy.get('#name').should("be.enabled").should("be.visible").type("Cypress Automation")
        cy.get('#introduced').should("be.enabled").should("be.visible").type("2020-01-05")
        cy.get('#discontinued').should("be.enabled").should("be.visible").type("2031-01-05")
        cy.get('#company').should("be.visible").should("be.enabled").select("13").should("have.value", "13").should("contain.text", "IBM")
        // Create 
        //cy.get('.primary').should("be.visible").should("be.enabled").click()
    })
    
})