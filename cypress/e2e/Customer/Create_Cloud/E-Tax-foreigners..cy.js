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

    it('Usabilities (User does not enter fieldselect. The system display alert message “Please select data” ..)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.wait(300);
        cy.get('#address').type('64')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
    
        cy.wait(700);


    })

    it('Usabilities ( User search Postal code and enter button. The system display data field Province and field district / Area.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.wait(300);
        cy.get('#rc_select_1').type('10530{enter}')
    
        cy.wait(700);


    })

    it('Usabilities ( User click Cancel button.  The system display modal”Are you sure to leave information updating?”.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.contains('Edit').click();
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
        cy.contains('Edit').click();
        cy.wait(300);
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click({force: true}); //Sub-district / Sub-area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('.col > #address').type('7');
        cy.get('[type="submit"]').click();
    
        cy.wait(700);


    })

})