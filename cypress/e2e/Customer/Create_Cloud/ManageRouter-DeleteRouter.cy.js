describe('Manage Router / Delete Router.', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    context('List Router page', () => {

        it('Usabilities (User click cancel. The system close modal)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(6) > .row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Router?')
                .contains('button', 'No')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(6) > .row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Router?')
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })
    })

    context('Manage Router page', () => {

        it('Usabilities (User click cancel. The system close modal)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get('.mx-0 > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Router?')
                .contains('button', 'ไม่')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get('.mx-0 > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Router?')
                .contains('button', 'ใช่')
                .click();
            cy.wait(700);

        })
    })
})