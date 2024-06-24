describe(' Download Billing PDF files', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

    it('Usabilities ( User click Download Billing button of Cloud Service. The system will export file PDF.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        // cy.get('#search').type('Cloud Service');
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Download Billing').click();

      
        
        cy.wait(700);


    })

    it('Usabilities ( User click Download Billing button of Volume. The system will export file PDF.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get('#search').type('Volume');
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
        cy.wait(500);
        cy.contains('Download Billing').click();

      
        
        cy.wait(700);


    })

    it('Usabilities ( User click Download Billing button of Volume Backup. The system will export file PDF.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get('#search').type('Volume Backup');
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(500);
        cy.contains('Download Billing').click();

      
        
        cy.wait(700);


    })

    it('Usabilities ( User click Download Billing button of Floating IP. The system will export file PDF.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get('#search').type('Floating IP');
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(500);
        cy.contains('Download Billing').click();

      
        
        cy.wait(700);


    })

    it('Usabilities ( User click Download Billing button of Load Balancer. The system will export file PDF.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get('#search').type('Load Balancer');
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(500);
        cy.contains('Download Billing').click();

      
        
        cy.wait(700);


    })
})