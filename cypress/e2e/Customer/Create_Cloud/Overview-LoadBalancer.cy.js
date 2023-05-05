describe('Overview Load Balance', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    it('Usibirities (User try select filter Timestamp / Actor ID / Service Type / Target / Action . The system displays a list of each selected Filter.)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer').click();
        cy.wait(1000);
        cy.get('[id="Operating Status"]').click();
        cy.get('[id="menu-Operating Status"] > :nth-child(4)').click();
        cy.get('[id="menu-Operating Status"] > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('[id="Provisioning Status"]').click();
        cy.get('[id="menu-Provisioning Status"] > :nth-child(10)').click();
        cy.get('[id="menu-Provisioning Status"] > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
        cy.get('[id="Admin State"]').click();
        cy.get('[id="menu-Admin State"] > :nth-child(4)').click();
        cy.get('[id="menu-Admin State"] > .dropdown-header > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(300);
       

    })

        it('Usibirities (Admin click tab All / Online / Offline / Suspend / Failed / Terminated. The system displays a list of items of load Baalancer that are in Status.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(2) > .px-0').first().click({force: true});
            cy.wait(300);
            cy.get(':nth-child(3) > .px-0').click();
            cy.wait(300);
            cy.get(':nth-child(4) > .px-0').click();
            cy.wait(300);
            cy.get(':nth-child(5) > .px-0').click();
            cy.wait(300);
           

        })

        it('Usibirities (Admin search with Customer / Name / Size . The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').type('Qa test');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('Test Load Balancer');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('.ml-auto > .app_renderer_nt_lib_style__searchbar > #search').clear().type('Load-Balancer-Flavor1');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            

        })

        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(2) > div > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage User');
            

        })



        it('Usibirities (Admin click hyperlink Name.  The system leads to Manage Load Balancer page.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(3) > div > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage Load Balancer');
            

        })

        it('Usibirities (Admin click hyperlink Size.  The system leads to Manage  Load Balancer Flavor page.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(4) > div > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage Load Balancer Flavor');
            

        })

    })