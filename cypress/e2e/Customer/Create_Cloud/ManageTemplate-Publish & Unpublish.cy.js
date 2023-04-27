describe('Manage Template  /Change Status Publish & Unpublish', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Chang Status to Unpublish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#network-collapse').click();
            cy.get('[href="/cloud/security-group"]').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.wait(300);
            cy.contains('Unpublish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status unpublished ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#network-collapse').click();
            cy.get('[href="/cloud/security-group"]').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.wait(300);
            cy.contains('Unpublish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status unpublished ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);

        })
    })


    context('Chang Status to Publish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#network-collapse').click();
            cy.get('[href="/cloud/security-group"]').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.wait(300);
            cy.contains('Publish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status publish?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#network-collapse').click();
            cy.get('[href="/cloud/security-group"]').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.wait(300);
            cy.contains('Publish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status publish?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);

        })
    })
})