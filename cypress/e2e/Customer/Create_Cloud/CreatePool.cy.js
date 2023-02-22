describe(' Create Pool', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
           })
        cy.login()
        cy.wait(5000)
    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.get('[name="name"]').type('Test-Pool');
        cy.get('[name="description"]').type('Wara Test Create Pool');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Algorithm
        cy.get(':nth-child(3) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click({force: true}); //Protocol
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(1) > :nth-child(2) > .text-center > .app_renderer_common_button__common-button-style > .btn').click(); //Instance Hostname
        cy.get(':nth-child(4) > div > .form-control').type('60'); //Port
        cy.get('[type="submit"]').click();
        cy.wait(5000);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
    
        cy.get('[name="description"]').type('Wara Test Create Pool');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Algorithm
        cy.get(':nth-child(3) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click({force: true}); //Protocol
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(1) > :nth-child(2) > .text-center > .app_renderer_common_button__common-button-style > .btn').click(); //Instance Hostname
   
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');
        cy.wait(700);


    })

    it('Validation (User did not select field select..  The system display alert message “Please select data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.get('[name="name"]').type('Test-Pool');
        cy.get('[name="description"]').type('Wara Test Create Pool');
        cy.get('.app_renderer_lib_style__form-style > .card').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);


    })

    it('Usiribities (User click hyper link “HERE”.  The system display table Allocated Members.”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container').should('be.visible')
        cy.wait(700);


    })

    it('Validation (User entered an Invalid format IP address.  The system dispaly alert massege “Invalid IP Address”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.get('[name="0IpAddress"]').type('1');
        cy.get(':nth-child(2) > .card').click();
        cy.get('.text-danger').contains('Invalid IP Address');
        cy.wait(700);


    })

    it('Validation (User entered more or less ports than the system-defined range.  The system dispaly alert massege “Please input data in range 0-256”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.get('[name="0IpAddress"]').type('15.255.123.109');
        cy.get('[name="0Port"]').type('60');
        cy.get('[name="0Weight"]').clear().type('-1');
        cy.get(':nth-child(2) > .card').click();
        cy.get('.text-danger').contains('Please input data in range 0-256');
        cy.wait(700);


    })

    it('Usiribities (User click Add External Member button.  The system dispaly add table row.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.get('.card-body > :nth-child(3) > .app_renderer_common_button__common-button-style > .btn').click(); //Add External Member
        cy.wait(700);


    })

    it('Usiribities (User click minus icon.  The system close table row.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.get('.card-body > :nth-child(3) > .app_renderer_common_button__common-button-style > .btn').click(); //Add External Member
        cy.wait(700);
        cy.get(':nth-child(2) > :nth-child(6) > .text-center > .app_renderer_common_button__common-button-style > .btn').click(); //minus icon
        cy.wait(700);


    })

    it('Usiribities (User click icon add button in the Instance Hostname column.  The system display IP Address.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get(':nth-child(1) > :nth-child(2) > .text-center > .app_renderer_common_button__common-button-style > .btn').click(); //Instance Hostname
        cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container').should('be.visible');
        cy.wait(700);

    })

    it('Usiribities (User click hyper link Instance Hostname.  The system open new tab leads to Manage your cloud page.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get(':nth-child(1) > .ant-table-cell-with-append > .underline-link').invoke('removeAttr','target').click();
        cy.wait(700);

    })

    it('Usiribities (User click icon add button from Available Instances.  That list will be displayed at Allocated Members.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get(':nth-child(1) > .ant-table-cell-with-append > .ant-table-row-expand-icon').click(); 
        cy.get('.ant-table-row-level-1 > .ant-table-cell-with-append').should('be.visible')
        cy.wait(700);

    })

    it('Usiribities (User searches for Private Network entry by Instance Hostname.  The system displays the searched list.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get('#search').type('Wara-Test-1');
        cy.wait(700);

    })

    it('Usiribities (User click Add Monitor button.  The system add new card “Monitor Information”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get('.container.mt-4 > .app_renderer_common_button__common-button-style > .btn').click(); //Add Monitor
        cy.wait(700);

    })

    it('Usiribities (User click Delete Monitor button.  The system close card.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr','target').click(); //Create Pool
        cy.wait(700);
        cy.get('.container.mt-4 > .app_renderer_common_button__common-button-style > .btn').click(); //Add Monitor
        cy.wait(700);
        cy.get('.d-flex > .app_renderer_common_button__common-button-style > .btn').click(); //Delete Monitor
        cy.wait(700);

    })

   
})