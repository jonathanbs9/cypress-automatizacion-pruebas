/// <reference types='Cypress' />
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
 

Given('Abro el navegador principal', () => {
    cy.visit("https://demoqa.com/text-box")
})


When('Cargo el nombre {word}', (name)=> {
    cy.get('#userName').should("be.visible").type(name)
})

When('Cargo el email {word}', (email) => {
    cy.get('#userEmail').should("be.visible").type(email)
})

/*And('Cargo la direccion {string}, {string}', (current_address, permament_address) => {
    cy.get('#currentAddress').should("be.visible").type(current_address)
    cy.get('#permanentAddress').should("be.visible").type(permament_address)
})*/

And('Cargo la current address {string}', (current_address) => {
    cy.get('#currentAddress').should("be.visible").type(current_address)
})

And('Cargo la permanent address {string}', (permament_address) => {
    cy.get('#permanentAddress').should("be.visible").type(permament_address)
})

And('Click en submit', ()=> {
    cy.get('#submit').should("be.visible").click()
})

Then('Validar el nombre de la pagina', () => {
    cy.title().should("eq", "ToolsQA")
})


