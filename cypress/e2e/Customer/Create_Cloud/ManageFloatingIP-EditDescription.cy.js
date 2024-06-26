describe('Manage Floating IP / Edit Description', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
   
    })

    it('Usabilities (User go to Manage Floating Ip page. The system displayed Field labels as follows: \
        General Information card :IP Address, Description\
        Associated Instance card :Instance, Network Interface', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        
        // General Information card
        cy.contains('label', 'IP Address').should('have.text', 'IP Address')
        cy.contains('label', 'Description').should('have.text', 'Description')

        // Associated Instance card
        cy.contains('label', 'Instance').should('have.text', 'Instance')
        cy.contains('label', 'Network Interface').should('have.text', 'Network Interface')
        cy.wait(700);
   
    })


    it('Action success', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.contains('Edit').click();
        cy.get('[name="description"]').clear().type('test-Edit')
        cy.get('[type="submit"]').click();
        cy.wait(700);
    })

    it('Usabilities (User click  Cancel button. The system close Edit.', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.contains('Edit').click();
        cy.wait(500);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);
   
    })

    it('validation (User click another action for which the edit was not saved. The system display modal “Are you sure to leave information updating?”', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.contains('Edit').click();
        cy.wait(500);
        cy.contains('Delete').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);
   
    })
})