describe('Manage Volume Backup / Delete', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(1000)


    })

    context('List Volume Backup page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(7) > .row > .d-flex > .btn').click(); //Delete button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume Backup?')
                .wait(500)
                .contains('button', 'No')
                .click()

            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(7) > .row > .d-flex > .btn').click(); //Delete button
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume Backup?')
                .wait(500)
                .contains('button', 'Yes')
                .click()

            cy.wait(1000);

        })
    })

    context('Manage Volume Backup page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume Backup?')
                .wait(500)
                .contains('button', 'No')
                .click()

            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#volume-backup').click();
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume Backup?')
                .wait(500)
                .contains('button', 'Yes')
                .click()

            cy.wait(1000);

        })

        it('Usabilities ( User go to Billing and Cost tab Billed. The system display Items to Terminate Volume blackup.)', () => {

   
            cy.get('#billing-collapse').click({ force: true });
            cy.get('#billing-and-cost').click({ force: true });
            cy.wait(700);
            cy.get(':nth-child(2) > .px-0').click();
            cy.wait(500);
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').should('have.text','TerminateVolumeBackup-backup-fortest-automic2')// change
            
            cy.wait(700);
    
    
        })
    
        it('Usabilities ( User go to My Pocket. The system display Items to Terminate Volume blackup.)', () => {
    
       
            cy.get('#billing-collapse').click({ force: true });
            cy.get('#my-pocket').click({ force: true });
            cy.wait(700);
            cy.get(':nth-child(2) > .px-0').click();
            cy.wait(500);
            cy.get(':nth-child(1) > :nth-child(5) > .underline-link').should('have.text','TerminateVolumeBackup-backup-fortest-automic2')// change
            
            cy.wait(700);
    
        })    
    })
})