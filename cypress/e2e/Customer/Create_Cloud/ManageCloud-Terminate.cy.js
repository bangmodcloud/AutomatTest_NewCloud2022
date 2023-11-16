
describe('Manage Cloud / Terminate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })


    it('Usibirities (Alert note “การ Terminate จะทำให้ Public Network Interface ถูกลบ และรายการ Resource อื่นจะถูก Detach ออก”).', () => {
        
        
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('.callout').contains('Terminating causes the Public Network Interface to be deleted and all other resource entries to be detachable.')
        cy.wait(700);
       


    })

    it('Usibirities (User select Terminate and click ยกเลิก. The system closed modal.).', () => {
        
        
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Terminate ?')
            .contains('button', 'Cancel')
            .click();
        cy.wait(700);
       
    })

    it('Validation (User do not specify Hostname. The system display alert massage “Please type the hostname to confirm terminate”).', () => {
        
        
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Terminate ?')
                .contains('button', 'Confirm Terminate')
                .click();
        
        cy.get('.text-danger').contains('Please type the hostname to confirm terminate');
                
        cy.wait(700);
       
    })

    it('Validation (User specify Hostname incorrectly. The system display alert massage “กรุณากรอกชื่อ Hostname ให้ถูกต้อง”).', () => {
        
        
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('[name="hostname"]').type('test')
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Terminate ?')
                .contains('button', 'Confirm Terminate')
        
        cy.get('[name="hostname"]').type('test')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please type the hostname to confirm terminate');
                
        cy.wait(700);
       
    })

    it('Action success', () => {
        
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Terminate').click();
        cy.get('.content-14-semibold').then(($temp)=>{
            const txt = $temp.text()
    
        cy.get('[name="hostname"]').type(txt)
    })
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Terminate ?')
            .contains('button', 'Confirm Terminate')
            .click();
        cy.wait(700);

    })

    it('Usabilities ( User go to Billing and Cost tab Billed. The system display Items to Terminate Cloud.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(1) > .underline-link').should('have.text','TerminateCloud-cloud-test-1')
        
        cy.wait(700);


    })

    it('Usabilities ( User go to My Pocket. The system display Items to Terminate Cloud.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(5) > .underline-link').should('have.text','TerminateCloud-cloud-test-1')
        
        cy.wait(700);


    })
})

