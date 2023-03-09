describe('Manage Floating IP / Associate Instance', () => {
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
        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Associate Instance');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(2) > .ant-select-item-option-content').last().click();
        cy.get('[type="submit"]').click();
        cy.wait(5000);
    })

    it(' validation (User did not select field select. The system alert message “ Please select data“)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Associate Instance');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);
    })

    it(' Usabilities (User click ยกเลิก. The system close modal.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Associate Instance')
            .contains('button', 'ยกเลิก')
            .wait(200)
            .click();
        cy.wait(700);
    })

    it(' Usabilities (User go to Manage your Floating IP. The system display Associate Instance card)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Associate Instance')
            .contains('button', 'ยกเลิก')
            .wait(200)
            .click();
        cy.wait(700);
    })
})