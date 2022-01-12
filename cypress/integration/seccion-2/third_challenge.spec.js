/// <reference types="Cypress" />

require('cypress-xpath')

describe("Third Challenge", () => {

    it.only("Test Case 03 - Challenge - Select 3 elements and ADD", () => {
        cy.visit("https://preview.keenthemes.com/metronic/demo1/features/miscellaneous/dual-listbox.html")
        // Select 3, 5, and 9
        cy.get('.kt_dual_listbox_1 > .dual-listbox__container > :nth-child(1) > .dual-listbox__available > [data-id="3"]').should("be.visible").click()
        cy.get('.kt_dual_listbox_1 > .dual-listbox__container > .dual-listbox__buttons > :nth-child(2)').click()

        cy.get('.kt_dual_listbox_1 > .dual-listbox__container > :nth-child(1) > .dual-listbox__available > [data-id="5"]').should("be.visible").click()
        cy.get('.kt_dual_listbox_1 > .dual-listbox__container > .dual-listbox__buttons > :nth-child(2)').click()

        cy.get('.kt_dual_listbox_1 > .dual-listbox__container > :nth-child(1) > .dual-listbox__available > [data-id="9"]').should("be.visible").click()
        cy.get('.kt_dual_listbox_1 > .dual-listbox__container > .dual-listbox__buttons > :nth-child(2)').click().then( () => {
            cy.get('.kt_dual_listbox_1 > .dual-listbox__container > :nth-child(3) > .dual-listbox__selected')
                .should("contain.text", "Three")
                .should("contain.text", "Five")
                .should("contain.text", "Nine")
        })
    })

})