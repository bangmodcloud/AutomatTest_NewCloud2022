describe('Manage Listener /change default SSL Certificate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Usalibities (User click Icon star and click No. The system close modal.', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .px-0').click(); //SSL tab 
        cy.get(':nth-child(2) > :nth-child(1) > .app_renderer_common_button__common-button-style > .btn > .fa-star').click(); // Icon Star.
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm change default SSL Certificate?')
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
        cy.get(':nth-child(2) > :nth-child(1) > .app_renderer_common_button__common-button-style > .btn > .fa-star').click(); // Icon Star.
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm change default SSL Certificate?')
            .contains('button', 'ใช่')
            .wait(200)
            .click();
        cy.wait(9000);


    })

    it('Action success (User go to Edit SSL Certification page and try change default. User change default SSL Certificate succeed.', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .px-0').click(); //SSL tab 
        cy.get('.justify-content-between > .row > .app_renderer_common_button__common-button-style > .btn').click(); // Edit SSL button
        cy.get(':nth-child(1) > :nth-child(5) > .text-center > .btn > .fa-star').click();
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Save button
      
        cy.wait(700);


    })
})