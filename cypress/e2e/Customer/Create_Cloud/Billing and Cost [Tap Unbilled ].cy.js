describe(' Billing and Cost [Tap Unbilled ]', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

    it('Usabilities ( User search with Resource UID , Name , Service, Start Time. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.get('#search').type('Load Balancer');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('6501efa8c91c6c5288d2be28');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('Cloud Service');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('2023-09-19');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('No');
        cy.get('.ant-empty-description').contains('No data')
        
        cy.wait(700);


    })

    it('Usabilities ( User click caret-up icon Fields Column Name / Service   / Plan / Start Time  / Price Plan / Usage Quantity / Amount.  The system will to sort ascending.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Name
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Name
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Service
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Service
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Plan
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Plan
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Start Time 
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Start Time 
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Price Plan
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Price Plan
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Usage Quantity
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Usage Quantity
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Amount
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Amount
        
        cy.wait(700);


    })

    it('Usabilities ( User click hyper link Name. The system go to the Manage page of that service.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-cell > .underline-link').invoke('removeAttr', 'target').click();
        cy.wait(700);


    })

    it('Usabilities ( User select the quantity to display the Pagination list. The system display the Pagination list.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(500);
        cy.get('.ant-select-selection-item').click();
        cy.get('[title="30 / page"]').click();
        cy.wait(700);


    })

    it('Usabilities ( User enters page number. The system display page number.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(500);
        cy.get('[aria-label="Page"]').wait(500).type('2').wait(500).type('{enter}')
     
        cy.wait(700);


    })
})