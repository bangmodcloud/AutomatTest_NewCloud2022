describe(' Edit Pool', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(4000)
    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="name"]').clear().type('Test-EditPool');
        cy.get('[name="description"]').clear().type('Wara Test Edit Pool');
        cy.get(':nth-child(1) > .px-0 > .ant-select > .ant-select-selector').click(); //Algorithm
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');
        cy.wait(700);


    })

    it('Validation (User click Cancel button and click Yes.  The system display modal “ยืนยันออกจากการแก้ไข” and close Edit.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.vars--1060101102 > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);


    })

    it('Validation (User click another action for which the edit was not saved.  The system dispaly modal “Leave Site ? “)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('.vars--1060101102 > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
        cy.wait(700);


    })
})