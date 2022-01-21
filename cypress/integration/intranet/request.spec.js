/// <reference types="Cypress" />
require('cypress-plugin-tab')
require('cypress-xpath')

describe("Intranet - Solicitudes - Request", () => {
    
    beforeEach(()=>{
        cy.visit("https://intranet-frontend-eight.vercel.app/")
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
                cy.get('.jss38').should("be.visible").click()
            })
        })

        cy.get("[type='submit']").should("be.visible").click()
    })

    // Request Successfully
    it("Test Case 01 -  Happy path 1 - Request sent successfully ", () => {
        cy.log("Solicitud Enviada")
    })

    // Request Types = DAY OFF
    it("Test Case 02 -  Alternative path 1 - Request not created - Day off cannot be the actual day ", () => {
        cy.log("Test Case 02")
        cy.get('.MuiButton-contained').should("be.visible").then(() => {
            cy.get('.MuiButton-contained').click()
        })
        
        cy.get('#notistack-snackbar').should("be.visible").should("contain.text", "Error al crear la solicitud")
            
    })

    // Request Types = DAY OFF
    it("Test Case 03 -  Alternative path 2 - Request not created - Day off cannot be a day before now ", () => {
        let date= Date.now()
        cy.log(date)

        var today = new Date();
        var dd = String(today.getDate()-1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd-1 + '/' + mm + '/' + yyyy;
        cy.log(today)
        
        
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #date').should("be.visible").then(() => {
            cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #date').type(yyyy + "-" + mm + "-" + dd)
        })
        
        
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #date').should("be.visible").then(() => {
            cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #date').type(yyyy + "-" + mm + "-" + dd)
        })

        cy.get('.MuiButton-contained').should("be.visible").then(()=> {
            cy.get('.MuiButton-contained').click()
        })
        
        cy.get('.MuiButton-contained').should("be.visible").then(() => {
            cy.get('#notistack-snackbar').should("contain.text", "Error al crear la solicitud")
        })
        
    })

     // Request Types = DAY OFF
    it("Test Case 04 -  Alternative path 3 - Request not created - Day off cannot be a saturday or sunday ", () => {
        const today = new Date()
        const saturday = new Date()
        const sunday = new Date()

        let satdiffdays = 6 - today.getDay()
        let sundiffdays = 7 - today.getDay()
    
        // Saturday Date
        saturday.setDate(today.getDate() + satdiffdays)
        var dd = String(saturday.getDate()).padStart(2, '0')
        var mm = String(saturday.getMonth() + 1).padStart(2, '0') //January is 0!
        var yyyy = String(saturday.getFullYear())
        let sat = yyyy + "-" + mm + "-" + dd
        //cy.log(String(saturday.getDate()).padStart(2, '0'))
        //cy.log(String(saturday.getMonth() + 1).padStart(2, '0')) //January is 0!
        //cy.log(String(saturday.getFullYear()))
        
        //Sunday Date
        sunday.setDate(today.getDate() + sundiffdays)
        var sundd = String(sunday.getDate()).padStart(2,'0')
        var sunmm = String(sunday.getMonth() + 1).padStart(2, '0') //January is 0!
        var sunyyyy = String(sunday.getFullYear())
        let sun = sunyyyy + "-" + sunmm + "-" + sundd
        //cy.log(String(sunday.getDate()).padStart(2, '0'))
        //cy.log(String(sunday.getMonth() + 1).padStart(2, '0')) //January is 0!
        //cy.log(String(sunday.getFullYear()))
        
        
        const dates = [sat, sun]
        for (let index = 0; index <= 1; index++) {
            cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #date').should("be.visible").then(() => {
                cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #date').type(dates[index])
            })
            
            
            cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #date').should("be.visible").then(() => {
                cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #date').type(dates[index])
            })
            
            
            cy.get('.MuiButton-contained').should("be.visible").then(()=> {
                cy.get('.MuiButton-contained').click().then(() => {
                    
                    cy.get('#notistack-snackbar').should("be.visible").then( ($notistack) => {
                        cy.get('#notistack-snackbar').should("contain.text","Error al crear la solicitud")
                        
                    })
                })
            })
            
          }
        
    })

    // Request Type = NO PROGRAMADA
    it("Test Case 05 - Alternative path 4 - Request not created -  MON to WED Start date after 48 hs", () => {
        cy.wait(400)
        
        cy.get('.MuiInputBase-root > #RequestType').should("be.visible").click().then(()=> {
            cy.get('[data-value="7"]').should("be.visible").click().type("{enter}")
        })

        const today = new Date
        /*cy.log(today.getFullYear())
        cy.log(today.getMonth())
        cy.log(today.getDay())
        cy.log(today.getTime())
        cy.log(today.getDate())
        cy.log(today.getUTCDate())
        cy.log(today.getHours() + 200)
        cy.log(today.getMinutes())
        today.setHours(today.getHours() + 97)
        cy.log(today.getDate())*/

        //const dayToday = today.getDay()
        if ((today.getDay() == 4) || (today.getDay() == 5)) {
            today.setHours(today.getHours() + 96)
            today.setMinutes(today.getMinutes()+ 1)
        } else {
            today.setHours(today.getHours() + 48)
            today.setMinutes(today.getMinutes() + 1)
        }
        
        var dd = String(today.getDate()).padStart(2, '0')
        var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        var yyyy = String(today.getFullYear())
        let modifiedDate = yyyy + "-" + mm + "-" + dd
        
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #date').should("be.visible").then(() => {
            cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #date').type(modifiedDate)
        })

        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #date').should("be.visible").then(() => {
            cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #date').type(modifiedDate)
        })
        
        var hh = String(today.getHours())
        var minutes = String(today.getMinutes() + 2)
        if (minutes<10) {
            minutes = "0" + String(today.getMinutes())
        }
        
        
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #datetime-local').should("be.visible").then(() => {
            cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #datetime-local').type(hh+":"+minutes)
        })

        cy.get(':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > #datetime-local').should("be.visible").then(() => {
            cy.get(':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > #datetime-local').type(hh+":"+minutes)
        })
        
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should("be.visible").then(() => {
            cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("Description for No Programada")
        })
        
        cy.get('.MuiButton-contained').should("be.visible").then(() => {
            cy.get('.MuiButton-contained').click().then(() => {
                cy.get('#notistack-snackbar').should("be.visible").then( () => {
                    cy.get('#notistack-snackbar').should("contain.text","Error al crear la solicitud")
                    
                })
            })
        })
    })
})
