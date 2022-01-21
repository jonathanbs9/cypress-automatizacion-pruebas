/// <reference types="Cypress" />
require('cypress-xpath')

describe("Seccion 4 - Alias", () => {
    it('Test Case 01 - ', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        
        cy.get('#firstname').should("be.visible").as("fname")
        cy.get('#surname').should("be.visible").as("lname")
        cy.get('#age').should("be.visible").as("age")
        cy.get('#country').should("be.visible").as("country")
        cy.get('#notes').should("be.visible").as("notes")
        cy.get('[type="submit"]').should("be.visible").as("submit")

        cy.get("@fname").type("Jonathan")
        cy.get("@lname").type("Thesurname mus be large")
        cy.get("@age").type("35")
        cy.get("@country").select("Argentina")
        cy.get("@notes").type("This is a text for notes!")
        cy.get("@submit").click()
    
    })

    
})

