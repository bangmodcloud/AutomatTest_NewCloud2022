
describe('Manage Cloud / Terminate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })


    it('Usibirities (Alert note “Terminate load balancer is not recoverable and this deletion will delete all of the sub-resources.”).', () => {
        
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(2000);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('.callout').contains('Terminate load balancer is not recoverable and this deletion will delete all of the sub-resources.')
        cy.wait(700);
       


    })

    it('Usibirities (User select Terminate and click ยกเลิก. The system closed modal.).', () => {
        
        
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(2000);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Terminate Load Balancer?')
            .contains('button', 'Cancel')
            .click();
        cy.wait(700);
       
    })

    it('Validation (User do not specify Hostname. The system display alert massage “Please enter correct load balancer name”).', () => {
        
        
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(2000);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Terminate Load Balancer?')
                .contains('button', 'Confirm Terminate')
                .click();
        
        cy.get('.text-danger').contains('Please enter correct load balancer name');
                
        cy.wait(700);
       
    })

    it('Validation (User specify Hostname incorrectly. The system display alert massage “Please enter correct load balancer name”).', () => {
        
        
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(2000);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('[name="name"]').type('test')
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Terminate Load Balancer?')
                .contains('button', 'Confirm Terminate')
        
        cy.get('[name="name"]').type('test')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter correct load balancer name');
                
        cy.wait(700);
       
    })

    it('Validation (User click hyperlink Name column. The system leads to Manage your Load Balancer page).', () => {
        
        
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(2000);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('[name="name"]').type('test')
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Terminate Load Balancer?')
                .contains('button', 'Confirm Terminate')
        
        cy.get(':nth-child(1) > .underline-link').invoke('removeAttr', 'target').click();
                
        cy.wait(700);
       
    })

    it('Action success', () => {
        
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(2000);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('.mt-2 > .ml-2').then(($temp)=>{
            const txt = $temp.text()
    
        cy.get('[name="name"]').type(txt)
    })
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Terminate Load Balancer?')
            .contains('button', 'Confirm Terminate')
            .click();
        cy.wait(700);

    })

    it('Usabilities ( User go to Billing and Cost tab Billed. The system display Items to Terminate Load Balancer.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').should('have.text','TerminateLoadBalancer-Load Balancer')
        
        cy.wait(700);


    })

    it('Usabilities ( User go to My Pocket. The system display Items to Terminate Load Balancer.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(5) > .underline-link').should('have.text','TerminateLoadBalancer-Load Balancer')
        
        cy.wait(700);


    })
})