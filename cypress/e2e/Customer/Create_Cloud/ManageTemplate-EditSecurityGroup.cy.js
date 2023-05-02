describe('Manage Template / Edit Security Group', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Edit').click()
        cy.get('[name="name"]').clear();
        cy.get('[name="description"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Validation (Admin click Cancel button.  The system close Edit.)', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Edit').click()
        cy.wait(700);
        cy.contains('Cancel').click()
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Edit').click()
        cy.get('[name="name"]').clear().type('Edit-Templat');
        cy.get('[name="description"]').clear().type('Test Edit Templat');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})