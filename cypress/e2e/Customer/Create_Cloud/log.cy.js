describe('log', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
    })

    it('Usabilities ( User try select filter Timestamp / Actor ID / Service Type / Target / Action. The system displays a list of each selected Filter.)', () => {

        cy.get('#service-log').click({ force: true });
        cy.wait(2000);
        cy.get('[id="Actor ID"]').click();
        cy.get('[id="menu-Actor ID"]').should('have.length', 1).click();
        cy.get('[id="menu-Actor ID"] > .px-0 > .d-flex > .btn').click();
        cy.contains("Clear all").click();
        cy.wait(1000);
        cy.get('[id="Actor Type"]').click();
        cy.get('[id="menu-Actor Type"] > :nth-child(4)').click();
        cy.get('[id="menu-Actor Type"] > .px-0 > .d-flex > .btn').click();
        cy.contains("Clear all").click();
        cy.wait(1000);
        cy.get('[id="Service Type"]').click();
        cy.get('[id="menu-Service Type"] > :nth-child(4)').click();
        cy.get('[id="menu-Service Type"] > .px-0 > .d-flex > .btn').click();
        cy.contains("Clear all").click();
        cy.wait(1000);
        cy.get('#Target').click();
        cy.get('#menu-Target').should('have.length', 1).click();
        cy.get('#menu-Target > .px-0 > .d-flex > .btn').click();
        cy.contains("Clear all").click();
        cy.wait(1000);
        cy.get('#Action').click();
        cy.get('#menu-Action').should('have.length', 1).click();
        cy.get('#menu-Action > .px-0 > .d-flex > .btn').click();
        cy.contains("Clear all").click();
        
        cy.wait(700);


    })

    it('Usabilities ( User search with  Timestamp / Actor ID / Target / Action. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#service-log').click({ force: true });
        cy.wait(2000);
        cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').type('9b65f718-df3b-4c92-b730-0c667bba2695');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(2000);
        cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('STAFF');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(4000);
        cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('171.97.46.27');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(4000);
        cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('PRIVATE');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(4000);
        cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('Default Workspace');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(4000);
        cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('66272a4a1edbfd7070fc9b79');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(4000);
        cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('LoadBalancerCreatedEvent');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(4000);
        cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('Nodata');
        cy.get('.ant-empty-description').contains('No data')
     
        
        cy.wait(3000);


    })

    it('Usibirities (Admin try select filter Select Month. The system displays a list of each selected Filter.)', () => {

        cy.get('#service-log').click({ force: true });
        cy.wait(2000);
        cy.get('.ant-picker').click({force: true});
        cy.get('[title="2024-03"]').click();
        
        cy.wait(700);


    })


    // it('Usabilities ( User click caret-up icon Fields Column Timestamp / Actor ID / Service Type / Target / Action. The system will to sort ascending.)', () => {

    //     cy.get('#service-log').click({ force: true });
    //     cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Timestamp
    //     cy.wait(500);
    //     cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Timestamp
    //     cy.wait(200);
    //     cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Event ID
    //     cy.wait(500);
    //     cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Event ID
    //     cy.wait(200);
    //     cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Actor Type
    //     cy.wait(500);
    //     cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Actor Type
    //     cy.wait(200);
    //     cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Actor ID
    //     cy.wait(500);
    //     cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Actor ID
    //     cy.wait(200);
    //     cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Service Type
    //     cy.wait(500);
    //     cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Service Type
    //     cy.wait(200);
    //     cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Target
    //     cy.wait(500);
    //     cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Target
        
        
    //     cy.wait(700);


    // })

    // it('Usabilities ( User click hyper link Target. The system opens a new tab to that target page.)', () => {

    //     cy.get('#service-log').click({ force: true });
    //     cy.wait(300);
    //     cy.get(':nth-child(1) > :nth-child(4) > .underline-link').invoke('removeAttr','target').click();
    //     cy.wait(700);


    // })
})