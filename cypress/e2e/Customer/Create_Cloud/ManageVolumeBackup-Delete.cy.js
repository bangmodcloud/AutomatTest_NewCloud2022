describe('Manage Volume Backup / Delete', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(1000)

        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').first().click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').first().click();

    })

    context('List Volume Backup page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume-collapse').first().click({ force: true });
            cy.get('#volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(7) > .row > .app_renderer_common_button__common-button-style > .btn').click(); //Delete button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume Backup?')
                .wait(500)
                .contains('button', 'No')
                .click()

            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume-collapse').first().click({ force: true });
            cy.get('#volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(7) > .row > .app_renderer_common_button__common-button-style > .btn').click(); //Delete button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume Backup?')
                .wait(500)
                .contains('button', 'Yes')
                .click()

            cy.wait(1000);

        })
    })

    context('Manage Volume Backup page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume-collapse').first().click({ force: true });
            cy.get('#volume-backup').click();
            cy.get(':nth-child(1) > .underline-link').click();
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Delete button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume Backup?')
                .wait(500)
                .contains('button', 'No')
                .click()

            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume-collapse').first().click({ force: true });
            cy.get('#volume-backup').click();
            cy.get(':nth-child(1) > .underline-link').click();
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Delete button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume Backup?')
                .wait(500)
                .contains('button', 'Yes')
                .click()

            cy.wait(1000);

        })
    })
})