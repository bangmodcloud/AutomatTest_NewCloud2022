describe('Biling & Cost Dashboard', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

    it('Usabilities ( User search with Billing UID / Billing / Service. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.get('[href="/billing-and-cost/billed"]').click({ force: true });
        cy.wait(500);
        cy.get('#search').type('Terminate LOAD_BALANCER Load-Balance1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('64eec2946b10045ab8565fc3');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('Cloud Service');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('No');
        cy.get('.ant-empty-description').contains('No data')
        
        cy.wait(700);


    })

    it('Usabilities ( User filter Date and time of deduction from credit and Date and time of deduction from Load Balance. The system displays data according to the day/month/year selected by the Customer.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.get('[href="/billing-and-cost/billed"]').click({ force: true });
        cy.wait(500);
        cy.get('.ant-picker').click();
        cy.get('[title="2023-05"]').click();
      
        
        cy.wait(700);


    })

    it('Usabilities ( User click caret-up icon Fields Column Billing / Service   / Amount / Pay by credit  \
        Date and time of deduction from credit / Pay by balance / Date and time of deduction from balance. \
        The system will to sort ascending.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.get('[href="/billing-and-cost/billed"]').click({ force: true });
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Billing UID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Billing UID
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Billing
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Billing
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Service
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Service
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Amount
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Amount
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Pay by credit
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Pay by credit
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Date and time of deduction from credit
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Date and time of deduction from credit
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Pay by balance
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Pay by balance
        cy.wait(200);
        cy.get(':nth-child(8) > .ant-table-column-sorters').dblclick(); //Date and time of deduction from balance
        cy.wait(500);
        cy.get(':nth-child(8) > .ant-table-column-sorters').click(); //VDate and time of deduction from balance
        cy.wait(200);
        
        cy.wait(700);


    })

    it('Usabilities ( Admin click hyper link Billing. The system leads to Manage Billing page.)', () => {

    cy.get('#billing-collapse').click({ force: true });
    cy.get('#billing-and-cost').click({ force: true });
    cy.get('[href="/billing-and-cost/billed"]').click({ force: true });
    cy.wait(500);
    cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
    
    cy.wait(700);


})
})