describe(' Manage Network Interface / Create Allowed Address Pair', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usibirities(User go to Manage Subnet page. The system displayed Field labels as follows:\
        IP Address or CIDR,MAC Address (Optional)', () => {
        
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.contains('Create Allowed Address Pair').invoke('removeAttr', 'target').click(); //Create button
        cy.contains('label', 'IP Address or CIDR').should('have.text', 'IP Address or CIDR')
        cy.contains('label', 'MAC Address (Optional)').should('have.text', 'MAC Address (Optional)')
        cy.wait(700);

    })

    it('Usibirities(User hover over Warning icon. The system display tooltip “Add an allowed address pair for this port. This will allow multiple MAC/IP address (range) pairs to pass through this port.” + button “Learn more“', () => {
        
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.contains('Create Allowed Address Pair').invoke('removeAttr', 'target').click(); //Create button
        cy.get('#popover-tooltips').trigger('mouseover')
        cy.get('.ant-tooltip-inner').contains('Add an allowed address pair for this port. This will allow multiple MAC/IP address (range) pairs to pass through this port.');
        cy.wait(700);

    })

    it('Validation (User did not specify field IP Address or CIDR.The system. dispaly alert massege “Please input data”', () => {
       
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.contains('Create Allowed Address Pair').invoke('removeAttr', 'target').click(); //Create button
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Validation (User entered an Invalid  format IP address or CIDR. The system. dispaly alert massege “Invalid according to the format of IP Address or CIDR”', () => {
        
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.contains('Create Allowed Address Pair').invoke('removeAttr', 'target').click(); //Create button
        cy.get('#ipv4').type('10')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Invalid according to the format of IP Address or CIDR');
        cy.wait(700);

    })

    it('Validation (User entered an Invalid  format MAC address. The system. dispaly alert massege “Invalid according to the format of MAC address.”', () => {
        
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.contains('Create Allowed Address Pair').invoke('removeAttr', 'target').click(); //Create button
        cy.get('#ipv4').type('10.0.0.0/24')
        cy.get('#macAddress').type('fa');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Invalid according to the format of MAC Address');
        cy.wait(700);

    })

    it('Usibirities (User click Cancel button. The system cloes page.', () => {
     
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.contains('Create Allowed Address Pair').invoke('removeAttr', 'target').click(); //Create button
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);

    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(1000);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.contains('Create Allowed Address Pair').invoke('removeAttr', 'target').click(); //Create button
        cy.get('#ipv4').type('10.0.0.0/24')
        cy.get('#macAddress').type('fa:16:3e:b2:8f:68');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

})