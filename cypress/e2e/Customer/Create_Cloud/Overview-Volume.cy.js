describe('Overview Volume', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities ( Admin click caret-up icon Fields Column ID / Customer   / Size / Type  / Bootable  / Cloud Instance / Automatic Volume Backup /Provisioning Status.  The system will to sort ascending.)', () => {

        cy.get('#volume-collapse').click();
        cy.get('[href="/cloud/volume"]').click();
        cy.get('[aria-label="ID"] > .ant-table-column-sorters').dblclick(); //ID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click(); //ID
        cy.wait(200);
        cy.get('[aria-label="Customer"] > .ant-table-column-sorters').dblclick(); // Customer
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click(); //Customer
        cy.wait(200);
        cy.get('[aria-label="Name"] > .ant-table-column-sorters').dblclick(); // Name
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click(); //Name
        cy.wait(200);
        cy.get('[aria-label="Size"] > .ant-table-column-sorters').dblclick(); //Size
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click(); //Size
        cy.wait(200);
        cy.get('[aria-label="Type"] > .ant-table-column-sorters').dblclick(); //Type 
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click(); //Type 
        cy.wait(200);
        cy.get('[aria-label="Bootable"] > .ant-table-column-sorters').dblclick(); //Bootable
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click(); // Bootable
        cy.wait(200);
        cy.get('[aria-label="Cloud Instance"] > .ant-table-column-sorters').dblclick(); //Cloud Instance
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click(); //Cloud Instance
        cy.wait(500);
        cy.get('[aria-label="Automatic Volume Backup"] > .ant-table-column-sorters').should('be.visible').dblclick({force: true}); //Automatic Volume Backup
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click({force: true}); //Automatic Volume Backup
        cy.wait(200);
        cy.get('[aria-label="Provisioning Status"] > .ant-table-column-sorters').should('be.visible').dblclick({force: true}); //Provisioning Status
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sort > .ant-table-column-sorters').click({force: true}); //Provisioning Status
        
        
        cy.wait(700);


    })

        it('Usibirities (Admin click tab  All (10) / Available  / In-use / Suspend / Error / Backing-up / Restoring-backup / Automatic-volume-backup. The system displays a list of items of Volume that are in Status.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.wait(500);
            cy.get(':nth-child(2) > .px-0').click();
            cy.wait(500);
            cy.get(':nth-child(3) > .px-0').click();
            cy.wait(500);
            cy.get(':nth-child(4) > .px-0').click();
            cy.wait(500);
            cy.get(':nth-child(5) > .px-0').click();
            cy.wait(500);
            cy.get(':nth-child(6) > .px-0').click();
            cy.wait(500);
            cy.get(':nth-child(7) > .px-0').click();
            cy.wait(500);
            cy.get(':nth-child(8) > .px-0').click();
            cy.wait(1000);

        })

        it('Usibirities (Adminr search with ID / Customer / Name / Size / Type / Bootable / Cloud Instance . The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get('#search').type('varaporn.ad@gmail.com');
            cy.wait(300);
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
            cy.get('#search').clear().type('cloud-test-1');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(1000);
            

        })

        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get('#search').type('varaporn.ad@gmail.com');
            cy.wait(500);
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.wait(1000);
            cy.get('.header-30-semibold').contains('Manage User');
            cy.wait(1000);
            

        })

        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get('#search').clear().type('volume-test');
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(1000);
            cy.get('.header-30-semibold').contains('Manage Volume');
            cy.wait(1000);
            

        })


        it('Usibirities (Admin click hyperlink Name.  The system leads to Manage Volume page.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('[href="/cloud/volume"]').click();
            cy.get('#search').clear().type('cloud-test-1');
            cy.get(':nth-child(1) > :nth-child(7) > .underline-link').invoke('removeAttr','target').click();
            cy.wait(1000);
            cy.get('.header-30-semibold').contains('Manage Cloud');
            cy.wait(1000);
            

        })

    })