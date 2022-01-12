/// <reference types="Cypress" />

describe("Seccion 3 ", () => {
    
    it("Test Case 01 - DatePicker ", () => {
        cy.visit("http://demo.automationtesting.in/Datepicker.html")
        cy.title().should("eq", "Datepicker")
        cy.log("Title is OK")

        cy.get('#datepicker2').should("be.visible").type("06/23/2022{enter}")
        cy.log("Date is entered")
    })

})

