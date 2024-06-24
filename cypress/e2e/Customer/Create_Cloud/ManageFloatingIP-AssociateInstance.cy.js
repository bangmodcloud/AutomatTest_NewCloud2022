describe('Manage Floating IP / Associate Instance', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)

    })

    it('Usabilities (User go to Manage Floating Ip page. The system displayed Field labels as follows: Select Network Interface', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
        cy.contains('Associate Instance').click();
        cy.contains('label', 'Select Network Interface').should('have.text', 'Select Network Interface')

        cy.wait(700);
   
    })

    it('Action success', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
        cy.contains('Associate Instance').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Associate Instance');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.wait(5000);
    })

    it(' validation (User did not select field select. The system alert message “ Please select data“)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
        cy.contains('Associate Instance').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Associate Instance');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);
    })

    it(' Usabilities (User click Canncel. The system close modal.)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
        cy.contains('Associate Instance').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Associate Instance')
            .contains('button', 'Cancel')
            .wait(200)
            .click();
        cy.wait(700);
    })
})