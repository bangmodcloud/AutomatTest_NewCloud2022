describe('Manage Floating IP / Disassociate', () => {
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
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.wait(500);
        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click(); //Disassociate Instance
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Disassociate?')
            .wait(500)
            .contains('button', 'ไม่')
            .click();
        cy.wait(2000);
    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.wait(500);
        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click(); //Disassociate Instance
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Disassociate?')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(2000);
    })
})