describe('Overview Volume Backup', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (Admin click tab All  / Available / IError / Restoring / Creating . The system displays a list of items of Volume that are in Status.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#overview-volume-backup').click();
            cy.get(':nth-child(2) > .px-0').first().click({force: true});
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(4) > .px-0').click();
            cy.get(':nth-child(5) > .px-0').click();
           

        })

        it('Usibirities (Admin search with ID / Customer / Volume Name / Size / Create Date / Type / Volume. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#overview-volume-backup').click();
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').type('qa@gmail.com');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('backup-volume-test2');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('50 GB');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('2023-04-27 11:44:23');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('On Demand');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('volume-test');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            

        })

        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#overview-volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr','target').click();
            cy.get('.header-30-semibold').contains('Manage User');
            

        })



        it('Usibirities (Admin click hyperlink Name.  The system leads to Manage Volume Backup page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#overview-volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').invoke('removeAttr','target').click();
            cy.get('.header-30-semibold').contains('Manage Volume Backup');
            

        })

        it('Usibirities (Admin click hyperlink Volume..  The system leads to Manage Volume page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#overview-volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(8) > .underline-link').invoke('removeAttr','target').click();
            cy.get('.header-30-semibold').contains('Manage Volume');
            

        })

    })