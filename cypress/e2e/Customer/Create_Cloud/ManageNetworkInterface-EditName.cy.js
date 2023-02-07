describe('Manage Cloud / Power Management', () => {
    beforeEach(() => {
        cy.login()
    })

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(1) > .app_renderer_lib_style__card-style > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
                .click(); //Edit 
            cy.get('#formatName').clear().type('Test');
            cy.get('[type="submit"]').click();

            cy.wait(700);


        })

        it('Validation (User did not specify any information. The system display alert message “ Please input data”)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(1) > .app_renderer_lib_style__card-style > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
                .click(); //Edit 
            cy.get('#formatName').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณาระบุข้อมูล')

            cy.wait(700);


        })

        it('Validation (User click Cancel Button. The system display modal “ยืนยันออกจากการแก้ไข”)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(1) > .app_renderer_lib_style__card-style > .card > .card-header > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn')
                .click(); //Edit 
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