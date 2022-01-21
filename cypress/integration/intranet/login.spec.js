/// <reference types="Cypress" />
require('cypress-plugin-tab')

describe("Intranet - Solicitudes - Login", () => {
    beforeEach(()=>{
        cy.visit("https://intranet-frontend-eight.vercel.app/")
    })
    
    it("Test Case 00 - Wakeup Server", () => {
        cy.IntranetLoginForm("fakeuser@avalith.net","fakepassword123")

        // Iniciar sesion button
        cy.get('.MuiButtonBase-root').should("be.visible").then( () => {
            cy.get('.MuiButtonBase-root').click()
        })
        
        // Alert
        cy.get('#notistack-snackbar').should("be.visible").then( () => {
            //cy.wait(20000)
            //cy.get('#notistack-snackbar').should("contain.text","login error")
            cy.get('#notistack-snackbar', { timeout: 30000 }).should('be.visible');

        })
    })

    it("Test Case 01 - Happy Path 1 - Login Successful", () => {
        
        // Email
        cy.get('#email').should("be.visible").then( () => {
            cy.get('#email').type("user@avalith.net")
        })
        
        // Password
        cy.get('#password').should("be.visible").then( () => {
            cy.get('#password').type("secret")
        })

        // Iniciar sesion button
        cy.get('.MuiButtonBase-root').should("be.visible").then( () => {
            cy.get('.MuiButtonBase-root').click().then(() => {
                // Alert
                cy.get('#notistack-snackbar').should("be.visible").then( () => {
                    cy.get('#notistack-snackbar').should("contain.text","login success")
                })
                cy.get('.MuiPaper-root > .MuiToolbar-root').should("be.visible")
            })
        })
    })

    it("Test Case 02 - Alternative Path 1 - Login Failed - User does not exist", () => {
        // Email
        cy.IntranetLoginForm("fakeuser@avalith.net", "fakepassword123")
        /*cy.get('#email').should("be.visible").then( () => {
            cy.get('#email').type()
        })
        
        // Password
        cy.get('#password').should("be.visible").then( () => {
            cy.get('#password').type()
        })*/

        // Iniciar sesion button
        cy.get('.MuiButtonBase-root').should("be.visible").then( () => {
            cy.get('.MuiButtonBase-root').click()
        })

        
        // Alert
        cy.get('#notistack-snackbar').should("be.visible").then( () => {
            cy.get('#notistack-snackbar').should("contain.text","login error")
        })

    })

    it("Test Case 03 - Alternative Path 2 - Login Failed -  Email incorrect format", () => {
        
        // Email
        cy.IntranetLoginForm("fakeuser", "fakepassword123").tab()
        /*cy.get('#email').should("be.visible").then( () => {
            cy.get('#email').type("fakeuser").tab()
        })*/
        
        // Helper email
        cy.IntranetValidarCampo("//p[@id='email-helper-text']", "Ingrese un correo valido", "e-mail")
    })

    it("Test Case 04 - Alternative Path 3 - Login Failed -  Email is empty", () => {
        // Password
        cy.IntranetOnlyPassForm("fakepassword123")
        //cy.get('#password').should("be.visible").then( () => {
        //    cy.get('#password').type("fakepassword123")
        //})

         // Iniciar sesion button
         cy.get('.MuiButtonBase-root').should("be.visible").then( () => {
            cy.get('.MuiButtonBase-root').click().then(()=> {
                // Helper email
                cy.IntranetValidarCampo("//p[@id='email-helper-text']", "El correo es obligatorio", "e-mail")
            })
        })
    })

    it("Test Case 05 - Alternative Path 4 - Login Failed - Password is empty", () => {
        // Email
        cy.IntranetOnlyEmailForm("fakeuser@avalith.net")
        /*cy.get('#email').should("be.visible").then( () => {
            cy.get('#email').type("fakeuser@avalith.net")
        })
        */

        // Iniciar sesion button
        cy.get('.MuiButtonBase-root').should("be.visible").then( () => {
            cy.get('.MuiButtonBase-root').click().then(()=> {
                // Helper Password
                cy.IntranetValidarCampo("//*[@id='password-helper-text']", "Su contraseña es obligatoria", "Password")
            })
        })

    })

    it("Test Case 06 - Alternative Path 5 - Login Failed - Email and Password are empty", () => {
         // Iniciar sesion button
         cy.get('.MuiButtonBase-root').should("be.visible").then( () => {
            cy.get('.MuiButtonBase-root').click().then( () => {
                // Helper email
                cy.IntranetValidarCampo("//p[@id='email-helper-text']", "El correo es obligatorio", "e-mail")
                /*cy.get('#email-helper-text').should("be.visible").then(()=> {
                cy.get('#email-helper-text').should("contain.text", "El correo es obligatorio")
                })*/

                // Helper Password
                cy.IntranetValidarCampo("//*[@id='password-helper-text']", "Su contraseña es obligatoria", "Password")
                /*cy.get('#password-helper-text').should("be.visible").then(()=> {
                    cy.get('#password-helper-text').should("contain.text", "Su contraseña es obligatoria")
                })*/
            })
        })
    })

})