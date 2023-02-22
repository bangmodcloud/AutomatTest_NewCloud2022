describe('Manage Load Balancer / Change the status Admin State', () => {
    beforeEach(() => {
        cy.login()
    })

    context('Toggle change to Down.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(9) > .app_renderer_lib_style__toggle > .ant-switch').click(); // Toggle admin
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ยกเลิก')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(9) > .app_renderer_lib_style__toggle > .ant-switch').click(); // Toggle admin
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ตกลง')
                .click();
            cy.wait(1000);


        })
    })

    context(' Toggle change to Up.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(9) > .app_renderer_lib_style__toggle > .ant-switch').click(); // Toggle admin
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ยกเลิก')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(9) > .app_renderer_lib_style__toggle > .ant-switch').click(); // Toggle admin
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ตกลง')
                .click();
            cy.wait(1000);


        })
    })

    context('Manage page : Toggle change to Down.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
            cy.get('.ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ยกเลิก')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
            cy.get('.ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ตกลง')
                .click();
            cy.wait(1000);


        })
    })

    context('Manage page : Toggle change to Up.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
            cy.get('.ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ยกเลิก')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#load-balance-collapse').first().click({ force: true });
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
            cy.get('.ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ตกลง')
                .click();
            cy.wait(1000);


        })
    })
})