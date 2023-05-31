describe('My support Ticket', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()

    })



    it('Validation (User try select filter Department / Status. The system displays a list of each selected Filter.)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get('#Department').click();
        cy.get('#menu-Department > :nth-child(4)').click();
        cy.get('#menu-Department > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('#Status').click();
        cy.get('#menu-Status > :nth-child(4)').click();
        cy.get('#menu-Status] > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(700);


    })

    it('Usibirities (User click tab  active and close The system displays a list of items of load Baalancer that are in Status.)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get(':nth-child(2) > .px-0').first().click({force: true});
        cy.wait(300);
        cy.get(':nth-child(3) > .px-0').click();
        cy.wait(300);
       

    })

    it('Usibirities (Admin search with Department / Billing / Subject / Status . The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get('#search').type('Technical support');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('test-1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('open');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        

    })

    it('Usibirities (Admin click caret-up icon Fields Column  ID / Submit Date / Department / Subject / Last Reply / Status )', () => {

        cy.get('#ticket').click({ force: true });
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //ID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //ID
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Submit Date
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Submit Date
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Department
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Department
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Subject
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Subject
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Last Reply
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Last Reply
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Status
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Status
        cy.wait(500);


    })

    it('Usibirities (User click hyperlink Subject. The system leads to Manage your ticket page.)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get(':nth-child(1) > :nth-child(4) > .underline-link').click();
       

    })

})