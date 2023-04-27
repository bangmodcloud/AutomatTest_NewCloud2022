describe('Volume Type /Change Status Active & Inactive', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Chang Status to Inactive ', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Inactive').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status inactive ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Inactive').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status inactive ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);

        })
    })


    context('Chang Status to Active', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Active').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status active ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#volume-collapse').click();
            cy.get('#volume-type').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3) > a').click();
            cy.wait(300);
            cy.contains('Active').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status active ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);

        })
    })
})