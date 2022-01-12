/// <reference types="Cypress" />
require('cypress-plugin-tab')

describe("Funcion TAB ", () => {
    it("Type con TAB", ()=> {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1500)
        cy.log("Title OK!")

        cy.get('#firstName').type("Tester 01").tab()
            .type("Lastname Test").tab()
            .type("automation.test@gmail.com")
            
        
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()

        cy.get('#userNumber').type("234558748").tab()
            .type("06/23/1986{enter}")
        
        cy.get('.subjects-auto-complete__value-container').type("Subjet inspect test")

        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()

        cy.get('#currentAddress').type("123 Fake Street {enter} APT 4 A {enter} Buenos Aires {enter} Argentina")

        cy.get('#submit').click()
        
        cy.wait(4800)
        cy.get('#example-modal-sizes-title-lg').should('eq', 'Thanks for submitting the form')
        cy.log("Form successfully sent! OK! ")
            



            
    })
})