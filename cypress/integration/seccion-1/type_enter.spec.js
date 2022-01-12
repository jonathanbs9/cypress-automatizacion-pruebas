/// <reference types="Cypress" />

describe("Funciones type - Seccion 1", () =>{
    it('Test type ENTER', () => {
      cy.visit("http://www.google.com.ar")
      cy.title().should("eq", "Google")
      cy.log("Title matchs! OK")
      cy.get("[name='q']").type("Lionel Messi {enter}")
      cy.get('.gLFyf').type("Lionel Messi {enter}")
      
      cy.log("Busqueda con enter matchs! OK")

    })
})