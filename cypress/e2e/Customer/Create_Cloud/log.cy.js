describe('log', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

    it('Usabilities ( User try select filter Timestamp / Actor ID / Service Type / Target / Action. The system displays a list of each selected Filter.)', () => {

        cy.get('#service-log').click({ force: true });
        cy.get('[id="Actor ID"]').click();
        cy.get('[id="menu-Actor ID"]').should('have.length', 1).click();
        cy.get('[id="menu-Actor ID"] > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('[id="Service Type"]').click();
        cy.get('[id="menu-Service Type"] > :nth-child(4)').click();
        cy.get('[id="menu-Service Type"] > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('#Target').click();
        cy.get('#menu-Target').should('have.length', 1).click();
        cy.get('#menu-Target > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('#Action').click();
        cy.get('#menu-Action').should('have.length', 1).click();
        cy.get('#menu-Action > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        
        cy.wait(700);


    })

    it('Usabilities ( User click “ Clear all “ buttton. All selected filters will be cleared.)', () => {

        cy.get('#service-log').click({ force: true });
        cy.get('[id="Actor ID"]').click();
        cy.get('[id="menu-Actor ID"]').should('have.length', 1).click();
        cy.get('[id="menu-Actor ID"] > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('[id="Service Type"]').click();
        cy.get('[id="menu-Service Type"] > :nth-child(4)').click();
        cy.get('[id="menu-Service Type"] > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('#Target').click();
        cy.get('#menu-Target').should('have.length', 1).click();
        cy.get('#menu-Target > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('#Action').click();
        cy.get('#menu-Action').should('have.length', 1).click();
        cy.get('#menu-Action > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .d-flex > .app_renderer_common_button__common-button-style > .btn').click();
        
        cy.wait(700);


    })

    it('Usabilities ( User click caret-up icon Fields Column Timestamp / Actor ID / Service Type / Target / Action. The system will to sort ascending.)', () => {

        cy.get('#service-log').click({ force: true });
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Timestamp
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Timestamp
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Event ID
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Event ID
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Actor Type
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Actor Type
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Actor ID
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Actor ID
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Service Type
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Service Type
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Target
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Target
        
        
        cy.wait(700);


    })

    it('Usabilities ( User search with  Timestamp / Actor ID / Target / Action. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#service-log').click({ force: true });
        cy.get('.ml-auto > .app_renderer_lib_style__searchbar > #search').type('2023-03-20')
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('.ml-auto > .app_renderer_lib_style__searchbar > #search').clear().type('Admin')
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('.ml-auto > .app_renderer_lib_style__searchbar > #search').clear().type('modvm-nuntawon-KL-1')
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('.ml-auto > .app_renderer_lib_style__searchbar > #search').clear().type('VolumeCreatedEvent')
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300)
        cy.get('.ml-auto > .app_renderer_lib_style__searchbar > #search').clear().type('test name');
        cy.get('.ant-empty-description').contains('No data')
        
        cy.wait(700);


    })

    it('Usabilities ( User click hyper link Target. The system opens a new tab to that target page.)', () => {

        cy.get('#service-log').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(6) > .underline-link').invoke('removeAttr','target').click();
        cy.wait(700);


    })
})