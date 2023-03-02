describe('Manage Router / Clear External Network Router.', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Usabilities (User click No. The system closed modal.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(500);
        cy.get('.card-header > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Clear External Network?')
            .contains('button', 'ไม่')
            .click();

        cy.wait(1000);


    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(500);
        cy.get('.card-header > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Clear External Network?')
            .contains('button', 'ใช่')
            .click();
        cy.wait(3000);


    })

    it('Usabilities (User Clear External Network succeed. The system set SNAT = Disable)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get('.mt > .content-14-reg > .ant-switch').should('be.disabled');

        cy.wait(700);


    })
})