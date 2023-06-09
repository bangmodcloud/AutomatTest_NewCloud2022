describe('Edit e-tax information juristic', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })


    it('Usabilities (User does not enter fieldinput. The system display alert message “Please input data” .)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.wait(300);
        cy.contains('Edit').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get('#juristicName').clear();
        cy.get('#businessId').clear();
        cy.get('#branchId').clear();
        cy.get('[name="address"]').clear();
        cy.get('[type="submit"]').clear;
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.contains('Edit').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get('#juristicName').clear().type('Test-1');
        cy.get('#businessId').clear().type('2324134188800');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Usabilities (User does not enter fieldinput. The system display alert message “Please input data” .)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.wait(300);
        cy.contains('Edit').invoke('removeAttr','target').click();
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
})