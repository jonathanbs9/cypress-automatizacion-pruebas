describe("Curso de Cypress - 2022 - Seccion 1", () => {

    it("My first test returns Hola Mundo", () =>{
        cy.log("Hola Mundo")
        cy.wait(3000)
    })

    it("Segundo Test", () => {
        cy.visit("http://demoqa.com/text-box")
        cy.get('#userName').type("Jonathan")
        cy.get('#userEmail').type("test_automation@gmail.com")
        cy.get('#currentAddress').type("123 Test St")
        cy.get('#permanentAddress').type("permanent St")
        cy.get('#submit').click()
        
        cy.wait(2000)
    })

})