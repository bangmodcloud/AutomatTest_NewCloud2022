describe('Manage Router / Change Status Suspend & Unsuspend', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    context('Chang Status to Suspend', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(3) > :nth-child(3) > a').last().click();
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

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(3) > :nth-child(3) > a').last().click();
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

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(3) > :nth-child(3) > a').last().click();
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

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(3) > :nth-child(3) > a').last().click();
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