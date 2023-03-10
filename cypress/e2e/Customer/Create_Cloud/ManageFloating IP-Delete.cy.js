describe('Manage Floating IP / Delete Floating IP', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    context('List Floating IP page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(6) > .row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Floating IP?')
                .contains('button', 'ไม่')
                .wait(200)
                .click();
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(6) > .row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Floating IP?')
                .contains('button', 'ใช่')
                .wait(200)
                .click();
            cy.wait(700);
        })
    })

    context('Manage Floating IP page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
            cy.get('.ant-table-row > :nth-child(1) > a').click();
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Floating IP?')
                .contains('button', 'ไม่')
                .wait(200)
                .click();
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
            cy.get('.ant-table-row > :nth-child(1) > a').click();
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Floating IP?')
                .contains('button', 'ใช่')
                .wait(200)
                .click();
            cy.wait(700);
        })
    })
})