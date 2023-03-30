describe('Change Load Balancer Flavor status', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        context('Change to Unpublish', () => {
        it('Usabilities (Admin click Unpublished button and click No.  The system close modal.)', () => {
            cy.get('#lb-collapse').click();
            cy.get('#load-balancer-flavor').click();
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(500);
            cy.get('.d-flex > .btn').click(); //Unpublish button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Unpublish ?')
                .wait(500)
                .contains('button', 'ไม่')
                .click();

            cy.wait(700);

        })

        it('Usabilities (Admin click Unpublished button and click “ใช่ ฉันต้องการเปลี่ยนสถานะเป็น  Unpublish”.  Admin change status to Unpublish succeed.)', () => {
            cy.get('#lb-collapse').click();
            cy.get('#load-balancer-flavor').click();
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(500);
            cy.get('.d-flex > .btn').click(); //Unpublish button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Unpublish ?')
                .wait(500)
                .contains('button', 'ใช่ ต้องการเปลี่ยนสถานะเป็น Unpublish')
                .click();

            cy.wait(1500);

        })
    })

    context('Change to publish', () => {
        it('Usabilities (Admin click published button and click No.  The system close modal.)', () => {
            cy.get('#lb-collapse').click();
            cy.get('#load-balancer-flavor').click();
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(500);
            cy.get('.d-flex > .btn').click(); //Unpublish button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Publish ?')
                .wait(500)
                .contains('button', 'ไม่')
                .click();

            cy.wait(700);

        })

        it('Usabilities (Admin click published button and click “ใช่ ฉันต้องการเปลี่ยนสถานะเป็น publish”.  Admin change status to Unpublish succeed.)', () => {
            cy.get('#lb-collapse').click();
            cy.get('#load-balancer-flavor').click();
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(500);
            cy.get('.d-flex > .btn').click(); //Unpublish button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ต้องการปรับสถานะเป็น Publish ?')
                .wait(500)
                .contains('button', 'ใช่ ต้องการเปลี่ยนสถานะเป็น Publish')
                .click();

            cy.wait(1000);

        })
    })
})