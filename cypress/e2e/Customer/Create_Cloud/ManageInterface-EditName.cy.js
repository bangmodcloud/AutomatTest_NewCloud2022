describe('Manage interface / Edit Name Interface', () => {
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
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        cy.get('#name').clear().type('test-Edit-Name');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('validation (User did not specify Name. The system displays alert message “ Please input data”', () => {


        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        cy.get('#name').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('validation (User click  Cancel button. The system close Edit.', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        cy.wait(300);
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
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        cy.wait(300);
        cy.get('.mx-0.mt-4 > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);


    })
})