describe(' Delete Pool', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(4000)
    })

    context('List Pool page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
            cy.get(':nth-child(1) > :nth-child(6) > .row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Pool?')
                .contains('button', 'ไม่')
                .click();
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
            cy.get(':nth-child(1) > :nth-child(6) > .row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Pool?')
                .contains('button', 'ใช่')
                .click()
            cy.wait(700);
        })
    })

    context('Manage your Pool', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
            cy.get('.ant-table-row > :nth-child(1) > a').click();
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Pool?')
                .contains('button', 'ไม่')
                .click()
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
            cy.get('.ant-table-row > :nth-child(1) > a').click();
            cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Pool?')
                .contains('button', 'ใช่')
                .click()
            cy.wait(700);
        })
    })

})