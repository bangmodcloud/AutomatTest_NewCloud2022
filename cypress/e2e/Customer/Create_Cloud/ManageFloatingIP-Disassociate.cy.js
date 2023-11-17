describe('Manage Floating IP / Disassociate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        
    })


    it('Usibirities (User click No. The system closed modal.)', () => {

        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
        cy.contains('Disassociate Instance').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Disassociate?')
            .wait(500)
            .contains('button', 'No')
            .click();
        cy.wait(2000);
    })

    it('Action success', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
        cy.contains('Disassociate Instance').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Disassociate?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        
        cy.wait(5000);
    })

    it('Usabilities ( User go to Billing and Cost tab Billed. The system display Items to Disassociate Floating IP.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').should('have.text','DisassociateFloatingIP-103.27.200.44')
        
        cy.wait(700);


    })

    it('Usabilities ( User go to My Pocket. The system display Items to Disassociate Floating IP.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(5) > .underline-link').should('have.text','DisassociateFloatingIP-103.27.200.44')
        
        cy.wait(700);


    })
})