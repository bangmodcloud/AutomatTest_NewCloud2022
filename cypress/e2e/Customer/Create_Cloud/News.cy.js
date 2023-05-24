describe('News', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (Admin click tab  All / Published / Unpublished )', () => {

        cy.get('#news').click();
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(300);
        cy.get(':nth-child(3) > .px-0').click();
        cy.wait(300);


    })

    it('Usibirities (Admin search with Title / Create date and Time)', () => {

        cy.get('#news').click();
        cy.get('#search').type('ส่งความสุขปีใหม่ 2566 กับ NT');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('2023-05-23 15:48:30');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');

        cy.wait(300);

    })

    it('Usibirities (Admin click caret-up icon Fields Column No / Title / Description / Create Date and Time / Status )', () => {

        cy.get('#news').click();
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //No
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //No
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Title
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Title
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Description
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Description
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Create Date and Time
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Create Date and Time
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Status
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Status
        cy.wait(500);


    })


})