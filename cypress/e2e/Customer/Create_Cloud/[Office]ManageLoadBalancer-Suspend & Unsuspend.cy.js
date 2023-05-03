describe('Manage Load Balancer / Change Status Suspend & Unsuspend', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    context('Chang Status to Suspend', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
            cy.wait(300);
            cy.contains('Suspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Suspend?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
            cy.wait(300);
            cy.contains('Suspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Suspend?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);


        })


    })

    context('Chang Status to Unsuspend', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
            cy.wait(300);
            cy.contains('Unsuspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Unsuspend?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
            cy.wait(300);
            cy.contains('Unsuspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Unsuspend?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);


        })


    })
})