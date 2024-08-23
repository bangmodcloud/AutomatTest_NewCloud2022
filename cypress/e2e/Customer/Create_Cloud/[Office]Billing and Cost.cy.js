describe('[Office] Billing and Cost', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (Admin search with Billing UID / Billing / Service. The system displays the searched list.)', () => {

        cy.get('[href="/billing-and-cost"]').click();
        cy.get('#search').type('TerminateCloud-hostname-1-1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('65dd4d18b58a387e4ee38ed4');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('Volume Backup');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');

        cy.wait(300);

    })

    it('Usibirities (Admin filter Date and time of deduction from credit and Date and time of deduction from Load Balance)', () => {

        cy.get('[href="/billing-and-cost"]').click();
        cy.get('[id="rc_select_0"]').click({force: true});
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('.ant-picker').click();
        cy.get('[title="2023-05"]').click({ multiple: true });
        cy.wait(300);
       

    })

    it('Usibirities (Admin click caret-up icon Fields Column Billing UID / AccountID / Billing / Service / Amount / Pay by credit  / Date and time of deduction from credit / Pay by balance / Date and time of deduction from balance)', () => {

        cy.get('[href="/billing-and-cost"]').click();
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); // Billing UID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); // Billing UID
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //AccountID
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //AccountID
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Billing 
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Billing 
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Service 
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Service 
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Amount 
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Amount 
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); // Pay by credit
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); // Pay by credit
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); // Date and time of deduction from credit
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); // Date and time of deduction from credit
        cy.wait(200);
        cy.get(':nth-child(8) > .ant-table-column-sorters').click({force: true}); // Pay by balance 
        cy.wait(500);
        cy.get(':nth-child(8) > .ant-table-column-sorters').dblclick({force: true}); // Pay by balance 
        cy.wait(200);
        cy.get(':nth-child(9) > .ant-table-column-sorters').click({force: true}); // Date and time of deduction from balance
        cy.wait(500);
        cy.get(':nth-child(9) > .ant-table-column-sorters').dblclick({force: true}); // Date and time of deduction from balance
        cy.wait(500);


    })

    it('Usibirities (Admin click hyper link Billing. The system leads to Manage Billing and Cost page.)', () => {

        cy.get('[href="/billing-and-cost"]').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .ant-table-cell > .underline-link').invoke('removeAttr', 'target').click();
        cy.get('.header-30-semibold').contains('Manage Billing');
        cy.wait(500);


    })

    it('Usibirities (Admin click caret-up icon Fields Column UID / Billing Name / Usage / Amount )', () => {

        cy.get('[href="/billing-and-cost"]').click();
        cy.get(':nth-child(2) > .ant-table-cell > .underline-link').invoke('removeAttr', 'target').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Billing UID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Billing UID
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Billing Name
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Billing Name
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Usage
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Usage
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Amount
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Amount
        cy.wait(500);


    })

    it('Usibirities (Admin click Export button. The system will export file .CSV and File name format: YYYY-DD)', () => {

        cy.get('[href="/billing-and-cost"]').click();
        cy.contains('button', 'Export').click();
        cy.readFile('cypress/downloads/2024-08.csv') //change fileName

        cy.wait(300);

    })

    it('Usibirities (Admin select filter last month and click Export button. The system will export file .CSV and File name format: YYYY-D)', () => {

        cy.get('[href="/billing-and-cost"]').click();
        cy.wait(500);
        cy.get('.row > :nth-child(1) > .btn').click();
        cy.wait(1000);
        cy.contains('button', 'Export').click();
        cy.readFile('cypress/downloads/2024-07.csv') //change fileName

        cy.wait(300);

    })


})