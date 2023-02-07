describe(' Manage Network Interface / Disable and Enable Port Security', () => {
    beforeEach(() => {
        cy.login()
    })

    context('Change toggle Port Security Group to Disable.', () => {

        it('Action success (Tab Allowed Address Pair disappears, cannot be added, and the Security Group is completely deleted, and the Security Group cannot be edited.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(3) > .content-14-reg > :nth-child(1) > .ant-switch').click(); //toggle Port
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disable Port Security?')
                .contains('button', 'ใช่')
                .click();

            cy.wait(700);

        })

        it('Usibirities (User click No. The system closed modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(3) > .content-14-reg > :nth-child(1) > .ant-switch').click(); //toggle Port
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disable Port Security?')
                .contains('button', 'ไม่')
                .click();

            cy.wait(700);

        })


    })

    context('Change toggle Port Security Group to Enable.', () => {

        it('Action success (Tab Allowed Address Pair disappears, cannot be added, and the Security Group is completely deleted, and the Security Group cannot be edited.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(3) > .content-14-reg > :nth-child(1) > .ant-switch').click(); //toggle Port
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Enable Port Security?')
                .contains('button', 'ใช่')
                .click();

            cy.wait(700);

        })

        it('Usibirities (User click No. The system closed modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(6) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)').click(); //link Name
            cy.get(':nth-child(3) > .content-14-reg > :nth-child(1) > .ant-switch').click(); //toggle Port
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Enable Port Security?')
                .contains('button', 'ไม่')
                .click();

            cy.wait(700);

        })

        it('Usibirities (User Change succeed. The system display Tab Allowed Address Pair and there is a Security Group button that can be edited.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(6) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)').click(); //link Name
            cy.get(':nth-child(2) > .px-0').should('be.visible');

            cy.wait(700);

        })
    })

})

