describe('Edit Listener', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(4000)
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.app_renderer_cloud-server_load-balancer_listener_detail_components_listener-information__listener-info-styles > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
            .click({ force: true }); //Edit Button

        cy.get('[name="name"]').clear().type('Test-Edit-Listener');
        cy.get('[name="description"]').clear().type('Wara Test Edit Listener');
        cy.get('[name="clientDataTimeout"]').clear().type('20000');
        cy.get('[name="tcpInspectTimeout"]').clear().type('1');
        cy.get('[name="memberConnectTimeout"]').clear().type('20000');
        cy.get('[name="memberDataTimeout"]').clear().type('20000');
        cy.get('[name="connectionLimit"]').clear().type('1');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.app_renderer_cloud-server_load-balancer_listener_detail_components_listener-information__listener-info-styles > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
            .click({ force: true }); //Edit Button

        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usibirities (The system is open for editing. Field Protocol and Port cannot be modified.', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.app_renderer_cloud-server_load-balancer_listener_detail_components_listener-information__listener-info-styles > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
            .click({ force: true }); //Edit Button

        cy.get('#rc_select_0').should('be.disabled');
        cy.get('[name="port"]').should('be.disabled');
        cy.wait(700);


    })

    it('Usiribities (User click Cancel button and click Yes.  The system display modal “ยืนยันออกจากการแก้ไข” and close Edit.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get('.app_renderer_cloud-server_load-balancer_listener_detail_components_listener-information__listener-info-styles > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
            .click({ force: true }); //Edit Button

        cy.get('.ml-auto > .vars--1060101102 > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);


    })
})