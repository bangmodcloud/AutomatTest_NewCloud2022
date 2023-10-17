describe('Create Cloud Authenticate Encrypt by ssh key', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })


    it('Usibilities (User Select Authentication Encrypt by SSH Key. The system display table authentication method.)', () => {

        //Step.1
         cy.get('[href="/cloud-server/new"]').click();
         cy.wait(500);
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.2
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.3
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.4
         cy.get('#authenWithEncryptedKey').click();
         cy.get('.card-body > .mt-4').should('be.visible')
 
     })

    it('Usibilities (User search by Name. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        //Step.1
         cy.get('[href="/cloud-server/new"]').click();
         cy.wait(500);
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.2
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.3
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.4
         cy.get('#authenWithEncryptedKey').click();
         cy.wait(500);
         cy.get('#search').type('keypair-importfile')
         cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
         cy.get('#search').clear().type('data');
         cy.get('.ant-empty-description').contains('No data')
 
     })

    it('Usibilities (User click Add icon. The system leads to Create Keypair page.)', () => {

        //Step.1
         cy.get('[href="/cloud-server/new"]').click();
         cy.wait(500);
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.2
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.3
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.4
         cy.get('#authenWithEncryptedKey').click();
         cy.wait(500);
         cy.get('.ICON > .btn').invoke('removeAttr','target').click();
 
     })

    it('Usibilities (User click caret-up icon Fields Column Name / Date Add. The system will to sort ascending.)', () => {

        //Step.1
         cy.get('[href="/cloud-server/new"]').click();
         cy.wait(500);
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.2
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.3
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.4
         cy.get('#authenWithEncryptedKey').click();
         cy.wait(500);
         cy.get('[aria-label="Name sortable"] > .ant-table-column-sorters').click(); //Name
         cy.wait(500);
         cy.get('.ant-table-column-sort > .ant-table-column-sorters').dblclick(); //Name
         cy.wait(200);
         cy.get('[aria-label="Date Added sortable"] > .ant-table-column-sorters').click()
         cy.wait(500);
         cy.get('.ant-table-column-sort > .ant-table-column-sorters').dblclick();
         cy.wait(700);
 
     })

    it('Usibilities (User click hyperlink Name. The system go to Manage Keypair.)', () => {

        //Step.1
         cy.get('[href="/cloud-server/new"]').click();
         cy.wait(500);
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.2
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.3
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.4
         cy.get('#authenWithEncryptedKey').click();
         cy.wait(500);
         cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr','target').click();
         cy.wait(700);
 
     })

     it('Action success', () => {

        //Step.1
         cy.get('[href="/cloud-server/new"]').click();
         cy.wait(500);
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.2
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.3
         cy.get('[type="submit"]').click();
         cy.wait(500);
         //Step.4
         cy.get('#authenWithEncryptedKey').click();
         cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click();
         cy.get('[type="submit"]').click();
         //Step.5
         cy.get('[name="hostname"]').clear().type('cloud-Encrypt-ssh');
         cy.get('[type="submit"]').click();
         //Step.6
         cy.get('#terms').check();
         cy.get('[type="submit"]').click();
 
     })
})