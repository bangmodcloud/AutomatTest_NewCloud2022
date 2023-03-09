describe('Manage Listener /Remove SSL Certificate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(4000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Usalibities (User click Icon circle-minus and click No. The system close modal.', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .px-0').click(); //SSL tab 
        cy.get(':nth-child(4) > .row > .app_renderer_common_button__common-button-style > .btn').click(); //Icon circle-minus
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Remove?')
            .contains('button', 'ไม่')
            .wait(200)
            .click();
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .px-0').click(); //SSL tab 
        cy.get(':nth-child(4) > .row > .app_renderer_common_button__common-button-style > .btn').click(); //Icon circle-minus
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Remove?')
            .contains('button', 'ใช่')
            .wait(200)
            .click();
        cy.wait(700);


    })
})