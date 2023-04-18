describe('Manage Issues Type / Change Status Publish & Unpublish', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Chang Status to Unpublish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#ticket').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('Unpublish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status unpublish ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#ticket').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('Unpublish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status unpublish ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })
    })


    context('Chang Status to Publish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#ticket').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('Publish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status publish ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#ticket').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('Publish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status publish ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })
    })
})