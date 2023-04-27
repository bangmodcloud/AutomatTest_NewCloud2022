describe('Overview Volume', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (Admin click tab  All (10) / Available  / In-use / Suspend / Error / Backing-up / Restoring-backup. The system displays a list of items of Volume that are in Status.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(4) > .px-0').click();
            cy.get(':nth-child(5) > .px-0').click();
            cy.get(':nth-child(6) > .px-0').click();
            cy.get(':nth-child(7) > .px-0').click();

        })

        it('Usibirities (Adminr search with ID / Customer / Name / Size / Type / Bootable / Cloud Instance . The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get('#search').type('qa test');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('volume-test');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('50 GB');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('SSD');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('Yes');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('hostname-1-1');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            

        })

        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage User');
            

        })

        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage Volume');
            

        })


        it('Usibirities (Admin click hyperlink Name.  The system leads to Manage Volume page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get(':nth-child(1) > :nth-child(7) > .underline-link').invoke('removeAttr','target').click();
            cy.get('.header-30-semibold').contains('Manage Cloud');
            

        })

    })