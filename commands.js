// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// <reference types="cypress" />


Cypress.Commands.add('incorrectEmail',(Selector)=>{ 

    //Negative Testing
    cy.visit(Selector.login.url)   //home page
    cy.url().should('eq', Selector.login.url)  //home page url verification
    cy.location('protocol').should('contains','https')  //protocol verification
    cy.get(Selector.login.login).click()
    cy.get(Selector.login.continueLogin).contains('Please log in to continue.')
    cy.get(Selector.login.email).type("user@nextmail..com")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@nextmail1.com")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@gmail.com")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user#nextmail.com")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@nextmailcom")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("1234@nextmail.com")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@nextmail.com mmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    //Negative Testing

})

Cypress.Commands.add('incorrectPW',(Selector)=>{ 
    
    //Negative Testing
    cy.visit(Selector.login.url)   //home page
    cy.url().should('eq', Selector.login.url)  //home page url verification
    cy.location('protocol').should('contains','https')  //protocol verification
    cy.get(Selector.login.login).click()
    cy.get(Selector.login.continueLogin).contains('Please log in to continue.')
    cy.get(Selector.login.email).type("user@nextmail.com")
    cy.get(Selector.login.password).type("12345678")
    cy.get(Selector.login.loginButton).click()
    cy.get(Selector.login.invalid).contains('Invalid credentials')
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@nextmail.com")
    cy.get(Selector.login.password).type("abcdefg")
    cy.get(Selector.login.loginButton).click()
    cy.get(Selector.login.invalid).contains('Invalid credentials')
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@nextmail.com")
    cy.get(Selector.login.password).type("123456@")
    cy.get(Selector.login.loginButton).click()
    cy.get(Selector.login.invalid).contains('Invalid credentials')
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@nextmail.com")
    cy.get(Selector.login.password).type("123456}")
    cy.get(Selector.login.loginButton).click()
    cy.get(Selector.login.invalid).contains('Invalid credentials')
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@nextmail.com")
    cy.get(Selector.login.password).type("123")
    cy.get(Selector.login.loginButton).click()
    cy.get(Selector.login.invalid).contains('Invalid credentials')
    cy.wait(4000)
    cy.reload()
    cy.get(Selector.login.email).type("user@nextmail.com")
    cy.get(Selector.login.loginButton).click()
    cy.wait(4000)
    //Negative Testing

    //Postive Texting
    cy.visit(Selector.login.url)   //home page
    cy.url().should('eq', Selector.login.url)  //home page url verification
    cy.location('protocol').should('contains','https')  //protocol verification
    cy.get(Selector.login.login).click()

    cy.get(Selector.login.continueLogin).contains('Please log in to continue.')
    cy.get(Selector.login.email).type("user@nextmail.com")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()

    cy.get(Selector.login.dashboard).contains('Dashboard')
    cy.get(Selector.login.invoice).click({force: true})
    //Postive Testing
})

Cypress.Commands.add('invoicePage',(Selector)=>{
    cy.visit(Selector.login.loginurl)
    cy.get(Selector.login.email).type("user@nextmail.com")
    cy.get(Selector.login.password).type("123456")
    cy.get(Selector.login.loginButton).click()

    cy.get(Selector.login.dashboard).contains('Dashboard')
    cy.visit(Selector.Invoice.invoiceurl)

    //Create Invoice
    cy.get(Selector.CreateInvoice.createInvoice).click()
    cy.get(Selector.CreateInvoice.Customer).contains('Choose customer')

    //Negative Testing
    cy.get(Selector.CreateInvoice.CreateInvoiceButton).click()
    cy.contains('Please select a customer.').should('be.visible')
    cy.contains('Please enter an amount greater than $0.').should('be.visible')
    cy.contains('Missing Fields. Failed to Create Invoice.').should('be.visible')
    cy.wait(3000)
    cy.reload()

    cy.get(Selector.CreateInvoice.ChooseCustomer).select('Steven Tey')
    cy.get(Selector.CreateInvoice.Amount).type('000')
    cy.get(Selector.CreateInvoice.CreateInvoiceButton).click()
    cy.contains('Please enter an amount greater than $0.').should('be.visible')
    cy.contains('Missing Fields. Failed to Create Invoice.').should('be.visible')
    cy.wait(3000)
    cy.reload()

    cy.get(Selector.CreateInvoice.ChooseCustomer).select('Steven Tey')
    cy.get(Selector.CreateInvoice.Amount).type(-2000)
    cy.get(Selector.CreateInvoice.CreateInvoiceButton).click()
    cy.contains('Please enter an amount greater than $0.').should('be.visible')
    cy.contains('Missing Fields. Failed to Create Invoice.').should('be.visible')
    cy.wait(3000)
    cy.reload()

    cy.get(Selector.CreateInvoice.ChooseCustomer).select('Steven Tey')
    cy.get(Selector.CreateInvoice.Amount).type('abcd')
    cy.wait(2000)
    cy.get(Selector.CreateInvoice.CreateInvoiceButton).click()
    cy.contains('Please enter an amount greater than $0.').should('be.visible')
    cy.contains('Missing Fields. Failed to Create Invoice.').should('be.visible')
    cy.wait(3000)
    cy.reload()
    //Negative Testing

    //postive Testing
    cy.get(Selector.CreateInvoice.ChooseCustomer).select('Steven Tey')
    cy.get(Selector.CreateInvoice.Amount).type("2000")
    
    cy.get(Selector.CreateInvoice.Pending).check()
    cy.wait(2000)
    cy.get(Selector.CreateInvoice.Paid).should('not.be.checked')
    cy.get(Selector.CreateInvoice.Paid).check()
    cy.wait(2000)
    cy.get(Selector.CreateInvoice.Pending).should('not.be.checked')
    cy.get(Selector.CreateInvoice.CreateInvoiceButton).click()
    cy.wait(4000)
    //Postive Testing
    //Create Invoice

    //Edited Invoice
    cy.xpath("//tbody/tr[1]/td[6]/div[1]/a[1]//*[name()='svg']").click()
    cy.get(Selector.Invoice.customer).contains('Choose customer')
    
    //Negative Testing
    cy.get(Selector.Invoice.Amount).clear()
    cy.get(Selector.Invoice.EditInvoice).click()
    cy.contains('Please enter an amount greater than $0.').should('be.visible')
    cy.contains('Missing Fields. Failed to Update Invoice.').should('be.visible')
    cy.reload()

    cy.get(Selector.Invoice.Amount).clear().type(-2000)
    cy.get(Selector.Invoice.EditInvoice).click()
    cy.contains('Please enter an amount greater than $0.').should('be.visible')
    cy.contains('Missing Fields. Failed to Update Invoice.').should('be.visible')
    cy.reload()

    cy.get(Selector.Invoice.Amount).clear().type('abcd')
    cy.wait(2000)
    cy.get(Selector.Invoice.EditInvoice).click()
    cy.contains('Please enter an amount greater than $0.').should('be.visible')
    cy.contains('Missing Fields. Failed to Update Invoice.').should('be.visible')
    cy.wait(3000)
    cy.reload()
    //Negative testing

    cy.get(Selector.Invoice.Amount).clear().type("500")
    cy.wait(3000)
  
    cy.get(Selector.Invoice.Pending).check()
    cy.wait(2000)
    cy.get(Selector.Invoice.Paid).should('not.be.checked')
    cy.get(Selector.Invoice.Paid).check()
    cy.wait(2000)
    cy.get(Selector.Invoice.Pending).should('not.be.checked')
    cy.get(Selector.Invoice.EditInvoice).click()
    
    cy.xpath("//tbody/tr[1]/td[6]/div[1]/a[1]//*[name()='svg']").click()
    cy.wait(2000)
    cy.get(Selector.Invoice.Amount).clear().type("500")
    cy.get(Selector.Invoice.Pending).check()
    cy.get(Selector.Invoice.EditInvoice).click()



    
    // cy.xpath("//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/form[1]/button[1]").click()

    
})

