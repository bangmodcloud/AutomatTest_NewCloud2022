describe('Allocate Floating IP', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
    
    })

    it('Usibirities (User go to Allocate Floating IP page. The system displayed Field labels as follows: ">> Test Plan"', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        // Allocate Floating IP card
        cy.contains('label', 'Number of IPs required').should('have.text', 'Number of IPs required')
        cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')

        cy.get('.form-side').scrollTo(0, 500)

        // Floating IP User Agreement
        cy.contains('.card', 'Floating IP User Agreement')
            .contains('li', 'Expenses for using the Floating IP service are subject to the following terms and conditions:')
            .contains('li', 'If Floating IP is allocated but not yet used (Association) The price will be charged higher than the Floating IP that is deployed.')
        cy.contains('.card', 'Floating IP User Agreement').contains('li', 'The system will automatically update credit and balance every end of the month. The balance will be deducted from credit first. . In case the number of Credits is insufficient, the system will automatically use the Balance.')
        cy.contains('.card', 'Floating IP User Agreement').contains('li', 'Floating IP forced by the system stopped working. will be charged as usual');

        cy.get('[for="terms"').should('have.text', 'I have read and understood this Agreement.')
            
        
        cy.wait(700);
    })


    it('Action success', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.get('[type="text"]').type('Test Allocate Floating IP');//Description (Optional)
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.wait(3000);
    })

    it(' validation (Allocate Floating IP Exceeded Limit. The system display alert “ไUnable to allocate floating IP again because you have reached the allocate floating IP limit.”)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.get('[placeholder="Enter Number of IPs"]').type('4')
        cy.get('[placeholder="Enter Description"]').type('Test Allocate Floating IP');//Description (Optional)
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('Unable to allocate floating IP again because you have reached the allocate floating IP limit.');
        cy.wait(700);
    })

    it(' validation (User click Create without clicking checkbox. The system display alert "Please accept the terms and conditions of service.”)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('Please accept the terms and conditions of service.');
        cy.wait(700);
    })

    it(' validation (User does not have enough credits. The system display alert “To create you must have available credit—enough for 1 hour of use to be able to build. Please top up. You must top up more than 775.00 baht.“)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('To create you must have available credit—enough for 1 hour of use to be able to build. Please top up. You must top up more than 775.00 baht. ');
        cy.wait(700);
    })

    it(' validation ( User click Top Up button. The system open new tab leads to Top Up page.)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.wait(300);
        cy.contains('Top Up').invoke('removeAttr','target').first().click({force: true});
        cy.wait(700);
    })
})