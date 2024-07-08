describe('Create Template', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it("Usibirities (The system displayed Field labels as follows: Name, Description, Published)", () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.contains('Create Template').click();
       
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')
        cy.contains('label', 'Published').should('have.text', 'Published')

        cy.wait(700);

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.contains('Create Template').click();
       
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(700);

    })

    it('Usabilities (Admin click Cancel button. The system display modal “Are you sure to leave information updating?” )', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.contains('Create Template').click();
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

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.contains('Create Template').click();
        cy.get('[name="name"]').type('Template-test');
        cy.get('[name="description"]').type('Test Template');
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })
})