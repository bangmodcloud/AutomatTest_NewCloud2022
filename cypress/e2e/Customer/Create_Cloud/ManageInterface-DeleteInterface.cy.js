describe('Manage interface / Delete Interface', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    context('List interface page', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get(':nth-child(1) > :nth-child(5) > .row > .app_renderer_common_button__common-button-style > .btn').click(); //delete
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Interface?')
                .wait(500)
                .contains('button', 'ไม่')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get(':nth-child(1) > :nth-child(5) > .row > .app_renderer_common_button__common-button-style > .btn').click(); //delete
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Interface?')
                .wait(500)
                .contains('button', 'ใช่')
                .click();
            cy.wait(700);

        })
    })

    context('Manage Interface page.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.underline-link').click();
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //delete
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Interface?')
                .wait(500)
                .contains('button', 'ไม่')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.underline-link').click();
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //delete
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Interface?')
                .wait(500)
                .contains('button', 'ใช่')
                .click();
            cy.wait(700);

        })
    })
})