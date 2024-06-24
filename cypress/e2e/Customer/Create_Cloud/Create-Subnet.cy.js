describe('Create Subnet', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usibirities(User go to Manage Private Network page. The system displayed Field labels as follows:\
        Private Network Information card : Name, Description (optional), IPv4 CIDR, subnet', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.contains('Create Subnet').click(); //Create button
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
        cy.contains('Create Subnet').click(); //Create button
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('10.0.0.1/8');
        cy.get('[type="submit"]').click();


        cy.wait(700);


    })

    it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.contains('Create Subnet').click(); //Create button
        cy.get('.ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');


        cy.wait(700);


    })

    it('validation (User did not select field select. The system displays alert message “ Please select data”', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.contains('Create Subnet').click(); //Create button
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('10.0.0.1/8');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');


        cy.wait(700);


    })

    it('Validation (User specified an invalid IPv4 CIDR. The system displays alert message “Please input valid CIDR Notation”', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.contains('Create Subnet').click(); //Create button
        cy.get('.ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('10');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input valid CIDR Notation');


        cy.wait(700);


    })


    it('Validation (The specified IPv4 CIDR subnet is not in the range. The system displays alert message “Please input valid network address in range”', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.contains('Create Subnet').click(); //Create button
        cy.get('.ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('192.168.0.0/16');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input valid network address in range');


        cy.wait(700);


    })

})