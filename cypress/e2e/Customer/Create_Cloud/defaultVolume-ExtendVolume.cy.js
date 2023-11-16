describe('Extend volume (default volume)', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(3000);
        
    })

    it('validation (User does not enter fieldinput. The system display alert message “Please input data” .)', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(8000);
        cy.contains('Action').click();
        cy.contains('Extend Volume').click();
        cy.wait(5000);
        cy.get(':nth-child(5) > .input-group > #amount').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('validation (User enter number less than current size. The system display alert message “Please enter a number greater than current size” .)', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(8000);
        cy.contains('Action').click();
        cy.contains('Extend Volume').click();
        cy.wait(5000);
        cy.get(':nth-child(5) > .input-group > #amount').clear().type('3');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter a number greater than current size');
        cy.wait(700);


    })

    it('validation (User enter an amount of size exceeding usage quota. The system display alert message “The number of Sizes you specified exceeds your usage quota, please specify the number of Sizes less than ……. or contact Support.” .)', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(8000);
        cy.contains('Action').click();
        cy.contains('Extend Volume').click();
        cy.wait(5000);
        cy.get(':nth-child(5) > .input-group > #amount').clear().type('1024');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('The number of sizes you specified exceeds your usage quota, please specify the number of sizes less than 700 or contact Support.');
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. The system go to Manage your Volume page.)', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(8000);
        cy.contains('Action').click();
        cy.contains('Extend Volume').click();
        cy.wait(5000);
        cy.contains('.btn','Cancel').click(); //Cancel
     
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. The system go to Manage your Volume page.)', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(8000);
        cy.contains('Action').click();
        cy.contains('Extend Volume').click();
        cy.wait(5000);
        cy.contains('.btn','Cancel').click(); //Cancel
     
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.wait(3000);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(5000);
        cy.contains('Action').click();
        cy.contains('Extend Volume').click();
        cy.wait(3000);
        cy.get(':nth-child(5) > .input-group > #amount').clear().type('40');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Usabilities ( User go to Billing and Cost tab Billed. The system display Items to Extend Volume.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').should('have.text','ExtendSize-volume-cloud-sunnet-1')// change
        
        cy.wait(700);


    })

    it('Usabilities ( User go to My Pocket. The system display Items to Extend Volume.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(5) > .underline-link').should('have.text','ExtendSize-volume-cloud-sunnet-1')// change
        
        cy.wait(700);

    })    
})