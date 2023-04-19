describe('Manage Distro /Change Status Active & Inactive', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Chang Status to Inactive ', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="643f581cdd23dd3a7851ef8b"] > :nth-child(2) > a').click();
            cy.wait(300);
            cy.contains('Inactive').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Inactive ?')
                .wait(300)
                .contains('button', 'ไม่')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="643f581cdd23dd3a7851ef8b"] > :nth-child(2) > a').click();
            cy.wait(300);
            cy.contains('Inactive').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Inactive ?')
                .wait(300)
                .contains('button', 'ใช่ ต้องการเปลี่ยนสถานะเป็น Inactive')
                .click();
            cy.wait(1000);

        })
    })


    context('Chang Status to Active', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="643f581cdd23dd3a7851ef8b"] > :nth-child(2) > a').click();
            cy.wait(300);
            cy.contains('Active').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Active ?')
                .wait(300)
                .contains('button', 'ไม่')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="643f581cdd23dd3a7851ef8b"] > :nth-child(2) > a').click();
            cy.wait(300);
            cy.contains('Active').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Active ?')
                .wait(300)
                .contains('button', 'ใช่ ต้องการเปลี่ยนสถานะเป็น Active')
                .click();
            cy.wait(1000);

        })
    })
})