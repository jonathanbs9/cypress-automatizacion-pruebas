/// <reference types="Cypress" />

describe("Seccion 3 - Tablas", () => {
    
    it("Test Case 01 ", () => { 
        cy.visit("https://web-sites.lbpsb.qc.ca/demo2/Parents/Shortcodes-2/buttons")
        cy.get(".col-md-6 .btn-success").should("be.visible").should("contain", "Success")
        
        //cy.get(".col-md-6").children(".btn-success").should("contain", "Success")
        cy.get("[type='button']").eq(2).should("contain", "Success")
        cy.get("[type='button']").eq(3).should("contain", "Info")
        cy.get("[type='button']").eq(4).should("contain", "Warning")
        cy.get("[type='button']").eq(5).should("contain", "Danger")
    })

    it.only("Test Case 01 ", () => { 
        cy.visit("https://web-sites.lbpsb.qc.ca/demo2/Parents/Shortcodes-2/buttons")
        cy.get("[type='button']").filter(".btn-warning").should("contain", "Warning").first().click()
    
    })

})

