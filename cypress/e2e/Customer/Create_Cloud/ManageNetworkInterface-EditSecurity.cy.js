describe(' Manage Network Interface / Edit Security Group', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
        cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
        cy.get(':nth-child(2) > .app_renderer_lib_style__card-style > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
            .click(); //Edit Security Group

        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //บันทึก

        cy.wait(700);


    })

    it('Usibirities (Alert Warning “You can assign a maximum of 5 security groups to a network interface.“)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
        cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
        cy.get(':nth-child(2) > .app_renderer_lib_style__card-style > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
            .click(); //Edit Security Group

        cy.get('.callout').contains('คุณสามารถกำหนด Security Group ให้กับ Network Interface ได้สูงสุดได้ 5 รายการ');

        cy.wait(700);


    })

    it('Usibirities (User searches for the Security Group entry by Security Group Name and Description. The system displays the searched list.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
        cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
        cy.get(':nth-child(2) > .app_renderer_lib_style__card-style > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
            .click(); //Edit Security Group

        cy.get('#search').type('test-1');
        cy.get('#search').clear().type('test Security Group');

        cy.wait(700);

        it('Usibirities (User click Add button. The system open new tab leads to Create Security Group page.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(2) > .app_renderer_lib_style__card-style > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
                .click(); //Edit Security Group

            cy.get('[href="/cloud-server/security-group/new"]').invoke('removeAttr', 'target').click();;

            cy.wait(700);


        })

        it('Usibirities (User click Cancel button. The system close page.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(2) > .app_renderer_lib_style__card-style > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
                .click(); //Edit Security Group

            cy.get('small').click();
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันออกจากการแก้ไข')
                .contains('button', 'ใช่')
                .click();


            cy.wait(700);


        })
    })
})