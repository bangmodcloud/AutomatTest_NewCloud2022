describe('Manage Size Plan / Edit Size Plan Information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Validation (Admin click Cancel button.  The system display modal “Are you sure to leave information updating?”.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
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

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('EDIT-SIZE-PLAN');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})