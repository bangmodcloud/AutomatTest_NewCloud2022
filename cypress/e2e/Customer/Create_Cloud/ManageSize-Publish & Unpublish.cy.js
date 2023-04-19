describe('Manage Size / Change Status Publish & Unpublish', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Chang Status to Unpublish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.get('.ant-table-row > :nth-child(1)').click();
            cy.wait(300);
            cy.contains('Unpublish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Unpublish ?')
                .wait(300)
                .contains('button', 'ไม่')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.get('.ant-table-row > :nth-child(1)').click();
            cy.wait(300);
            cy.contains('Unpublish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Unpublish ?')
                .wait(300)
                .contains('button', 'ใช่ ต้องการเปลี่ยนสถานะเป็น Unpublish')
                .click();
            cy.wait(1000);

        })
    })


    context('Chang Status to Publish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.get('.ant-table-row > :nth-child(1)').click();
            cy.wait(300);
            cy.contains('Publish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Publish ?')
                .wait(300)
                .contains('button', 'ไม่')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
            cy.get('.ant-table-row > :nth-child(1)').click();
            cy.wait(300);
            cy.contains('Publish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Publish ?')
                .wait(300)
                .contains('button', 'ใช่ ต้องการเปลี่ยนสถานะเป็น Publish')
                .click();
            cy.wait(1000);

        })
    })
})