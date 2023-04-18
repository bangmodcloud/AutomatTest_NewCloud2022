describe('Manage Distro /Change Status Publish & Unpublish', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Chang Status to Unpublish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
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
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
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
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
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
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
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