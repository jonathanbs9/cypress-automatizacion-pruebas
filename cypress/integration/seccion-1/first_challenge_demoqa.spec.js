/// <reference types="Cypress" />


describe("Primer challenge  - Seccion 1", () => {

    it("Test Case 01 - Add Person ", () =>{

        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'ToolsQA')
        
        cy.get('#addNewRecordButton').click()

        // Generate Randmon name
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
        
        

        cy.get('#firstName').should("be.visible").should("be.enabled").type(testname)
        cy.get('#lastName').should("be.visible").should("be.enabled").type("Testlastname")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type(id+"automation@gmail.com")
        cy.get('#age').should("be.visible").should("be.enabled").type("35")
        cy.get('#salary').should("be.visible").should("be.enabled").type("130000")
        cy.get('#department').should("be.visible").should("be.enabled").type("IT")
        cy.get('#submit').should("be.visible").should("be.enabled").click()
        
                
    })

    it("Test Case 02 - Edit first Person age and department", () =>{

        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'ToolsQA')
        
        cy.get('#edit-record-1 > svg > path').click()
        cy.get('#age').should("be.visible").type("35")
        cy.get('#department').should("be.visible").type("IT")

        cy.wait(2000)
        
                
    })

    it("Test Case 03 - Search existing Person ", () =>{

        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'ToolsQA')
        
        cy.get('#searchBox').should("be.visible").should("be.enabled").type("Kierra")

        cy.get('.ReactTable')
            .should("contain.text", "Kierra")
            .should("contain.text", "Gentry")
            .should("contain.text", "kierra@example.com")
            .should("contain.text", "2000")
            .should("contain.text", "Legal")
        cy.log("Data validated! OK ")

    })

    it("Test Case 04 - Delete last Person ", () =>{

        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'ToolsQA')
        
        cy.get('#delete-record-3 > svg > path').scrollIntoView().click({force: true})
        

        cy.get('.ReactTable')
            .should("not.contain.text", "kierra@example.com")
            .should("not.contain.text", "Legal")
            .should("not.contain.text", "Kierra")
            .should("not.contain.text", "Gentry")
        cy.log("Data validated! OK ")

    })
})