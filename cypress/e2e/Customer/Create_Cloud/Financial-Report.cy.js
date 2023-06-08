describe('Financial Report', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()
        cy.wait(3000);

    })

    it('Usibirities (Admin try select filter Select Month. The system displays a list of each selected Filter.)', () => {

        cy.get('[href="/nt/financial-report"]').click();
        cy.wait(2000);
        cy.get('.ant-picker').click();
        cy.get('[title="2023-06"]').click({ multiple: true });
        cy.wait(700);


    })


    it('Usibirities (Admin search with AccountID. The system displays the searched list.)', () => {

        cy.get('[href="/nt/financial-report"]').click();
        cy.wait(2000);
        cy.get('#search').type('qa@gmail.com')
        cy.wait(700);


    })

    it('Usibirities (Admin click caret-up icon Fields Column AccountID / Topup Balance / VAT (7%) / Credit Redeem / \
        Current Balance / Current Credit / Usage Cost / Deducted from Balance / Deducted from Credit / Remaining Credit / Remaining Balance \
        The system will to sort ascending.)', () => {

        cy.get('[href="/nt/financial-report"]').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //AccountID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //AccountID
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Topup Balance
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Topup Balance
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //VAT (7%)
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //VAT (7%)
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Current Balance
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Current Balance
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Current Credit
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Current Credit
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Usage Cost
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Usage Cost
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Deducted from Balance
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Deducted from Balance
        cy.wait(200);
        cy.get(':nth-child(8) > .ant-table-column-sorters').click(); //Deducted from Credit
        cy.wait(500);
        cy.get(':nth-child(8) > .ant-table-column-sorters').dblclick(); //Deducted from Credit
        cy.wait(200);
        cy.get(':nth-child(9) > .ant-table-column-sorters').click(); // Remaining Credit
        cy.wait(500);
        cy.get(':nth-child(9) > .ant-table-column-sorters').dblclick(); // Remaining Credit
        cy.wait(200);
        cy.get(':nth-child(9) > .ant-table-column-sorters').click(); // Remaining Balance
        cy.wait(500);
        cy.get(':nth-child(9) > .ant-table-column-sorters').dblclick(); // Remaining Balance
        cy.wait(700);


    })

    it('Usibirities (Admin click hyperlink AccountID. The system leads to Manage User page.)', () => {

        cy.get('[href="/nt/financial-report"]').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .ant-table-cell > .underline-link').invoke('removeAttr', 'target').click();
        cy.get('.header-30-semibold').contains('Manage User');
        cy.wait(700);


    })


    it('Usibirities ( Admin does not select filter data and click Export button. The system will export file all.)', () => {

        cy.get('[href="/nt/financial-report"]').click();
        cy.wait(40000);
        cy.contains('Export').invoke('removeAttr','target').click();
        cy.wait(700);


    })
})