describe('Add e-tax information thai juristic ', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

     it('Usabilities (User click Juristic radio. Submit botton = Disable.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.get('[type="submit"]').should('be.disabled');
        cy.wait(700);


    })

    it('Usabilities (User click huperlink “click here”. The system open new tab to Account Management page tap e-Tax Information.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(700);


    })

    it('Usabilities (User does not enter fieldinput. The system display alert message “Please input data” .)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click(); //Sub-district / Sub-area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usabilities (User does not enter fieldselect.The system display alert message “Please select data”.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr', 'target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get('#juristicName').type('Wara');
        cy.get('#businessId').type('1420137872130');
        cy.get('[name="address"]').type('64');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);


    })

     it('Usabilities (User search Postal code and enter button. The system display data field Province and field district / Area.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.wait(300);
        cy.contains('click here').invoke('removeAttr', 'target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get('#rc_select_1').type('10530{enter}')
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.contains('click here').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get('#juristicName').type('Wara');
        cy.get('#businessId').type('1420137872130');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click({force: true}); //Sub-district / Sub-area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[name="address"]').type('64')
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

   
})