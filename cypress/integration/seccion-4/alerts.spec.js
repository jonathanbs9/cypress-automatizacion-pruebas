/// <reference types="Cypress" />
require('cypress-xpath')

describe("Seccion 4 - Alerts", () => {
    it('Test Case 01 - ', () => {
        cy.visit("https://demoqa.com/alerts")
        cy.title().should("eq", "ToolsQA")

        cy.xpath("//*[@id='alertButton']").click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal("You clicked a button")
        })

    })
})

