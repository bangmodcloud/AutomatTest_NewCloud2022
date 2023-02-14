describe(' Manage Network Interface / Create Allowed Address Pair', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Usibirities(User hover over Warning icon. The system display tooltip “Add an allowed address pair for this port. This will allow multiple MAC/IP address (range) pairs to pass through this port.” + button “Learn more“', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create button
        cy.get('#popover-tooltips').trigger('mouseover')
        cy.get('.popover-body').contains('Add an allowed address pair for this port. This will allow multiple MAC/IP address (range) pairs to pass through this port.');
        cy.get('.row > a').contains('Learn More')
        cy.wait(700);

    })

    it('Validation (User did not specify field IP Address or CIDR.The system. dispaly alert massege “กรุณาระบุข้อมูล”', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create button
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');
        cy.wait(700);

    })

    it('Validation (User entered an Invalid  format IP address or CIDR. The system. dispaly alert massege “Invalid according to the format of IP Address or CIDR”', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create button
        cy.get('#ipv4').type('10')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Invalid according to the format of IP Address or CIDR');
        cy.wait(700);

    })

    it('Validation (User entered an Invalid  format MAC address. The system. dispaly alert massege “Invalid according to the format of MAC address.”', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click(); //Create button
        cy.get('#ipv4').type('10.0.0.0/24')
        cy.get('#macAddress').type('fa');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Invalid according to the format of MAC Address');
        cy.wait(700);

    })

    it('Usibirities (User click Cancel button. The system cloes page.', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click(); //Create button
        cy.get('small').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);

    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(6) > :nth-child(1) > div > .underline-link').click(); //Link name
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click(); //tab Allowed Address Pair
        cy.wait(700);
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create button
        cy.get('#ipv4').type('10.0.0.0/24')
        cy.get('#macAddress').type('fa:16:3e:b2:8f:68');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

})