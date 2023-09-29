describe('Super Admin Activate Account Admin', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    it('Usabilities (Super Admin click No. The system closed modal.)', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.wait(700);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('Activate').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Activate Account?')
            .wait(300)
            .contains('button', 'No')
            .click();
       
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.wait(700);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('Activate').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Activate Account?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
       
        cy.wait(700);

    })

    it('Usabilities (Super Admin Activate succeed.  User Account will chang status to “Active”)', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.wait(700);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('.status').contains('Active')
       
        cy.wait(700);

    })

    
})
