/// <reference types="Cypress" />

describe("Page up, Page down ", () => {
    //it.only => runs only the specific test
    it("Test Type PageUP", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        
        cy.wait(2000)
        cy.log("Title OK! ")
        
        cy.get("#userName").type('{pageup}')
        cy.log("PageUp OK! ")

    })

    it("Test Type PageDOWN", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        
        cy.wait(2000)
        cy.log("Title OK! ")
        
        cy.get("#userName").type('{pagedown}')
        cy.log("Page Down OK! ")
    })
})