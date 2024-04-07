describe('Automation Excercise Testing' , function() {
    
    let data, Selector;
    before('Fixture',() => {
        cy.fixture('selectors.json').then((selector) => {
        Selector =  selector;
    })
    });

     it('Test case 1 : verifying with incorrect Email', function(){
        cy.incorrectEmail(Selector)
    })

    it('Test case 2 : verifying with incorrect password', function(){
        cy.incorrectPW(Selector)
    })
    
    it('Test case 3 : verifying with correct Email & password', function(){
        cy.correctEmailPW(Selector)
    })

    it.only('Test case 4 : verifying the invoice page', function(){
        cy.invoicePage(Selector)
    })

})
