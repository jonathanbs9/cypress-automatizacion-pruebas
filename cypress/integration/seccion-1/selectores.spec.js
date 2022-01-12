/// <reference types="Cypress" />
require('cypress-xpath')

describe("Selectors Types", () => {
    it("Test Case 01 - Selector By ID  ", () =>{
        console.log("Hello World from console.log !")
        cy.log("Hello World from cy.log!")
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        
        cy.get("#userName").should("be.visible").type("Jonathan by ID")
    })

    it("Test Case 02 - Selector por Atributos", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        cy.get("[placeholder='Full Name']").should("be.visible").type("Jonathan by Atributos")
    })

    it("Test Case 03 - Selector por xPATH", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        
        cy.xpath("//*[@id='userName']").should("be.visible").type("Jonathan by Xpath")
        cy.xpath("//input[@id='userEmail']").should("be.visible").type("Jonathan_by_Xpath@gmail.com")

    })

    it("Test Case 04 - Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        
        cy.get(".custom-control-label").contains("Male").click()
        cy.get(".custom-control-label").contains("Female").click()
        cy.get(".custom-control-label").contains("Other").click()
        cy.wait(1000)
    })

    it("Test Case 05 - Selector por CopySelector", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        
        cy.get("#userNumber").should("be.visible").type("549223454817")
    })

    
})