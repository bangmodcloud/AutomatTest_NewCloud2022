describe('Manage Router / Edit Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(1) > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="name"]').clear().type('test-Edit-Router');
        cy.get('[name="description"]').clear().type('Automate test Edit router');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(1) > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="name"]').clear();
        cy.get('[name="description"]').clear();
        cy.get('.text-danger').contains('Please input data');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User click Cancel button and click Yes.   The system display modal “ยืนยันออกจากการแก้ไข” and close Edit.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(1) > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('#edit-general-information > .app_renderer_lib_style__card-style > .card > .card-header > .ml-auto > .vars--1060101102 > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);


    })

    it('Validation (User click another action for which the edit was not saved.  The system display modal “Leave Site ? “)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(1) > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.mt-3 > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .contains('button', 'ใช่')
        cy.wait(700);


    })
})