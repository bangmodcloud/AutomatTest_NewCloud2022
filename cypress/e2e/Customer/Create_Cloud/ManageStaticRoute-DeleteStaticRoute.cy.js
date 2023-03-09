describe('Manage Static Route / Delete Static Route', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })


    it('Usibirities (User click No. The system closed modal.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(3) > .px-0').click(); //Static Route
        cy.get(':nth-child(1) > :nth-child(3) > .row > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Delete Static Route?')
            .contains('button', 'ไม่')
            .wait(200)
            .click();
        cy.wait(700);
    })

    it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(3) > .px-0').click(); //Static Route
            cy.get(':nth-child(1) > :nth-child(3) > .row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Static Route?')
                .contains('button', 'ใช่')
                .wait(200)
                .click();
            cy.wait(700);

        })
    })