describe('Impersonate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (Admin click Impersonate button. The system will redirect to the page “Impersonate requires you to confirm your password.”)', () => {

            cy.get('#user-management-collapse').click();
            cy.get('[href="/nt/user-management"]').click();
            cy.get('[data-row-key="1"] > :nth-child(2) > a').click();
            cy.wait(700);
            cy.contains('Impersonate').invoke('removeAttr','target').click();
           
            cy.wait(700);

        })

        it('Usibirities (Admin does not enter Password. The system dispaly alert message “Please input data.”)', () => {

            cy.get('#user-management-collapse').click();
            cy.get('[href="/nt/user-management"]').click();
            cy.get('[data-row-key="1"] > :nth-child(2) > a').click();
            cy.wait(700);
            cy.contains('Impersonate').invoke('removeAttr','target').click();
            cy.get('[type="submit"]').click();
            cy.get('#password-error').contains('Please input data');
           
            cy.wait(700);

        })

        it('Usibirities (Admin entered a password that does not match the Admin account. The system dispaly alert message “Password incorrect.”)', () => {

            cy.get('#user-management-collapse').click();
            cy.get('[href="/nt/user-management"]').click();
            cy.get('[data-row-key="1"] > :nth-child(2) > a').click();
            cy.wait(700);
            cy.contains('Impersonate').invoke('removeAttr','target').click();
            cy.get('#password').type('1')
            cy.get('[type="submit"]').click();
            cy.get('#password-error').contains('Password incorrect.');
           
            cy.wait(700);

        })

        it('Usibirities (Admin enter password and click Next button. The system will redirect to the customer is homepage, “Cloud Listing”.)', () => {

            cy.get('#user-management-collapse').click();
            cy.get('[href="/nt/user-management"]').click();
            cy.get('[data-row-key="1"] > :nth-child(2) > a').click();
            cy.wait(700);
            cy.contains('Impersonate').invoke('removeAttr','target').click();
            cy.get('#password').type('Adminbangmod123@')
            cy.get('[type="submit"]').click();

            cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
            cy.get('.d-flex > :nth-child(2)').type('2');
            cy.get('.d-flex > :nth-child(3)').type('3');
            cy.get('.d-flex > :nth-child(4)').type('4');
            cy.get('.d-flex > :nth-child(5)').type('5');
            cy.get('.d-flex > :nth-child(6)').type('6');

            cy.get('.header-30-semibold').contains('Cloud');
           
            cy.wait(700);

        })
    })