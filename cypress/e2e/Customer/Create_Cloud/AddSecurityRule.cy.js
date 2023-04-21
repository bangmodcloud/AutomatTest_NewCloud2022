describe('Add Security rule', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)

    })

    it('Usabilities (User select Potocol is All / TCP (All ports) / UDP (All ports) and GRE. The system Disable field Port.)', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Add Inbound').click();
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Protocol
        cy.get('[title="Protocol"]').first().click();
        cy.get('[name="rules[0].port"]').should('be.disabled');
        
        cy.contains('Add Rule').click();
        cy.get(':nth-child(2) > :nth-child(1) > .ant-select > .ant-select-selector').first().click(); //Protocol
        cy.get('[title="Protocol"]').last().click();
        cy.get(':nth-child(2) > :nth-child(2) > .ant-select > .ant-select-selector').click();
        cy.get('[title="TCP (All ports)"]').click();
        cy.get('[name="rules[0].port"]').should('be.disabled');

        cy.contains('Add Rule').click();
        cy.get(':nth-child(3) > :nth-child(1) > .ant-select > .ant-select-selector').first().click(); //Protocol
        cy.get('[title="Protocol"]').last().click();
        cy.get(':nth-child(3) > :nth-child(2) > .ant-select > .ant-select-selector').click();
        cy.get('[title="UDP (All ports)"]').last().click();
        cy.get('[name="rules[0].port"]').should('be.disabled');

        cy.contains('Add Rule').click();
        cy.get(':nth-child(4) > :nth-child(1) > .ant-select > .ant-select-selector').first().click(); //Protocol
        cy.get('[title="Protocol"]').last().click();
        cy.get(':nth-child(4) > :nth-child(2) > .ant-select > .ant-select-selector').click();
        cy.get('[title="GRE"]').last().click();
        cy.get('[name="rules[0].port"]').should('be.disabled');
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Add Inbound').click();
       
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Action success', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Add Inbound').click();
        cy.get('[name="rules[0].source"]').type('0.0.0.0/0')
        cy.get('[name="rules[0].description"]').type('test add rule')
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Usibilities (User click Add Rule button. The system dispaly add table row.)', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Add Inbound').click();
        cy.wait(300);
        cy.contains('Add Rule').click();
       
        cy.wait(700);


    })

    it('Usibilities (User click minus icon. The system close table row.)', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Add Inbound').click();
        cy.wait(300);
        cy.contains('Add Rule').click();
        cy.wait(300);
        cy.get('[aria-label="minus-circle"]').click();
       
        cy.wait(700);


    })

    it('Action success (User click Add Rule button and try Add rule.)', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Add Inbound').click();
        cy.get('[name="rules[0].source"]').type('0.0.0.0/1')
        cy.contains('Add Rule').click();
        cy.get(':nth-child(2) > :nth-child(1) > .ant-select > .ant-select-selector').first().click(); //Protocol
        cy.get('[title="Protocol"]').last().click();
        cy.get(':nth-child(2) > :nth-child(2) > .ant-select > .ant-select-selector').click();
        cy.get('[title="TCP (All ports)"]').click();
        cy.get(':nth-child(2) > .source > .form-control').type('192.168.10.10/32')
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })
})