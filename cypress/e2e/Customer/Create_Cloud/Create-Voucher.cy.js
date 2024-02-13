
describe('Create Voucher code', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#voucher-code').click();
        cy.get('[href="/nt/voucher/new"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

        it('Usabilities (Admin click Cancel button. The system leads to Voucher code page.)', () => {

        cy.get('#voucher-code').click();
        cy.get('[href="/nt/voucher/new"]').click();
        cy.wait(200);
        cy.get('.secondary-text').click(); //Cancel
        cy.wait(700);

    })

    it('Usabilities (The system display Modal Confirm create voucher code and admin click "No" button. The system close modal.', () => {

        cy.get('#voucher-code').click();
        cy.get('[href="/nt/voucher/new"]').click();
        cy.get('#subject').type('Happy Birthday');
        cy.get('#detail').type('Voucher for your Birthday')
        cy.get(':nth-child(3) > .app_renderer_common_datepicker__date-picker-styles > .ant-picker').click();
        cy.get('.ant-picker-footer').click();
        cy.get('#quantity').type('1');
        cy.get('#amount').type('100');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm create voucher code?')
            .wait(300)
            .contains('button', 'No')
            .click();
        cy.wait(700);

    })

    it('Usabilities (The system display Modal Confirm create voucher code and admin click "Yes" button. The system close modal.', () => {

        cy.get('#voucher-code').click();
        cy.get('[href="/nt/voucher/new"]').click();
        cy.get('#subject').type('Happy Birthday');
        cy.get('#detail').type('Voucher for your Birthday')
        cy.get(':nth-child(3) > .app_renderer_common_datepicker__date-picker-styles > .ant-picker').click();
        cy.get('.ant-picker-footer').click();
        cy.get('#quantity').type('1');
        cy.get('#amount').type('100');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm create voucher code?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
        cy.wait(1000);
        cy.get('.header-30-semibold').contains('Your Voucher Code has been created successfully.')
        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column No. / Subject / Code / ValueCredit / Status. The system will to sort ascending.)', () => {

        cy.get('#voucher-code').click();
        cy.get('[href="/nt/voucher/new"]').click();
        cy.get('#subject').type('Happy Birthday');
        cy.get('#detail').type('Voucher for your Birthday')
        cy.get(':nth-child(3) > .app_renderer_common_datepicker__date-picker-styles > .ant-picker').click();
        cy.get('.ant-picker-footer').click();
        cy.get('#quantity').type('3');
        cy.get('#amount').type('100');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm create voucher code?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
        cy.wait(1000);
        cy.get('.header-30-semibold').contains('Your Voucher Code has been created successfully.');
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //No.
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //No.
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Subject
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Subject
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Code
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Code
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //ValueCredit
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //ValueCredit
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Status
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Status


        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Code. The system open new tab to Manage Voucher Code.)', () => {

        cy.get('#voucher-code').click();
        cy.get('[href="/nt/voucher/new"]').click();
        cy.get('#subject').type('Happy Birthday');
        cy.get('#detail').type('Voucher for your Birthday')
        cy.get(':nth-child(1) > .app_renderer_common_datepicker__date-picker-styles > .ant-picker').click();
        cy.get('.ant-picker-footer').click();
        cy.get('#quantity').type('3');
        cy.get('#amount').type('100');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm create voucher code?')
            .wait(300)
            .contains('button', 'Yes')
            .click();

        cy.wait(1000);
        cy.get('.header-30-semibold').contains('Your Voucher Code has been created successfully.');
        cy.get('.underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })


})