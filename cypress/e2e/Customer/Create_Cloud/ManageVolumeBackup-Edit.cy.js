describe('Manage Volume Backup / Edit General', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(1000)

        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').first().click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').first().click();

    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button

        cy.get('[name="name"]').clear().type('Edit-VolumeBackUp');
        cy.get('[type="submit"]').click();
        cy.wait(1000);


    })

    it('Validation (User did not specify field Name.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button

        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(1000);


    })

    it('Validation (User click  Cancel button.  The system close Edit. )', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        cy.wait(500);
        cy.get('.vars--1060101102 > .btn').click(); //Cancel buttonq
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
        cy.wait(1000);


    })

    it('Validation (User click another action for which the edit was not saved.  The system display modal “ Leave Site ?” )', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        cy.wait(500);

        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click();//Restore
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
        cy.wait(1000);


    })
})