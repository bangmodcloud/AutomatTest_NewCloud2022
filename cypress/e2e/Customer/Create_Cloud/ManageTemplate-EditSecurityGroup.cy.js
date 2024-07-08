describe('Manage Template / Edit Security Group', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (The system displayed Field labels as follows: Name, Description, Published)', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')
        cy.wait(700);

    })

    it('Usibirities (Admin click Edit button. The system displayed Field labels as follows: Name, Description (Optional), Published)', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click()
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')
        cy.wait(700);

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.underline-link').first().click();
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
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click()
        cy.wait(700);
        cy.contains('Cancel').click()
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click()
        cy.get('[name="name"]').clear().type('Edit-Templat');
        cy.get('[name="description"]').clear().type('Test Edit Templat');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})