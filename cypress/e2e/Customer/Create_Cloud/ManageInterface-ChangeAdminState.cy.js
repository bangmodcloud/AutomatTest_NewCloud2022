describe('Manage interface / Change Admin State Network Interface', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    context('List interface page : Toggle change to Down.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.ant-switch').click(); //toggle Admin State
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
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.ant-switch').click(); //toggle Admin State
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ตกลง')
                .click();
            cy.wait(1000);


        })
    })

    context('List interface page : Toggle change to Up.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.ant-switch').click(); //toggle Admin State
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
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.ant-switch').click(); //toggle Admin State
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ตกลง')
                .click();
            cy.wait(1000);


        })
    })

    context('Manage Interface page. : Toggle change to Down.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.underline-link').click();
            cy.get('.ant-switch').click(); //toggle Admin State
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
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.underline-link').click();
            cy.get('.ant-switch').click(); //toggle Admin State
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .wait(500)
                .contains('button', 'ตกลง')
                .click();
            cy.wait(1000);


        })
    })

    context('Manage Interface page. : Toggle change to Up.', () => {

        it('Usibirities (User click cancel. The system close modal.)', () => {

            cy.get('#cloud-collapse').click({ force: true });
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.underline-link').click();
            cy.get('.ant-switch').click(); //toggle Admin State
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
            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //Interface tab
            cy.get('.underline-link').click();
            cy.get('.ant-switch').click(); //toggle Admin State
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