describe('Transaction History', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (Admin try select filter Payment Method / Select Month. The system displays a list of each selected Filter.)', () => {

        cy.get('[href="/nt/transaction-history"]').click();
        cy.get('[id="Payment Method"]').click();
        cy.get('[id="menu-Payment Method"] > :nth-child(4)').click();
        cy.get('.dropdown-header > .d-flex > .btn').click();
        cy.get('.ant-picker').click();
        cy.get('[title="2023-05"]').click({ multiple: true });
        cy.wait(300);


    })

    it('Usibirities (Admin search with AccountID. The system displays the searched list.)', () => {

        cy.get('[href="/nt/transaction-history"]').click();
        cy.get('#search').type('varaporn.ad@gmail.com')
        cy.wait(300);


    })

    it('Usibirities (Admin click caret-up icon Fields Column AccountID / Topup Balance / VAT (7%) / Credit Redeem / Date Timestamp (GMT+7) / Payment Method / Receipt No. / Order Ref. / Transaction Ref. \
        The system will to sort ascending.)', () => {

        cy.get('[href="/nt/transaction-history"]').click();
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
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Credit Redeem
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Credit Redeem
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Date Timestamp (GMT+7)
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Date Timestamp (GMT+7)
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Payment Method
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Payment Method
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Receipt No.
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Receipt No.
        cy.wait(200);
        cy.get(':nth-child(8) > .ant-table-column-sorters').click(); //Order Ref.
        cy.wait(500);
        cy.get(':nth-child(8) > .ant-table-column-sorters').dblclick(); //Order Ref.
        cy.wait(200);
        cy.get(':nth-child(9) > .ant-table-column-sorters').click(); // Transaction Ref.
        cy.wait(500);
        cy.get(':nth-child(9) > .ant-table-column-sorters').dblclick(); // Transaction Ref.
        cy.wait(500);


    })

    it('Usibirities (Admin click hyperlink AccountID. The system leads to Manage User page.)', () => {

        cy.get('[href="/nt/transaction-history"]').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .ant-table-cell > .underline-link').invoke('removeAttr', 'target').click();
        cy.get('.header-30-semibold').contains('Manage User');
        cy.wait(500);


    })

    it('Usibirities ( Admin select filter data and click Export button. The system will export file that Admin has done to filter)', () => {

        cy.get('[href="/nt/transaction-history"]').click();
        cy.wait(3000);
        cy.get('[id="Payment Method"]').click();
        cy.get('[id="menu-Payment Method"] > :nth-child(6)').click();
        cy.get('.dropdown-header > .d-flex > .btn').click();
        cy.contains('Export').click();;
        cy.wait(3000);


    })

    it('Usibirities ( Admin does not select filter data and click Export button. The system will export file all.)', () => {

        cy.get('[href="/nt/transaction-history"]').click();
        cy.wait(3000);
        cy.contains('Export').click();;
        cy.wait(500);


    })

    it('Usibirities ( Admin does select filter last month and click Export button. The system will export file all.)', () => {

        cy.get('[href="/nt/transaction-history"]').click();
        cy.get('.row > :nth-child(1) > .btn').click();
        cy.wait(4000);
        cy.contains('Export').click();
        cy.wait(700);


    })

    it('Usibirities ( Admin select filter 2 months ago and click Export button. The system will export file all.)', () => {

        cy.get('[href="/nt/transaction-history"]').click();
        cy.get('.row > :nth-child(1) > .btn').click();
        cy.wait(300);
        cy.get('.row > :nth-child(1) > .btn').click();
        cy.wait(4000);
        cy.contains('Export').click();
        cy.wait(700);


    })
})