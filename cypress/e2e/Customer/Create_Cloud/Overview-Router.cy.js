describe('Overview Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (Admin click tab All / Active / Allocating / Error)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(4) > .px-0').click();

            cy.wait(700);
            

        })

        it('Usibirities (Admin search with ID / Customer / Name / Description / External Network)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get('#search').type('Qa test');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('Test-1');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('test Router');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('43.239.251.17');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(700);

        })


        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(1) > :nth-child(2) > a').last().click();
            cy.get('.header-30-semibold').contains('Manage User');
            
            cy.wait(700);
        })


        it('Usibirities ( When : Admin click hyperlink Name. The system leads to Manage Router page.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get(':nth-child(1) > :nth-child(3) > a').last().click();
            cy.get('.header-30-semibold').contains('Manage Router');
            
            cy.wait(700);
        })

        it('Usibirities ( When : Admin go to Manage Router page. The system displayed Field labels as follows: >> "view Test Plan")', () => {

            cy.get('#network-collapse').click();
            cy.get('#cloud-router').click();
            cy.get('.underline-link').first().click();
            cy.wait(700);
            cy.contains('.card','Router Information').within(() => {
                cy.contains('label', 'Name').should('have.text', 'Name')
                cy.contains('label', 'Description').should('have.text', 'Description')

            })
            cy.contains('.card','External Network').within(() =>{
                cy.contains('label', 'Floating IP').should('have.text', 'Floating IP')

            })

            cy.contains('.card','Status').within(() => {
                cy.contains('label', 'Status').should('have.text', 'Status')
                cy.contains('label', 'Admin State').should('have.text', 'Admin State')

            })
            cy.contains('.card','Setting SNAT').within(() => {
                cy.contains('.card','Setting SNAT').contains('div','Source Network Address Translation (source-nat or SNAT) allows traffic from a private network to go out to the internet. Virtual machines launched on a private network can get to the internet by going through a gateway capable of performing SNAT.')
            })

        cy.wait(700);
            

        })

    })