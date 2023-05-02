describe('Delete Security Group Template', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })
    context('List Security Group Template page', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#network-collapse').click();
            cy.get('[href="/cloud/security-group"]').click();
            cy.get(':nth-child(1) > :nth-child(6) > .justify-content-center > .d-flex > .btn').click()
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Security Group Template?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);

        })

        it('Usibirities (Admin click Yes. Admin Delete Backup Profile  succeed.)', () => {

            cy.get('#network-collapse').click();
            cy.get('[href="/cloud/security-group"]').click();
            cy.get(':nth-child(1) > :nth-child(6) > .justify-content-center > .d-flex > .btn').click()
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Security Group Template?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })
    })

    context('Template page', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#network-collapse').click();
            cy.get('[href="/cloud/security-group"]').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.contains('Delete').click()
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Security Group Template?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);

        })

        it('Usibirities (Admin click Yes. Admin Delete Backup Profile  succeed.)', () => {

            cy.get('#network-collapse').click();
            cy.get('[href="/cloud/security-group"]').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.contains('Delete').click()
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Security Group Template?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })
    })
})
