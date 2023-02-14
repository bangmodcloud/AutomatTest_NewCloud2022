describe(' Manage Network Interface / Delete allowed address pair ', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Usibirities(User click trash icon and click No. The system closed modal.', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.get(':nth-child(3) > .row > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Delete Allowed Address Pair?')
            .wait(500)
            .contains('button', 'ไม่')
            .click()
        cy.wait(700);

    })

    it('Usibirities(User click trash icon and click Yes. User Delete allowed address pair succeed.', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.get(':nth-child(3) > .row > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Delete Allowed Address Pair?')
            .wait(500)
            .contains('button', 'ใช่')
            .click()
        cy.wait(700);

    })
})