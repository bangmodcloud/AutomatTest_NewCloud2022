describe('Manage Router / Edit Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
      
    })

    it('Usabirities (User go to Manage Router page. The system displayed Field labels as follows: >> "view Test Plan")', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });

        // General Information card
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')

        // External Network card
        cy.contains('label', 'Floating IP').should('have.text', 'Floating IP')

        // Status card
        cy.contains('label', 'Status').should('have.text', 'Status')
        cy.contains('label', 'Admin State').should('have.text', 'Admin State')

        // Setting SNAT
        cy.contains('.card','Setting SNAT').contains('div','Source Network Address Translation (source-nat or SNAT) allows traffic from a private network to go out to the internet. Virtual machines launched on a private network can get to the internet by going through a gateway capable of performing SNAT.')
        cy.wait(700);


    })


    it('Action success', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('test-Edit-Router');
        cy.get('[name="description"]').clear().type('Automate test Edit router');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        cy.get('[name="description"]').clear();
        cy.get('.text-danger').contains('Please input data');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User click Cancel button and click Yes.   The system display modal “Are you sure to leave information updating?” and close Edit.)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.contains('Edit').click();
        cy.contains('Cancel').click(); //Create button
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .contains('button', 'Yes')
            .click();
        cy.wait(700);


    })

    it('Validation (User click another action for which the edit was not saved.  The system display modal “Are you sure to leave information updating?“)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.contains('Edit').click();
        cy.contains('Delete').click(); 
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .contains('button', 'Yes')
        cy.wait(700);


    })
})