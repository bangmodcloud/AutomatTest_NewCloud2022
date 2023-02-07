
describe('Manage Cloud / Power Management', () => {
    beforeEach(() => {
        cy.login()
    })

    context('Soft shut down', () => {

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get('.dropdown > .dropdown-toggle').click(); //Power Management
            cy.get('.app_renderer_common_button__common-button-style > .dropdown > .dropdown-menu > :nth-child(1)').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันคำสั่ง Soft Shutdown ?')
                .contains('button', 'ยืนยัน Soft Shutdown ?')
                .click();

            cy.wait(700);


        })

        it('Usibirities (User select soft shut down and click Cancel. The system closed modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
            cy.get('.dropdown > .dropdown-toggle').click(); //Power Management
            cy.get('.app_renderer_common_button__common-button-style > .dropdown > .dropdown-menu > :nth-child(1)').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันคำสั่ง Soft Shutdown ?')
                .contains('button', 'ยกเลิก')
                .click();

            cy.wait(700);

        })



    })

    context('Hard shut down', () => {

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
            cy.get('.dropdown > .dropdown-toggle').click(); //Power Management
            cy.get('.app_renderer_common_button__common-button-style > .dropdown > .dropdown-menu > :nth-child(3)').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันคำสั่ง Hard Shutdown ?')
                .contains('button', 'ยืนยัน Hard Shutdown ?')
                .click();

            cy.wait(700);


        })

        it('Usibirities (User select soft shut down and click Cancel. The system closed modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
            cy.get('.dropdown > .dropdown-toggle').click(); //Power Management
            cy.get('.app_renderer_common_button__common-button-style > .dropdown > .dropdown-menu > :nth-child(3)').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันคำสั่ง Soft Shutdown ?')
                .contains('button', 'ยกเลิก')
                .click();

            cy.wait(700);

        })



    })

    context('Reset', () => {

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
            cy.get('.dropdown > .dropdown-toggle').click(); //Power Management
            cy.get('.app_renderer_common_button__common-button-style > .dropdown > .dropdown-menu > :nth-child(5)').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันคำสั่ง Reset Server ?')
                .contains('button', 'ยืนยัน Reset Cloud Server ?')
                .click();

            cy.wait(700);


        })

        it('Usibirities (User select soft shut down and click Cancel. The system closed modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get('.dropdown > .dropdown-toggle').click(); //Power Management
            cy.get('.app_renderer_common_button__common-button-style > .dropdown > .dropdown-menu > :nth-child(5)').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันคำสั่ง Reset Server ?')
                .contains('button', 'ยกเลิก')
                .click();

            cy.wait(700);

        })



    })
})