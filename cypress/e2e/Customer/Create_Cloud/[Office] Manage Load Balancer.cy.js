describe('Manage Load Balancer', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    it('Usibirities (Admin click tab Network Interface. Toggle admin state = disable)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
        cy.wait(300);
        cy.get('.ant-switch').should('be.disabled')
        cy.wait(300);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get('.ant-switch').should('be.disabled')
        cy.wait(300);

    })

    it('Usibirities (Admin click tab Listener and search with Name / Protocol / Port / Poole. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
        cy.wait(300);
        cy.get(':nth-child(3) > .px-0').click();
        cy.get('#search').type('test-Listener');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('HTTP');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('443');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('test-Pool');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
       

    })

    it('Usibirities (Admin click hyperlink Name. The system leads to Manage Your Listener page.)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
        cy.wait(300);
        cy.get(':nth-child(3) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(1) > a').last().click();
        cy.get('.header-30-semibold').contains('Manage Your Listener');
        cy.wait(300);
       

    })

    it('Usibirities (Admin click hyperlink Pool. The system open new tab to Manage Your Pool page.)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
        cy.wait(300);
        cy.get(':nth-child(3) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(4) > a').last().invoke('removeAttr','target').click();
        cy.get('.header-30-semibold').contains('Manage your Pool');
        cy.wait(300);
       

    })

    it('Usibirities (Admin search with Pool / Algorithm / Protocol / Number Pool Member. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
        cy.wait(300);
        cy.get(':nth-child(4) > .px-0').click();
        cy.get('#search').type('test-Pool');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('ROUND_ROBIN');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('HTTP');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
       
       

    })


    it('Usibirities (Admin click hyperlink Pool. The system open new tab to Manage Your Pool page.)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer').click();
        cy.get(':nth-child(2) > :nth-child(3) > div > .underline-link').click();
        cy.wait(300);
        cy.get(':nth-child(4) > .px-0').click();
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(1) > a').last().invoke('removeAttr','target').click();
        cy.get('.header-30-semibold').contains('Manage your Pool');
        cy.wait(300);
       
       

    })
})