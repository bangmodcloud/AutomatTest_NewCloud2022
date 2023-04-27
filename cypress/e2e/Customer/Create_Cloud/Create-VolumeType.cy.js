describe('Create Volume Type', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Validation (Admin does not enter Text field. The system display alert message “Please Input data”.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#volume-type').click();
        cy.contains('Create Volume Type').click();

        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')

    })

    it('Validation (Admin Check Set default. The system set Publish = disabled and display modal “Confirm change default volume?”.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#volume-type').click();
        cy.contains('Create Volume Type').click();

        cy.get('[name="name"]').type('SSD');
        cy.get('[name="description"]').type('Test Volume Type');
        cy.get('[name="volumeTemplateUUID"]').type('7bc2123f-b584-4770-ae36-f51cb29334b0');
        cy.get('#amount').type('100');
        cy.get('#isSetDefault').check();
        cy.get('#true').should('be.disabled');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm change default volume?')
            .wait(300)

        cy.wait(700);

    })

    it('Validation (Admin click Cancel button. The system leads to Volume Type page.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#volume-type').click();
        cy.contains('Create Volume Type').click();

        cy.wait(300);
        cy.contains('Cancel').click();

        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#volume-collapse').click();
        cy.get('#volume-type').click();
        cy.contains('Create Volume Type').click();
        cy.get('[name="name"]').type('SSD');
        cy.get('[name="description"]').type('Test Volume Type');
        cy.get('[name="volumeTemplateUUID"]').type('7bc2123f-b584-4770-ae36-f51cb29334b0');
        cy.get('#amount').type('100');
        cy.get('[type="submit"]').click();

    })
})