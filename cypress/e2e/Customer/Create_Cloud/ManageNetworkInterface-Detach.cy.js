describe(' Manage Network Interface / Detach Instance', () => {
    beforeEach(() => {
        cy.login()
    })


    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').click(); //link-slash
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Detach Network Interface?')
            .contains('button', 'ใช่')
            .click();

        cy.wait(700);


    })

    it('Usibirities (User click  No. The system closed modal.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').click(); //link-slash
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Detach Network Interface?')
            .contains('button', 'ไม่')
            .click();

        cy.wait(700);


    })

    context('Toggle change to Down.', () => {

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Detach Network Interface?')
                .contains('button', 'ใช่')
                .click();

            cy.wait(700);


        })

        it('Usibirities (User click  No. The system closed modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Detach Network Interface?')
                .contains('button', 'ไม่')
                .click();

            cy.wait(700);


        })
    })
})