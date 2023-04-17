describe('Delete Voucher code', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('List Voucher code page', () => {
        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#voucher-code').click();
            cy.get(':nth-child(1) > :nth-child(10) > .d-flex > .btn').scrollIntoView().click({force: true}); //Delete icon
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Voucher Code?')
                .contains('button', 'No')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#voucher-code').click();
            cy.get(':nth-child(1) > :nth-child(10) > .d-flex > .btn').scrollIntoView().click({force: true}); //Delete icon
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Voucher Code?')
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })
    })

        context('Maange SSL Certificate page', () => {

            it('Usibirities (User click No. The system closed modal.)', () => {
    
                cy.get('#voucher-code').click();
                cy.get(':nth-child(4) > :nth-child(1) > .underline-link').first().click();
                cy.contains('Delete').click();
                cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Voucher Code?')
                    .contains('button', 'No')
                    .click();
                cy.wait(700);
    
            })
    
            it('Action success', () => {
    
                cy.get('#voucher-code').click();
                cy.get(':nth-child(4) > :nth-child(1) > .underline-link').first().click();
                cy.contains('Delete').click();
                cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Voucher Code?')
                    .contains('button', 'Yes')
                    .click();
                cy.wait(700);
    
    
            })
    })
})