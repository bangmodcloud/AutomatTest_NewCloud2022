describe('Manage Backup Profile/ Delete Backup Profile ', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })
    context('List Backup Profile page', () => {

        it('Validation (Admin click Delete Backup Profile button that is connected to the Workspace and click Yes. \
            The system display modal “Error”', () => {

            cy.get('#volume-collapse').click();
            cy.get('#system-backup-profile').click();
            cy.get(':nth-child(2) > :nth-child(7) > .row > .d-flex > .btn').click()
            cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Error')
                    .wait(300)
            cy.wait(700);

        })

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#system-backup-profile').click();
            cy.get(':nth-child(3) > :nth-child(7) > .row > .d-flex > .btn').click()
            cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Backup Profile?')
                    .wait(300)
                    .contains('button', 'No')
                    .click();
            cy.wait(700);

        })

        it('Usibirities (Admin click Yes. Admin Delete Backup Profile  succeed.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#system-backup-profile').click();
            cy.get(':nth-child(3) > :nth-child(7) > .row > .d-flex > .btn').click()
            cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Backup Profile?')
                    .wait(300)
                    .contains('button', 'Yes')
                    .click();
            cy.wait(700);

        })
    })

     context('Manage Backup Profile page', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#system-backup-profile').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.get('.ml-auto > .d-flex > .btn').click()
            cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Backup Profile?')
                    .wait(300)
                    .contains('button', 'No')
                    .click();
            cy.wait(700);

        })

        it('Usibirities (Admin click Yes. Admin Delete Backup Profile  succeed.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#system-backup-profile').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.get('.ml-auto > .d-flex > .btn').click()
            cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Backup Profile?')
                    .wait(300)
                    .contains('button', 'Yes')
                    .click();
            cy.wait(700);

        })
    })
})
