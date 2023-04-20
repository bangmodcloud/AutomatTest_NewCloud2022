describe('Overview Cloud / Change Status Suspend & Unsuspend', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    context('Chang Status to Suspend', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-overview').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(300);
            cy.contains('Suspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm suspend ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-overview').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(300);
            cy.contains('Suspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm suspend ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);


        })


    })

    context('Chang Status to Unsuspend', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-overview').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(300);
            cy.contains('Unsuspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm unsuspend ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-overview').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(300);
            cy.contains('Unsuspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm unsuspend ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);


        })


    })
})