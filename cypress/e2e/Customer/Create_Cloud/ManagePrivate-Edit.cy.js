describe('Manage Private Network Edit', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usibirities(User go to Manage Private Network page. The system displayed Field labels as follows:\
    Private Network Information card : Name, Description (optional), IPv4 CIDR, subnet', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#private-network').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')
        cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
        cy.contains('label', 'Subnet').should('have.text', 'Subnet')


        cy.wait(700);


    })

    it('Usibirities(User click edit button. The system displayed Field labels as follows:\
        Private Network Information card : Name, Description (optional), IPv4 CIDR, subnet', () => {
    
            cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
            cy.get('#private-network').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description')
            cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
            cy.contains('label', 'Subnet').should('have.text', 'Subnet')
    
    
            cy.wait(700);
    
    
        })

    it('Action success', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#private-network').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click(); //Create button
        cy.get('[name="name"]').clear().type('test-Private02');
        cy.get('[name="description"]').type('Test Edit Private');
        
        cy.get('[type="submit"]').click();


        cy.wait(700);


    })

    it('validation (User does not enter Name. The system displays an alert message “ Please input data”)', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#private-network').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click(); //Create button
        cy.get('[name="name"]').clear();
        
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('#volume').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.wait(700);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?');
    
        cy.wait(700);


    })
}
)