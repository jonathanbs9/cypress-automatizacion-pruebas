/// <reference types="Cypress" />

const { size } = require("lodash")


describe("Seccion 2 - Asserts", () => {

    it("Test Case 01 - Assert contains ", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        
        cy.get('#block_top_menu').contains("Women")
        cy.get('#block_top_menu').contains("Dresses")
        cy.get('#block_top_menu').contains("T-shirts")
    })

    it("Test Case 02 - Assert find, eq - Primer elemento ", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        
        cy.get('.product-container').first().click()
        // Selecciono primer elemento [0]
        cy.get('.product-container').find('.product-image-container').eq(0).click()
    })

    it("Test Case 03 - Assert find, eq - Tercer elemento Condicion 'New' ", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        
        cy.get('.product-container').first().click()
        // Selecciono primer elemento [0]
        cy.get('.product-container').find('.product-image-container').eq(2).click()
        cy.get('#product_condition .editable').then( (e) => {
            let estado = e.text()
            if(estado == 'New'){
                cy.log('Condición del producto es: '+ estado )
            }
        })
    })
    
    it("Test Case 04 - Assert find, eq - Tercer elemento Precio ", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        
        cy.get('.product-container').first().click()
        // Selecciono primer elemento [0]
        cy.get('.product-container').find('.product-image-container').eq(2).click()
        cy.get('#our_price_display').then( (e) => {
            let price = e.text()
            cy.log("Precio con simbolo: "+e.text())
            
            price=price.slice(1,size(price))
            cy.log("nuevo precio: " +price)
            
        })
    })

    it("Test Case 04 - Assert contains -", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", 'ToolsQA')

        cy.get('#userName').should("be.visible").type("Jonathan Testing")
        cy.get('#userEmail').should("be.visible").type("automation.testing@gmail.com")

        cy.get('#submit').should("be.visible").click()

        cy.get('#name').should("contain.text", "Jonathan Testing")
        cy.get('#email').should("contain.text", "automation.testing@gmail.com")


    })

    it("Test Case 05 - Assert have.text then -", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", 'ToolsQA')

        cy.get('#userName').should("be.visible").type("Jonathan Testing")
        cy.get('#userName').should("have.value", "Jonathan Testing").then( () => {
            cy.get('#userEmail').should("be.visible").type("automation.testing@gmail.com")
            cy.get('#submit').should("be.visible").click()
        })
        
        cy.get('#name').should("contain.text", "Jonathan Testing")
        cy.get('#email').should("contain.text", "automation.testing@gmail.com")
    })

    it("Test Case 06 - Assert have.class", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", 'ToolsQA')

        cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2 form-control").then(() => {
            cy.get("#userName").type("Jonathan Testing")
        })
    })

    it("Test Case 07 - Assert", () => {
        cy.visit("https://syntaxprojects.com/basic-first-form-demo.php")
        cy.title().should("eq", 'Syntax - Website to practice Syntax Automation Platform')
        cy.get('.form-group > #user-message').should("be.visible").type("Cuerpo del mensaje")

        cy.contains("[type='button']", "Show Message").should("be.visible").click({force:true})

    })

    it.only("Test Case 07 - Assert", () => {
        cy.visit("https://syntaxprojects.com/basic-first-form-demo.php")
        cy.title().should("eq", 'Syntax - Website to practice Syntax Automation Platform')
        
        let num1 = 33
        let num2 = 67
        
        //let suma = str(num1 + num2)
        //cy.get('#sum1').should("be.visible").and("have.class", "form-control").type(num1)
        
        
        cy.get('#sum1').invoke("attr", "placeholder").should("contain", "Enter value").then(() => {
            cy.get('#sum1').type(num1)
        })

        cy.get('#sum2').should("be.visible").and("have.class", "form-control").type(num2)

        cy.contains("[type='button']", "Get Total").click()

        cy.get('#displayvalue').should("be.visible").then( (e) => {
            let r = num1 + num2
            cy.log("El valor resultante es: "+ r)
            cy.log(e.text())
            let res = e.text()
            cy.get('#displayvalue').should('contain.text', res)
            
            if (r.toString() == res) {
                cy.log(" Son iguales")
            }
        })


    })
})