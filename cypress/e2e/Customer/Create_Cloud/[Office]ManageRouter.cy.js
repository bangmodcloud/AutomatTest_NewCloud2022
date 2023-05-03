describe('Manage Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (The system set toggle admin state = disable and Toggle Setting SNAT = disable)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(1) > :nth-child(3) > a').last().click();
            cy.wait(300);
            cy.get('.content-16-reg > .ant-switch').should('be.disabled'); //toggle admin state 
            cy.get(':nth-child(1) > .app_renderer_lib_style__toggle > .ant-switch').should('be.disabled'); //Toggle Setting SNAT
            cy.wait(300);
            

        })

        it('Usibirities (Admin search with Name and Fixed IP. The system displays the searched list.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(1) > :nth-child(3) > a').last().click();
            cy.wait(300);
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#search').type('rnic-845caea8-12')
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.get('#search').clear().type('10.0.0.1')
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            

        })

        it('Usibirities (Admin search with Destination CIDR and Next Hop. The system displays the searched list.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(3) > :nth-child(3) > a').last().click();
            cy.wait(300);
            cy.get('.nav > :nth-child(3) > .px-0').click();
            cy.get('#search').type('10.0.0.0/24')
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.get('#search').clear().type('10.0.0.10')
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            

        })
    })