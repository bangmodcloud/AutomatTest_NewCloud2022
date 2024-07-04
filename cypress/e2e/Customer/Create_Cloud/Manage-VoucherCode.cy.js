
describe('Maange Voucher code', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities (The system displayed Field labels as follows: No., Subject, Detail, Document Date, Voucher Code, Value Credit\
        Start Date, Expired Date, Create Date, Create by, Redeemed Date, Redeem by, Last Modified)', () => {

        cy.get('#voucher-code').click();
        cy.get('.underline-link').first().click();
        cy.contains('label', 'No.').should('have.text', 'No.');
        cy.contains('label', 'Subject').should('have.text', 'Subject');
        cy.contains('label', 'Detail').should('have.text', 'Detail');
        cy.contains('label', 'Document Date').should('include.text', 'Document Date');
        cy.contains('label', 'Voucher Code').should('include.text', 'Voucher Code');
        cy.contains('label', 'Value Credit').should('include.text', 'Value Credit');
        cy.contains('label', 'Start Date').should('include.text', 'Start Date');
        cy.contains('label', 'Expired Date').should('include.text', 'Expired Date');
        cy.contains('label', 'Create Date').should('include.text', 'Create Date');
        cy.contains('label', 'Create by').should('include.text', 'Create by');
        cy.contains('label', 'Redeemed Date').should('include.text', 'Redeemed Date');
        cy.contains('label', 'Redeem by').should('have.text', 'Redeem by');
        cy.contains('label', 'Last Modified').should('have.text', 'Last Modified');

        cy.wait(700);

    })

    it('Usabilities (Admin click Edit button. The system displayed Field labels as follows: No., Subject, Detail, Document Date, \
        Voucher Code, Value Credit, Start Date, Expired Date, Create Date, Create by, Redeemed Date, Redeem by, Last Modified)', () => {

        cy.get('#voucher-code').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.contains('label', 'No.').should('have.text', 'No.');
        cy.contains('label', 'Subject').should('have.text', 'Subject');
        cy.contains('label', 'Detail').should('have.text', 'Detail');
        cy.contains('label', 'Document Date').should('include.text', 'Document Date');
        cy.contains('label', 'Voucher Code').should('include.text', 'Voucher Code');
        cy.contains('label', 'Value Credit').should('include.text', 'Value Credit');
        cy.contains('label', 'Start Date').should('include.text', 'Start Date');
        cy.contains('label', 'Expired Date').should('include.text', 'Expired Date');
        cy.contains('label', 'Create Date').should('include.text', 'Create Date');
        cy.contains('label', 'Create by').should('include.text', 'Create by');
        cy.contains('label', 'Redeemed Date').should('include.text', 'Redeemed Date');
        cy.contains('label', 'Redeem by').should('have.text', 'Redeem by');
        cy.contains('label', 'Last Modified').should('have.text', 'Last Modified');

        cy.wait(700);

    })

    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#voucher-code').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.get('#subject').clear();
        cy.get('#value').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Create by. The system open new tab to Manage Use page)', () => {

        cy.get('#voucher-code').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.wait(200);
        cy.get('.underline-link').invoke('removeAttr', 'target').click();
        cy.wait(700);

    })

    it('Usabilities (Admin click Cancel button. The system diaplay modal “Are you sure to leave information updating?”)', () => {

        cy.get('#voucher-code').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.wait(200);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#voucher-code').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.get('#subject').clear().type('HNY');
        cy.get('#value').clear().type('100');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    context('Voucher code page', () => {

        it('Usabilities (Admin try select filter Subject / Create By / Redeem By. The system displays a list of each selected Filter.)', () => {

            cy.get('#voucher-code').click();

            cy.get('#Subject').click();
            cy.get('#Subject').should('have.length', 1).click();
            cy.get(':nth-child(1) > #menu-Subject > .dropdown-item').first().click({ force: true });
            cy.wait(300);
            cy.get('[id="Create By"]').click();
            cy.get('[id="menu-Create By"]').should('have.length', 1).click();
            cy.get('[id="menu-Create By"] > .dropdown-item').click();
            cy.wait(300);
            cy.get('[id="Redeem By"]').click();
            cy.get('[id="menu-Redeem By"]').should('have.length', 1).click();
            cy.get(':nth-child(1) > [id="menu-Redeem By"] > .dropdown-item').first().click();

            cy.wait(700);

        })

        it('Usabilities (Admin search with Subject / Create by / Redeem by / Status. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

            cy.get('#voucher-code').click();
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').type('HNY');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('admin@bangmod.cloud');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('testwara@gmail.com');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('Unredeemed');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);

            cy.wait(700);

        })

        it('Usabilities (Admin click click Download Voucher Code. The Voucher Code file will be downloaded to the Admin machine automatically.)', () => {

            cy.get('#voucher-code').click();
            cy.wait(300);
            cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
            cy.wait(300);
            cy.get('.row > .ml-auto > .d-flex > .btn').click(); //Download Voucher Code
            cy.wait(700);

        })
    })
})