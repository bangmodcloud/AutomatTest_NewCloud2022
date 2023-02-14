describe('Create load balancer', () => {
    beforeEach(() => {
        cy.login()
    })

      it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get(':nth-child(4) > .form-control').type('Wara Test Load Barancer'); //Description (Optional)
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    //Step 1.

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');
        cy.wait(700);


    })

     //Step 2.

     it('Usibirities (The system display Note alert “Private Network Speed ของ Data Transfer จะอยู่ที่ 50.000 Mbps”and choose as the first Flavor.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.callout').contains('Private Network Speed ของ Data Transfer จะอยู่ที่ 50.000 Mbps');
        cy.wait(700);


    })

    // Step 3.

    it('Usibirities ( The system choose as the first Subnet.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.mr-2 > #subnet').should('be.checked')
        cy.wait(700);


    })

    it('Usibirities (User click icon add button in the Name column. The system display subnet)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check();  // Flavor
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-cell-with-append > .ant-table-row-expand-icon').click();
        cy.wait(700);


    })

    it('Usibirities (User click hyper link Private Network name. The system Open new tab leads to Manage your Private Network page.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check(); // Flavor
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-cell-with-append > .d-flex > .underline-link').invoke('removeAttr','target').click(); //hyper link Privat
        cy.wait(700);


    })


    it('Usibirities (User click hyper link subnet name. The system Open new tab leads to Manage your subnet page.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check(); // Flavor
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.ant-table-row-level-1 > .ant-table-cell-with-append > .d-flex > .underline-link').invoke('removeAttr','target').click(); //hyper link Subnet
        cy.wait(700);


    })

    it('Usibirities (User click Add button. The system Open new tab leads to Create Private Network page.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check(); // Flavor
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[href="/cloud-server/private-network/new"]').invoke('removeAttr','target').click(); 
        cy.wait(700);


    })

    it('Usibirities (User searches for Private Network entry by Private Network Name / CIDR / Description. The system displays the searched list.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check(); // Flavor
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

    it('Validation (User click Create without clicking checkbox. The system display alert “กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ”.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check(); // Flavor
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ')
        cy.wait(700);


    })

    it('Usibirities (User click เติมเงิน button. The system open new tab leads to PAYMENT CONFIRMATION page.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get('[href="/cloud-server/load-balancer/new"]').click(); //Create button
        cy.get(':nth-child(3) > .form-control').type('Test-Load-Barancer'); //Name
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper .ant-radio-input').check(); // Flavor
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(1) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click();
        cy.wait(700);


    })

})