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
        cy.wait(700);
       

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
            cy.wait(700);
           

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
            cy.wait(700);
            

        })

        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(3) > div > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage User');
            cy.wait(700);

        })



        it('Usibirities (Admin click hyperlink Name.  The system leads to Manage Load Balancer page.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(4) > div > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage Load Balancer');
            cy.wait(700);

        })

        it('Usibirities (Admin click hyperlink Size.  The system leads to Manage  Load Balancer Flavor page.)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(5) > div > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage Load Balancer Flavor');
            

        })

        it('Usibirities (Admin go to Manage Load Balancer page. The system displayed Field labels as follows:\
            General Information card : Name, Description\
            Size Information card : Name, Max Concurrent, High Availability\
            Subnet Information card : Private Network, Subnet, IP Address\
            Status card : Operating Status, Provisioning Status, Admin State)', () => {

            cy.get('#lb-collapse').click();
            cy.get('#load-balancer').click();
            cy.get(':nth-child(1) > :nth-child(4) > div > .underline-link').click();
            cy.wait(1000);

            cy.contains('.card', 'General Information').within(() => {
                cy.contains('label', 'Name').should('have.text', 'Name')
                cy.contains('label', 'Description').should('have.text', 'Description')
            })
    
            cy.contains('.card', 'Size Information').within(() => {
                cy.contains('label', 'Name').should('have.text', 'Name')
                cy.contains('label', 'Max Concurrent').should('have.text', 'Max Concurrent')
                cy.contains('label', 'High Availability').should('have.text', 'High Availability')
            })
    
            cy.contains('.card', 'Subnet Information').within(() => {
                cy.contains('label', 'Private Network').should('have.text', 'Private Network')
                cy.contains('label', 'Subnet').should('have.text', 'Subnet')
                cy.contains('label', 'IP Address').should('have.text', 'IP Address')
            })
    
            cy.contains('.card', 'Status').within(() => {
                cy.contains('label', 'Operating Status').should('have.text', 'Operating Status')
                cy.contains('label', 'Provisioning Status').should('have.text', 'Provisioning Status')
                cy.contains('label', 'Admin State').should('have.text', 'Admin State')
            })
    
                cy.wait(700);
            

        })


    })