describe('Delete SSL Certificate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    context('List SSL Certificate page', () => {
        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#ssl-certificate').click();
            cy.get(':nth-child(1) > :nth-child(6) > .row > .app_renderer_common_button__common-button-style > .btn').click(); //Delete icon
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete SSL Certificate?')
                .contains('button', 'No')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#ssl-certificate').click();
            cy.get(':nth-child(1) > :nth-child(6) > .row > .app_renderer_common_button__common-button-style > .btn').click(); //Delete icon
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete SSL Certificate?')
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })
    })

        context('Maange SSL Certificate page', () => {
            it('Usibirities (User click No. The system closed modal.)', () => {
    
                cy.get('#cloud-collapse').click({ force: true });
                cy.get('#load-balance-collapse').first().click({ force: true });
                cy.get('#ssl-certificate').click();
                cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
                cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
                cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete SSL Certificate?')
                    .contains('button', 'No')
                    .click();
                cy.wait(700);
    
            })
    
            it('Action success', () => {
    
                cy.get('#cloud-collapse').click({ force: true });
                cy.get('#load-balance-collapse').first().click({ force: true });
                cy.get('#ssl-certificate').click();
                cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
                cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
                cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete SSL Certificate?')
                    .contains('button', 'Yes')
                    .click();
                cy.wait(700);
    
            })
    })
})