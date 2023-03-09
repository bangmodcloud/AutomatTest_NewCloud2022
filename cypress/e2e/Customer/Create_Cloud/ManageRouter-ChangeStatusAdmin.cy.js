describe('Manage Router / Change Status Admin Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    context('List Router page', () => {

        it('Usabilities (User click cancel. The system close modal)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(5) > .app_renderer_lib_style__toggle > .ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ยกเลิก')
                .click();
            cy.wait(700);

        })

        it('Usabilities (User click cancel. The system close modal)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(5) > .app_renderer_lib_style__toggle > .ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ตกลง')
                .click();
            cy.wait(700);

        })
    })

    context('Manage Router page', () => {

        it('Usabilities (User click cancel. The system close modal)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
            cy.wait(500);
            cy.get('.mt-4 > .content-14-reg > .ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ยกเลิก')
                .click();
            cy.wait(700);

        })

        it('Usabilities (User click cancel. The system close modal)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
            cy.wait(500);
            cy.get('.mt-4 > .content-14-reg > .ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ตกลง')
                .click();
            cy.wait(700);

        })
    })
})