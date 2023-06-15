describe('E-Tax address information for foreigners.', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })


    it('Usabilities (User click Type of taxpayer = Personal. Submit botton = Disable.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(700);
        cy.get('[type="submit"]').should('be.disabled');
    
        cy.wait(700);


    })

    it('Usabilities (User click huperlink “click here” The system open new tab to Account Management page tap e-Tax Information.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.get(':nth-child(2) > .PRIMARY-TERTIARY').click(); // Edit foreigners
        
    
        cy.wait(700);


    })

    it('Usabilities (User does not enter fieldinput. The system display alert message “Please input data” .)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.get(':nth-child(2) > .PRIMARY-TERTIARY').click(); // Edit foreigners
        cy.wait(300);
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
    
        cy.wait(700);


    })

    it('Usabilities ( User click Cancel button.  The system display modal”Are you sure to leave information updating?”.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.get(':nth-child(2) > .PRIMARY-TERTIARY').click(); // Edit foreigners
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
    
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.get(':nth-child(2) > .PRIMARY-TERTIARY').click(); // Edit foreigners
        cy.wait(300);
        cy.get('#country').type('South Korea');
        cy.get('#postalCode').type('04300');
        cy.get('#province').type('Seoul');
        cy.get('#district').type('Yongsan');
        cy.get('#subDistrict').type('Hangang-daero 42');
        cy.get('#road').type('13')
        cy.get('#address').type('7');
        cy.get('[type="submit"]').click();
    
        cy.wait(700);


    })

    it('Usabilities (User click Type of taxpayer = Personal and click Submit. The system displays the last recorded e-Tax address information for foreigners and go to Payment Gateway page.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(300);
        cy.get('.mx-0 > .title-16-bold').contains('e-Tax address information for foreigners')
        cy.wait(300);
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })
})