describe('Manage Floating IP / Edit Description', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })


    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="description"]').clear().type('test-Edit')
        cy.get('[type="submit"]').click();
        cy.wait(700);
    })

    it('Usabilities (User click  Cancel button. The system close Edit.', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.wait(500);
        cy.get('.vars--1060101102 > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);
   
    })

    it('validation (User click another action for which the edit was not saved. The system display modal “ Leave Site ?”', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.wait(500);
        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);
   
    })
})