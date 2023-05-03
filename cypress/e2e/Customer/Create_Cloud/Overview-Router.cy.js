describe('Overview Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (Admin click tab All / Active / Allocating / Error)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(4) > .px-0').click();

            cy.wait(300);
            

        })

        it('Usibirities (Admin search with ID / Customer / Name / Description / External Network)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get('#search').type('Qa test');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('Test-1');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('test Router');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('43.239.251.17');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);

        })


        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(1) > :nth-child(2) > a').last().click();
            cy.get('.header-30-semibold').contains('Manage User');
            

        })


        it('Usibirities ( When : Admin click hyperlink Name. The system leads to Manage Router page.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(1) > :nth-child(3) > a').last().click();
            cy.get('.header-30-semibold').contains('Manage Router');
            

        })

    })