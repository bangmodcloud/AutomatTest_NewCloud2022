describe('Manage Subnet / Edit', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usibirities(User go to Manage Subnet page. The system displayed Field labels as follows:\
        Private Network Information card : Private Network, The private network already contains0subnets.,\
        Name, Description (optional), IPv4 CIDR, Gateway,DNS Server Address 1 ,DNS Server Address 2,\
        DNS Server Address 3 (Optional),DNS Server Address 4 (Optional)', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('label', 'Private Network').should('have.text', 'Private Network')
        cy.contains('label', 'Private Network IPv4 CIDR').should('have.text', 'Private Network IPv4 CIDR')
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')
        // cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
        cy.contains('label', 'Gateway').should('have.text', 'Gateway')
        cy.contains('label', 'DNS Server 1').should('have.text', 'DNS Server 1')
        cy.contains('label', 'DNS Server 2').should('have.text', 'DNS Server 2')
        cy.contains('label', 'DNS Server 3').should('have.text', 'DNS Server 3')
        cy.contains('label', 'DNS Server 4').should('have.text', 'DNS Server 4')


        cy.wait(700);


    })

    it('Usibirities(User click Edit button. The system displayed Field labels as follows:\
        Private Network Information card : Private Network, Private Network IPv4 CIDR,\
        Name, Description (optional), IPv4 CIDR, Gateway,DNS Server Address 1 ,DNS Server Address 2,\
        DNS Server Address 3 (Optional),DNS Server Address 4 (Optional)', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.wait(700);
        cy.contains('label', 'Private Network').should('have.text', 'Private Network')
        cy.contains('label', 'The private network already contains').should('have.text', 'The private network already contains')
        cy.contains('label', 'subnets.').should('have.text', 'subnets.')
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description (optional)').should('have.text', 'Description (optional)')
        cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
        cy.contains('label', 'Gateway').should('have.text', 'Gateway')
        cy.contains('label', 'DNS Server Address 1').should('have.text', 'DNS Server Address 1')
        cy.contains('label', 'DNS Server Address 2').should('have.text', 'DNS Server Address 2')
        cy.contains('label', 'DNS Server Address 3 (Optional)').should('have.text', 'DNS Server Address 3 (Optional)')
        cy.contains('label', 'DNS Server Address 4 (Optional)').should('have.text', 'DNS Server Address 4 (Optional)')


        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet03');
        cy.get('[name="subnets[0].description"]').clear().type('test edit subnet');
        cy.contains('Save').click();


        cy.wait(700);


    })

    it('validation (User does not enter Name. The system displays an alert message “ Please input data”)', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('[name="subnets[0].name"]').clear();
        
        cy.contains('Save').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.wait(700);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?');
    
        cy.wait(700);


    })
})