describe('Volume Type / Edit Volume Information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Validation (Admin click Edit button. The system set Price / 1 GB = disabled.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#volume-type').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3) > a').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.wait(300);
        cy.get('#amount').should('be.disabled');

    })

       it('Validation (Admin does not enter Text field. The system display alert message “Please Input data”.', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Edit').click();
            cy.get('[name="name"]').clear();
            cy.get('[name="description"]').clear();
            cy.get('[name="volumeTemplateUUID"]').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')

        })

       it('Validation (Admin click Cancel button. The system close Edit.', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Edit').click();
            cy.wait(300);
            cy.contains('Cancel').click();
            cy.wait(300);

        })

    it('Action success', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Edit').click();
            cy.get('[name="name"]').clear().type('HDD');
            cy.get('[name="description"]').clear().type('test Edit');
            cy.get('[name="volumeTemplateUUID"]').clear().type('7bc2123f-b584-4770-ae36-f51cb29334b0');
            cy.get('[type="submit"]').click();

        })

    })