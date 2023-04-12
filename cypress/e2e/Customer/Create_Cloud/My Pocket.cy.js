describe('My Pocket', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

    it('Usabilities ( User search with Pocket / Service / Billing. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.get('#search').type('Balance');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('Cloud Service');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('Terminate LOAD_BALANCER Load-Balance1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('test-1');
        cy.get('.ant-empty-description').contains('No data')
        
        cy.wait(700);


    })

    it('Usabilities ( User filter Date and time of deduction from credit and Date and time of deduction from Load Balance. The system displays data according to the day/month/year selected by the Customer.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.get('[placeholder="Start date"]').click();
        cy.get('.ant-picker-cell-today').click();
        cy.get('[placeholder="End date"]').click();
        cy.get('[title="2023-04-29"]').click();
     
     
        
        cy.wait(700);


    })

    it('Usabilities ( User click caret-up icon Fields Column Order Ref. / Date and Time / Pocket / Service / Billing / Amount. The system will to sort ascending.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Order Ref.
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Order Ref.
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Date and Time
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Date and Time
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Pocket
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Pocket
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Service
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Service
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Billing
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Billing
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Amount
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Amount
        
        cy.wait(700);


    })

    it('Usabilities ( User click Top Up button. The system open new tab to Top Up page.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.wait(300);
        cy.get('[href="/nt-topup"]').last().invoke('removeAttr','target').click();
        
        cy.wait(700);


    })

    it('Usabilities ( Admin click hyper link Billing. The system opens a new tab to Manage Billing page.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(5) > .underline-link').invoke('removeAttr','target').click(); 
        
        cy.wait(700);


    })
})