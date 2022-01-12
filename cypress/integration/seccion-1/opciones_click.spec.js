/// <reference types="Cypress" />


describe("Opciones click  - Seccion 1", () => {

    it("Test Case 01 - Click sencillo ", () =>{

        cy.visit("https://cypresstesting-trials72.orangehrmlive.com/securityAuthentication/retryLogin")
        cy.title().should('eq', 'OrangeHRM')
        
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type("Q@wzQw04IR")
       
        cy.get('#btnLogin').should('be.visible').click()

        cy.get('#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title').should('be.visible').click()
        
    })

    it("Test case 02 -  Force click true", () =>{

        cy.visit("https://cypresstesting-trials72.orangehrmlive.com/securityAuthentication/retryLogin")
        cy.title().should('eq', 'OrangeHRM')
        
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type("Q@wzQw04IR")
       
        cy.get('#btnLogin').should('be.visible').click()

        cy.get('#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title').should('be.visible').click({force: true})
        
    })

    it.only("Test case 03 -  Click por coordenadas (x, y)", () =>{

        cy.visit("https://cypresstesting-trials72.orangehrmlive.com/securityAuthentication/retryLogin")
        cy.title().should('eq', 'OrangeHRM')
        
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type("Q@wzQw04IR")
       
        cy.get('#btnLogin').should('be.visible').click()

        cy.get('.page-title').should("be.visible").click(50,15)
        
    })

})

