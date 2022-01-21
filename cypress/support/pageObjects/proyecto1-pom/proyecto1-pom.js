class ProyectoUno {
    
    // Visit Home
    visitHome(){
        before(() => {
            //cy.visit('https://cypresstesting-trials72.orangehrmlive.com/auth/login')
            cy.visit("https://cypresstesting-trials72.orangehrmlive.com/securityAuthentication/retryLogin")
            cy.title().should("eq", "OrangeHRM")
        })
    }

    SeccionUno(username, password){
        // username
        cy.xpath("//*[@id='txtUsername']").clear().should("be.visible").type(username)
        
        // password
        cy.xpath("//*[@id='txtPassword']").clear().should("be.visible").type(password)
    }
}

export default ProyectoUno;