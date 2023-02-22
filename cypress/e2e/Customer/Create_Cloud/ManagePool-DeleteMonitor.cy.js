describe('Delete Monitor', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(4000)
    })


    it('Usibirities (User click No. The system closed modal.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); // Monitor Tab
        cy.get(':nth-child(2) > .vars-235246309 > .btn').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Monitor?')
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
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); // Monitor Tab
        cy.get(':nth-child(2) > .vars-235246309 > .btn').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Monitor?')
                .contains('button', 'ใช่')
                .click();
            cy.wait(700);


    })
})