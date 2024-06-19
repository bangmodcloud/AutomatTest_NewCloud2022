describe('Awaiting Terminate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()
        cy.wait(5000);

    })

    it('Usibirities (Admin search with ID / Email / Register Date / Last Login / Last Topup / Redeem / Last Deduct / KYC Approved / Status\
        The system displays the searched list. If not found, it will display a message “ No Data.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.wait(1000);
        cy.get('#user-awaiting-terminate').click();
        cy.get('#search').type('000017');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('varaporn05@gmail.com');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('2024-04-09 10:16:40');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('2024-04-11 12:59:17');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('2024-04-11 12:59:17');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('2024-04-24 01:37:55');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get('#search').clear().type('Awaiting Approval');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('Active');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');

        cy.wait(700);

    })

    it('Usibirities ( Admin click caret-up icon Fields Column ID / Email / Register Date / Last Login / Last Topup / Redeem / Last Deduct / KYC Approved / Status\
        The system will to sort ascending.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); // ID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); // ID
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); // Email
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); // Email
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); // Register Date
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); // Register Date
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); // Last Login
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); // Last Login
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); // Last Topup / Redeem
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); // Last Topup / Redeem
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); // Last Deduct
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); // Last Deduct
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); // KYC Approved
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); // KYC Approved
        cy.wait(200);
        cy.get(':nth-child(8) > .ant-table-column-sorters').dblclick(); // Status
        cy.wait(500);
        cy.get(':nth-child(8) > .ant-table-column-sorters').click(); // Status


        cy.wait(700);

    })

    it('Usibirities ( Admin click hyperlink Email. The system direct to User Manage page.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })

    it('Usibirities ( Admin click tab Completed KYC but not have credit and balance more than 90 days\
        The system displays a list of items of Completed KYC but not have credit and balance more than 90 days.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(1000);

        cy.get(':nth-child(2) > .px-0').click();

        cy.wait(700);

    })

    it('Usibirities ( Admin click caret-up icon Fields Column ID / Email / Register Date / Last Login / Last Topup / Redeem / Last Deduct / KYC Approved / Status\
        The system will to sort ascending.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click();

        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); // ID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); // ID
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); // Email
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); // Email
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); // Register Date
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); // Register Date
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); // Last Login
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); // Last Login
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); // Last Topup / Redeem
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); // Last Topup / Redeem
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); // Last Deduct
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); // Last Deduct
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); // KYC Approved
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); // KYC Approved
        cy.wait(200);
        cy.get(':nth-child(8) > .ant-table-column-sorters').click(); // Status
        cy.wait(500);
        cy.get(':nth-child(8) > .ant-table-column-sorters').dblclick(); // Status
        cy.wait(700);

    })

    it('Usibirities ( Admin click hyperlink Email. The system direct to User Manage page.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })



})