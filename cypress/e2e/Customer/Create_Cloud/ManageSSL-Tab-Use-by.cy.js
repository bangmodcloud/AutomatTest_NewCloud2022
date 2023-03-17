describe('Manage SSL Certificate / Tab Use by', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Usabilities (User searches for SSL Certificates entry Load Balance Name / Listener. The system displays the searched list.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Tab Use by
        cy.get('#search').type('test-1');
        cy.wait(300);
        cy.get('#search').clear().type('test-Listener');
        cy.wait(700);


    })

    it('Usabilities (User click hyper link Load Balance Name. The system leads to Manage Load Balance page.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Tab Use by
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').invoke('removeAttr','target').click(); //Load Balance Name
        cy.wait(700);


    })

    it('Usabilities (User click hyper Listener. The system leads to Manage Listener page.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Tab Use by
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr','target').click(); //Listener
        cy.wait(700);


    })
})