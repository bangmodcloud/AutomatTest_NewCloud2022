describe('Manage your Volume / Change Status Disable & Enable', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();

    })

    context('List Volume', () => {

        it('Usibirities (User click toggle to Disable and click cancel. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/volume"]').first().click({ force: true });
            cy.wait(20000)
            cy.get(':nth-child(1) > :nth-child(8) > .app_renderer_lib_style__toggle > .ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Enable System Automatic Backup ?')
                .wait(500)
                .contains('button', 'Cancel')
                .click()

            cy.wait(700);

        })

        it('Usibirities (User click Confirm disable. User Change to disable succeed.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/volume"]').first().click({ force: true });
            cy.wait(20000)
            cy.get(':nth-child(1) > :nth-child(8) > .app_renderer_lib_style__toggle > .ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Enable System Automatic Backup ?')
                .wait(500)
                .contains('button', 'Confirm enable')
                .click()

            cy.wait(700);

        })

        it('Usibirities (User click toggle to Enable and click cancel. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/volume"]').first().click({ force: true });
            cy.wait(20000)
            cy.get(':nth-child(1) > :nth-child(8) > .app_renderer_lib_style__toggle > .ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disable System Automatic Backup ?')
                .wait(500)
                .contains('button', 'Cancel')
                .click()

            cy.wait(700);

        })

        it('Usibirities (User click Confirm disable. User Change to disable succeed.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/volume"]').first().click({ force: true });
            cy.wait(20000)
            cy.get(':nth-child(1) > :nth-child(8) > .app_renderer_lib_style__toggle > .ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disable System Automatic Backup ?')
                .wait(500)
                .contains('button', 'Confirm disable')
                .click()

            cy.wait(700);

        })
    })

    context('Manage Volume', () => {

        it('Usibirities (User click toggle to Disable and click cancel. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/volume"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
            cy.wait(20000)
            cy.get('.ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Enable System Automatic Backup ?')
                .wait(500)
                .contains('button', 'Cancel')
                .click()

            cy.wait(700);

        })

        it('Usibirities (User click Confirm disable. User Change to disable succeed.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/volume"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
            cy.wait(20000)
            cy.get('.ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Enable System Automatic Backup ?')
                .wait(500)
                .contains('button', 'Confirm enable')
                .click()

            cy.wait(700);

        })

        it('Usibirities (User click toggle to Enable and click cancel. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/volume"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
            cy.wait(20000)
            cy.get('.ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disable System Automatic Backup ?')
                .wait(500)
                .contains('button', 'Cancel')
                .click()

            cy.wait(700);

        })

        it('Usibirities (User click Confirm disable. User Change to disable succeed.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/volume"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
            cy.wait(20000)
            cy.get('.ant-switch').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disable System Automatic Backup ?')
                .wait(500)
                .contains('button', 'Confirm disable')
                .click()

            cy.wait(700);

        })
    })
})