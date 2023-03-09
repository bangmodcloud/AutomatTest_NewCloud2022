describe('Edit SSL Certificate', () => {
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
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').click();
        cy.wait(700);
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button

        cy.get('[name="name"]').clear().type('test-EditSSL')
        cy.get('[name="description"]').clear().type('Automate testing Edit SSL');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').click();
        cy.wait(700);
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button

        cy.get('[name="name"]').clear();
        cy.get('[name="description"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User click  Cancel button.  The system close Edit.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').click();
        cy.wait(700);
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button

        cy.get('.vars--1060101102 > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);


    })

    it('Validation (User click another action for which the edit was not saved.  The system display modal “ Leave Site ?”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').click();
        cy.wait(700);
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button

        cy.get('.mx-0 > .d-flex > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Leave Site ?')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);


    })
})