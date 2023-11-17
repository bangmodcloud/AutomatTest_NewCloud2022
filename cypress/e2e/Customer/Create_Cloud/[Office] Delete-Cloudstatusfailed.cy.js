
describe('Delete cloud failed status', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

        cy.wait(2000);

    })

    context('Overviw Cloud page', () => {

        it('Usabilities (Super Admin click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('[href="/cloud/instance"]').click();
            cy.get(':nth-child(5) > .px-0').click();
            cy.wait(700);
            cy.get(':nth-child(1) > :nth-child(9) > .row > .d-flex > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Cloud?')
                .wait(300)
                .contains('button', 'No')
                .click();

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('[href="/cloud/instance"]').click();
            cy.get(':nth-child(5) > .px-0').click();
            cy.wait(700);
            cy.get(':nth-child(1) > :nth-child(9) > .row > .d-flex > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Cloud?')
                .wait(300)
                .contains('button', 'Yes')
                .click();

            cy.wait(700);

        })
    })

    context('Manage User / Tab cloud', () => {

        it('Usabilities (Super Admin click No. The system closed modal.)', () => {

            cy.get('#search').type('PlaWaraporn02')
            cy.get('.ant-table-row > :nth-child(2) > a').click();
            cy.get(':nth-child(4) > .px-0').click();
            cy.wait(700);
            cy.get(':nth-child(2) > :nth-child(9) > .row > .d-flex > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Cloud?')
                .wait(300)
                .contains('button', 'No')
                .click();

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#search').type('PlaWaraporn02')
            cy.get('.ant-table-row > :nth-child(2) > a').click();
            cy.get(':nth-child(4) > .px-0').click();
            cy.wait(700);
            cy.get(':nth-child(2) > :nth-child(9) > .row > .d-flex > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Cloud?')
                .wait(300)
                .contains('button', 'Yes')
                .click();

            cy.wait(700);
        })
    })
})

describe('Admin login account admin role Admin Read Only', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.wait(1000)

        cy.intercept({
            url: 'https://office-test.bangmod.cloud/auth/login',
            method: 'GET',
        }).as("Admin")

        cy.visit('https://office-test.bangmod.cloud/auth/login')

    })

    it('Usabilities (Admin Read Only go to Overview Cloud Instance page and click Tap Failed. The system don’t display Delete button.)', () => {

        cy.get('#username').type('waratest6@gmail.com');
        cy.get('#password').type('Qatest01-');
        cy.get('.btn').click();

        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/instance"]').click();
        cy.get(':nth-child(5) > .px-0').click();
        cy.wait(700);


    })
})



