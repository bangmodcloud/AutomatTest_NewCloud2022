
describe('Create Cloud Advance Flow by Subnet', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(500);
        cy.login();
    })
    context('Create Cloud Select Subnet and Have Public IP', () => {


        it('Usibirities (User select Attach From Private Network radio, click add icon in the Name column and select Subnet. The system display Subnet to choose from.)', () => {

            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            // Step 1.
           
            cy.get('[type="submit"]').click();
            cy.wait(500);
            // Step 2.
            cy.get('[type="submit"]').click();
            // Step 3.
            cy.wait(500);
            cy.contains('Advance Network Setting').click(); //Advance Network Setting button
            // Step 4.
            cy.get('#attach-private-network').check();
            cy.get(':nth-child(1) > .ant-table-cell-with-append > .ant-table-row-expand-icon').click();
            cy.get('.ant-table-row-level-1 > .ant-table-cell-with-append').should('be.visible')
            cy.get('.mr-2 > #subnet').check();


        })

        
        it('Action success', () => {

            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            // Step 1.
           
            cy.get('[type="submit"]').click();
            cy.wait(500);
            // Step 2.
            cy.get('[type="submit"]').click();
            // Step 3.
            cy.wait(500);
            cy.contains('Advance Network Setting').click(); //Advance Network Setting button
            // Step 4.
            cy.get('#attach-private-network').check();
            cy.get(':nth-child(1) > .ant-table-cell-with-append > .ant-table-row-expand-icon').click();
            cy.get('.mr-2 > #subnet').check();
            cy.get('[type="submit"]').click();
            // Step 5.
            cy.get(':nth-child(1) > :nth-child(3) > .text-center > .d-flex > .btn').click();
            cy.get('[data-row-key="publicIP"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.checked');
            cy.get(':nth-child(2) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.checked');
            cy.get('[type="submit"]').click();
            cy.wait(500);
            // Step 6.
            cy.get('[type="submit"]').click();
            // Step 7.
            cy.get('[name="hostname"]').clear().type('cloud-subnet-public-1');
            cy.get('[type="submit"]').click();
            // Step 8.
            cy.get('#terms').check();
            cy.get('[type="submit"]').click();
            cy.wait(40000);

        })
        

    })

    context('Create Cloud Select Subnet and Does not have Public IP', () => {

        it('Action success', () => {

            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            // Step 1.
           
            cy.get('[type="submit"]').click();
            cy.wait(500);
            // Step 2.
            cy.get('[type="submit"]').click();
            // Step 3.
            cy.wait(500);
            cy.contains('Advance Network Setting').click(); //Advance Network Setting button
            // Step 4.
            cy.get('#require-ip-address').uncheck()
            cy.get('#attach-private-network').check();
            cy.get(':nth-child(1) > .ant-table-cell-with-append > .ant-table-row-expand-icon').click();
            cy.get('.mr-2 > #subnet').check();
            cy.get('[type="submit"]').click();
            // Step 5.
            cy.get(':nth-child(1) > :nth-child(3) > .text-center > .d-flex > .btn').click();
            cy.get('[type="submit"]').click();
            cy.wait(500);
            // Step 6.
            cy.get('[type="submit"]').click();
            // Step 7.
            cy.get('[name="hostname"]').clear().type('cloud-subnet');
            cy.get('[type="submit"]').click();
            // Step 8.
            cy.get('#terms').check();
            cy.get('[type="submit"]').click();
            cy.wait(2000);

        })

        it(' Usabilities ( User go to List Floating IP page. The system display Instance in column Instance.)', () => {


            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').should('have.text','cloud-nic-public-1')
          
            cy.wait(700);
        })

        it(' Usabilities ( User go to Manage you Floating IP page. The system display Instance in Associated Instance card.)', () => {


            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.get(':nth-child(1) > div > .underline-link').should('have.text','cloud-nic-public-1')
          
            cy.wait(700);
        })

      
    })

})
