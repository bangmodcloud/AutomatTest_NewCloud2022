describe(' Manage Network Interface / Delete Instance', () => {
    beforeEach(() => {
        cy.login()
    })

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(1) > a').click(); //link Name
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); // delete
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Network Interface?')
                .contains('button', 'ใช่')
                .click();

            cy.wait(700);


        })

        it('Usibirities (User click  No. The system closed modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-tbody > :nth-child(3) > :nth-child(1) > a').click(); //link Name
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); // delete
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Network Interface?')
                .contains('button', 'ไม่')
                .click();

            cy.wait(700);


        
    })
})