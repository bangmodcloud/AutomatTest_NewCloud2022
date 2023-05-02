describe('Manage Template / Add Inbound', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it(' Usabilities(Admin go to Add Inbound page. The system set Protocol and disable field Port have volue = 1-65535.) )', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Add Inbound').click()
        cy.get('[name="rules[0].port"]').should('be.disabled')
        cy.wait(700);

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Add Inbound').click()
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Validation (Admin entered an Invalid IP Address.  The system display alert message “Invalid according to the format of CIDR”.', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Add Inbound').click();
        cy.get('[name="rules[0].source"]').type('1')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Invalid according to the format of CIDR');
        cy.wait(700);

    })

    it('Usabilities (User click Add Rule button. The system dispaly add table row.', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Add Inbound').click();
        cy.wait(300);
        cy.contains('Add Rule').click();
        cy.wait(700);

    })

    it('Usabilities ( User click minus icon. The system close table row.', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Add Inbound').click();
        cy.wait(300);
        cy.contains('Add Rule').click();
        cy.wait(300);
        cy.get('[aria-label="minus-circle"]').click();
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Add Inbound').click();
        cy.get('[name="rules[0].source"]').type('0.0.0.0/1')
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    it('Action success (User try Add Security rule. User Add Security rule succeed. ', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Add Inbound').click();
        cy.get('[name="rules[0].source"]').type('0.0.0.0/0')
        cy.wait(300);
        cy.contains('Add Rule').click();
        cy.get(':nth-child(2) > .col-10 > .row > :nth-child(1) > .ant-select > .ant-select-selector').first().click(); //Protocol
        cy.get('[title="Protocol"]').last().click();
        cy.get(':nth-child(2) > .col-10 > .row > .port > .form-control').type('60');
        cy.get(':nth-child(2) > .col-10 > .row > .source > .form-control').type('192.168.10.10/32');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})