/// <reference types="Cypress" />

describe("Seccion 3 - Ciclos", () => {
    
    it("Test Case 01 - For ", () => { 
        for (let index = 0; index < 100 ; index++) {
            cy.log("Log Index: "+ index)
            
        }
    })

    it("Test Case 02 - Each ", () => { 
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        
        cy.get(".product-name").each(($el, index, $list) => {
            //cy.log(index)
            cy.log($el.text())
            //cy.log($list)
        })
    })

    it("Test Case 03 - Each - Click on 'Blouse' from list", () => {  
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        cy.wait(2000)
        cy.get(".product-name").each(($el, index, $list) => {
            if ($el.text().includes("Blouse")){
                cy.wrap($el).click()
            }
            
        })
    })

    it("Test Case 04 - Each - Click on 'Printed Summer Dress' from list", () => {  
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        cy.wait(2000)
        cy.get(".product-name").each(($el, index, $list) => {
            if ($el.text().includes("rinted Summer Dress")){
                cy.wrap($el).click()
            }
            
        })
    })

    it("Test Case 05 - Each - E2E product to cart (First 5 elements) ", () => {  
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        
        for (let i= 0; i <= 4; i++) {
            cy.get("#center_column .product-name").eq(i).click()
            cy.get('#quantity_wanted').clear().type("3")
            
            // Add to cart
            cy.get('.exclusive > span').should("be.visible").click()
            cy.get('.layer_cart_product > h2').should("be.visible").then(() => {
                cy.get('.layer_cart_product > h2').should("contain.text", "Product successfully added to your shopping cart")
                
            })
            cy.get('.continue > span').should("be.visible").click()
            
            // click Home
            cy.get('.icon-home').should("be.visible").click()
        }            
    })

    it.only("Test Case 06 - Each - Save elements to list ", () => {  
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")

        const datos = []
        cy.get("#center_column .product-name").each(($el, index, $list) => {
            datos[index]= $el.text();
            cy.log(index+" "+datos[index])
        }).then(() => {
            for (let i= 0; i <= datos.length; i++) {
                cy.get("#center_column .product-name").eq(i).click()
                cy.get('#quantity_wanted').clear().type("3")
                
                // Add to cart
                cy.get('.exclusive > span').should("be.visible").click()
                cy.get('.layer_cart_product > h2').should("be.visible").then(() => {
                    cy.get('.layer_cart_product > h2').should("contain.text", "Product successfully added to your shopping cart")
                    
                })
                cy.get('.continue > span').should("be.visible").click()
                
                // click Home
                cy.get('.icon-home').should("be.visible").click()
            }            
        })
    
    })

})