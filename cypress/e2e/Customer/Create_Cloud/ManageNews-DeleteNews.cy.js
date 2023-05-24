describe('Manage News / Delete News', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('List Pool page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#news').click();
            cy.get(':nth-child(1) > :nth-child(6) > .justify-content-center > .d-flex > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete News?')
                .contains('button', 'No')
                .click();
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#news').click();
            cy.get(':nth-child(1) > :nth-child(6) > .justify-content-center > .d-flex > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete News?')
                .contains('button', 'Yes')
                .click()
            cy.wait(700);
        })
    })

    context('Manage your Pool', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#news').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete News?')
                .contains('button', 'No')
                .click()
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#news').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete News?')
                .contains('button', 'Yes')
                .click()
            cy.wait(700);
        })
    })
})