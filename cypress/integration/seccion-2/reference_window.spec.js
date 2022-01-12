/// <reference types="Cypress" />

describe("Refence Windows", () => {

    it("Test case 01 - Windows Charset", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq", "The Number Game")
        cy.wait(1500)

        cy.document().should("have.property", "charset").and("eq", "UTF-8")

    })

    it("Test case 02 - Url Validation", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq", "The Number Game")
        cy.wait(1500)

        cy.url().should("include", "random-number.html")
        cy.url().should("eq", "https://testsheepnz.github.io/random-number.html")
    })
})
