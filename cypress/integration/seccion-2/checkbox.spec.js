/// <reference types="Cypress" />

require('cypress-xpath')
describe("Second Challenge", () => {
    it("Test Case 01 - Check and uncheck ALL", () =>{
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")

        // Check ALL
        cy.get("[type='checkbox'").check().should("be.checked")
        cy.wait(1000)
        // Uncheck ALL
        cy.get("[type='checkbox'").uncheck().should("not.be.checked")

    })

    it("Test Case 02 - Check por seleccion", () =>{
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")

        cy.get("#isAgeSelected").check().should("be.checked")

    })

    it.only("Test Case 03 -  W3school", () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select")
        cy.wait(10000)
        cy.get("#cars").should("be.visible").select("2")
    })

})