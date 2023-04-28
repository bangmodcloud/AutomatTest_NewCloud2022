describe('Volume Type / Set Default Volume', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('List Volume Type', () => {

        it('Validation (Admin click Button Icon Star on the item for which you want to change the default and click Cancel. \
        The system display modal “Confirm Change Default Volume?” and closs modal', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get(':nth-child(1) > :nth-child(1) > .d-flex > .btn > .fa-star').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change default volume?')
                .wait(300)
                .contains('button', 'Cancel')
                .click();
            cy.wait(700);

        })

        it('Validation (Admin click Yes. \ Admin Change Default Volume succeed.', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get(':nth-child(1) > :nth-child(1) > .d-flex > .btn > .fa-star').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change default volume?')
                .wait(300)
                .contains('button', 'Confirm change default volume')
                .click();
            cy.wait(700);

        })
    })

    context('Manage Volume Type', () => {

        it('Validation (Admin click Button Icon Star on the item for which you want to change the default and click Cancel. \
        The system display modal “Confirm Change Default Volume?” and closs modal', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(3) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Set Default Volume').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change default volume?')
                .wait(300)
                .contains('button', 'Cancel')
                .click();
            cy.wait(700);

        })

        it('Validation (Admin click Yes. \ Admin Change Default Volume succeed.', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(3) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Set Default Volume').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change default volume?')
                .wait(300)
                .contains('button', 'Confirm change default volume')
                .click();
            cy.wait(700);

        })
    })
})