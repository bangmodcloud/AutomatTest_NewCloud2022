describe('Manage Issues Type / Edit Issue type information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Validation (Admin does not enter selectfield.  The system display alert messsage “ Please select data” )', () => {

        cy.get('#ticket').click();
        cy.get('.underline-link').click();
        cy.contains('Edit').click();
        cy.get('#issue').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);

    })

    it('Validation (Admin click Cancel button.  The system closed Edit.)', () => {

        cy.get('#ticket').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
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

        cy.get('#ticket').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('#issue').clear().type('Edit-test');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})