describe('Manage Router / Set External Network Router.', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Usabilities (User searches for Floating IP entry by IP Address / The system displays the searched list.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(500);
        cy.get('.card-header > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('#search').type('43.239.251.28');
        cy.wait(200);
        cy.get('#search').clear().type('test Floating IP');

        cy.wait(700);


    })

    it('Usabilities (User click Add button. The system open new tab leads to Create Floating IP page.  )', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(500);
        cy.get('.card-header > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[href="/cloud-server/floating-ip/new"]').invoke('removeAttr','target').click();

        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(500);
        cy.get('.card-header > .ml-auto > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[type="submit"]').click();

        cy.wait(700);


    })
})