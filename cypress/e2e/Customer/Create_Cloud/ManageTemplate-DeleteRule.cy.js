describe('Manage Template / Delete Security Rule', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it(' Usabilities(Admin go to Add Inbound page. The system set Protocol and disable field Port have volue = 1-65535.) )', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.get(':nth-child(1) > :nth-child(4) > .fa-trash-alt').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Delete Security Rule?')
            .wait(300)
            .contains('button', 'No')
            .click();

        cy.wait(700);

    })

    it(' Usabilities(Admin go to Add Inbound page. The system set Protocol and disable field Port have volue = 1-65535.) )', () => {

        cy.get('#network-collapse').click();
        cy.get('[href="/cloud/security-group"]').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.get(':nth-child(1) > :nth-child(4) > .fa-trash-alt').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Delete Security Rule?')
            .wait(300)
            .contains('button', 'Yes')
            .click();

        cy.wait(700);

    })
})