describe('Super Admin Deactivate Account Admin', () => {
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
        cy.contains('Deactivate').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Deactivate Account?')
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
        cy.contains('Deactivate').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Deactivate Account?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
       
        cy.wait(700);

    })

    it('Usabilities (Super Admin Deactivate succeed.  User Account will chang status to “Inactive”)', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.wait(700);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('.status').contains('Inactive')
       
        cy.wait(700);

    })

    
})
