describe('Create load balancer', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Action success', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').clear().type('Test-Load-Barancer'); //Name
        cy.get(':nth-child(4) > .form-control').type('Wara Test Load Barancer'); //Description (Optional)
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#terms').check();
        // cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    //Step 1.

    it('Usabilities (User go to Manage Security Group page. The system displayed Field labels as follows: Name, Description (Optional)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)');
        cy.wait(700);
    })


    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    //Step 2.

    it('Usibirities (The system will display the selected information. It will be selected as the first item of Size)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(700);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.ant-radio-input').first().should('be.checked')
        cy.wait(700);


    })

    // Step 3.

    it('Usibirities ( The system choose as the first Subnet.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[aria-label="Expand row"]').first().click({force: true});
        cy.get('.mr-2 > #subnet').first().should('be.checked')
        cy.wait(700);


    })

    it('Usibirities (User click icon add button in the Name column. The system display subnet)', () => {
  
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[aria-label="Expand row"]').first().click({force: true});
        cy.wait(700);


    })

    it('Usibirities (User click hyper link Private Network name. The system Open new tab leads to Manage your Private Network page.)', () => {
 
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-cell-with-append > .d-flex > .underline-link').invoke('removeAttr', 'target').click(); //hyper link Privat
        cy.wait(700);


    })


    it('Usibirities (User click hyper link subnet name. The system Open new tab leads to Manage your subnet page.)', () => {
 
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.ant-table-row-level-1 > .ant-table-cell-with-append > .d-flex > .underline-link').invoke('removeAttr', 'target').click(); //hyper link Subnet
        cy.wait(700);


    })

    it('Usibirities (User click Add button. The system Open new tab leads to Create Private Network page.)', () => {
  
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[href="/cloud-server/private-network/new"]').invoke('removeAttr', 'target').click();
        cy.wait(700);


    })

    it('Usibirities (User searches for Private Network entry by Private Network Name / CIDR / Description. The system displays the searched list.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#search').type('test-1');
        cy.wait(500);
        cy.get('#search').clear().type('192.168.0.0/16');
        cy.wait(500);
        cy.get('#search').clear().type('Wara Test Private Network')
        cy.wait(700);


    })

    //Step 4.

    it('Usabilities (User go to Manage Security Group page. The system displayed Field labels as follows: >> "view Test Plan)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get('[type="submit"]').click();
        cy.wait(700);
        cy.get('[type="submit"]').click();
        cy.wait(700);
        cy.get('[type="submit"]').click();
        cy.wait(700);
        cy.contains('.card', 'Load Balancer User Agreement')
            .contains('li', 'The cost of using the Load Balancer service depends on the package you choose, which will be charged hourly based on actual usage.')
        cy.contains('.card', 'Load Balancer User Agreement')
            .contains('li', 'The system will automatically update credit and balance every end of the month. The balance will be deducted from credit first. . In case the number of Credits is insufficient, the system will automatically use the Balance.')
        cy.contains('.card', 'Load Balancer User Agreement')
            .contains('li', 'User must maintain the balance more than 0 baht (Credit + Balance), if not the Cloud Server will be force status to Suspend immediately and will be deleted from the system within 5 days from the date of forced suspend status.');

        cy.contains('.card', 'Load Balancer User Agreement')
            .contains('li', 'Load Balancer forced to stop working. will be charged as usual')

        cy.get('.black-text').should('have.text', 'I have read and understood this Agreement.')
        cy.wait(700);
    })

    it('Validation (User click Create without clicking checkbox. The system display alert “Please accept the terms and conditions of service.”.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('Please accept the terms and conditions of service.')
        cy.wait(700);


    })

    it('Usibirities (User click เติมเงิน button. The system open new tab leads to PAYMENT CONFIRMATION page.)', () => {
      
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.contains('Top Up').invoke('removeAttr', 'target').click({force: true});
        cy.wait(700);


    })

})