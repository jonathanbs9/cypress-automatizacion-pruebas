/// <reference types="Cypress" />

describe("Introducción a Asserts", () => {
    
    it("Test Case 01 -  Asserts", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get('#firstName').should("be.visible")
        cy.get('#lastName').should("be.visible").type("LastName Tester")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("automation.testing@gmail.com")
    })
})