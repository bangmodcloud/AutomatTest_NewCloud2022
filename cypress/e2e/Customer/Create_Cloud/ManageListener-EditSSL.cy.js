describe('Manage  Listener / Edit SSL Certificate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(4000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .px-0').click(); //SSL tab 
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').click(); // Edit SSL button
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Save button
        cy.wait(8000);


    })

    it('Usabilities (User searches for SSL Certificates entry by SSL Certificates Name / Common Name (CN). The system displays the searched list.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .px-0').click(); //SSL tab 
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').first().click(); // Edit SSL button
        cy.get('#search').type('test-Cert');
        cy.get('.ant-table-row > :nth-child(2)').should('be.visible');
        cy.wait(200);
        cy.get('#search').clear().type('Somlove');
        cy.get('.ant-table-row > :nth-child(2)').should('be.visible');
        cy.wait(700);


    })

    it('Usabilities (User click Add button. The system open new tab leads to Create SSL Certificates page.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .px-0').click(); //SSL tab 
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').first().click(); // Edit SSL button
        cy.get('[href="/cloud-server/ssl/new"]').invoke('removeAttr','target').click();
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button and click Leave.  The system display modal “Leave sit ?” and close tab)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.ml-3 > .px-0').click(); //SSL tab 
        cy.get('.row > .app_renderer_common_button__common-button-style > .btn').first().click(); // Edit SSL button
        cy.wait(200);
        cy.get('small').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .contains('button', 'ใช่')
            .wait(200)
            .click();
        cy.wait(700);


    })
})