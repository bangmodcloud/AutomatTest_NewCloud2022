describe(' Edit Monitor', () => {
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
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.get('.vars--1060101102 > .btn').click();
        cy.get('[name="name"]').clear().type('Test-EditMonitor');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Type
        cy.get(':nth-child(2) > .ant-select-item-option-content').click();
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
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.get('.vars--1060101102 > .btn').click();
        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usibirities (User select type “HTTP”.  The system display field HTTP Method (Optional) / Expected Codes (Optional) Prefill = 200 and URL Path (Optional) Prefill = / .)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.get('.vars--1060101102 > .btn').click();
        cy.get('[name="name"]').clear().type('Test-EditMonitor');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Type
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#expectedCodes').should('have.value','200');
        cy.get('#urlPath').should('have.value','/');
        cy.wait(700);


    })

    it('Usibirities (User click Cancel button and click Yes.  The system display modal “ยืนยันออกจากการแก้ไข” and close Edit.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.get('.vars--1060101102 > .btn').click(); //Edit
        cy.wait(700);
        cy.get('.vars--1060101102 > .btn').last().click(); //Cancel
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันออกจากการแก้ไข')
            .wait(500)
            .contains('button', 'ใช่')
            .click()
        cy.wait(700);


    })

})