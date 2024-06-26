describe(' Manage network interface / Edit.', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usibirities(User go to Manage Subnet page. The system displayed Field labels as follows:\
        General InformationName card : ID,MAC Address,Status,Admin State,Name,Port Security\
        Network Information card : IP Address,Subnet\
        Security Groups card : Security Groups\
        Attached Device card : Service,Instance', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();

        // General InformationName card
        cy.contains('label', 'ID').should('have.text', 'ID')
        cy.contains('label', 'MAC Address').should('have.text', 'MAC Address')
        cy.contains('label', 'Status').should('have.text', 'Status')
        cy.contains('label', 'Admin State').should('have.text', 'Admin State')
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Port Security').should('have.text', 'Port Security')

        // Network Information card
        cy.contains('label', 'IP Address').should('have.text', 'IP Address')
        cy.contains('label', 'Subnet').should('have.text', 'Subnet')

        // Security Groups card
        cy.contains('label', 'Security Groups').should('have.text', 'Security Groups')

        // Attached Device card
        cy.contains('label', 'Service').should('have.text', 'Service')
        cy.contains('label', 'Instance').should('have.text', 'Instance')

        cy.wait(700);


    })

    it('Action success', () => {
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.wait(700);
        cy.get('[name="name"]').clear().type('test-net01');
        cy.get('[type="submit"]').click();

        cy.wait(700);


    })

    it('validation (User does not enter Name. The system displays an alert message “ Please input data”)', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        
        cy.contains('Save').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
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