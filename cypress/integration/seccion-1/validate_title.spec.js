/// <reference types="Cypress" />

describe("Validate Title - Seccion 1", () =>{
    it('Test Validar Titulo', () => {
      cy.visit("http://demoqa.com/text-box")
      cy.title().should("eq", "ToolsQA")
      cy.log("Title matchs! OK")

    })
})