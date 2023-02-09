describe(' Create network interface.', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('[name="name"]').type('test');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click(); // Subnet
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('#fixed-ip').check();
        cy.get('[name="fixedIp"]').type('192.168.0.1');
        cy.get('[name="macAddress"]').type('fa:16:3e:b2:8f:68');
        cy.get('[type="submit"]').click();

        cy.wait(700);


    })

    it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();

        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click(); // Subnet
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('#fixed-ip').check();
        cy.get('[name="macAddress"]').type('fa:16:3e:b2:8f:68');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');

        cy.wait(700);


    })

       it('Validation (User did not select field select. The system displays alert message “ Please select data”', () => {
        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('[name="name"]').type('test');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Private Network
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click(); // Subnet
        cy.get('#fixed-ip').check();
        cy.get('[name="fixedIp"]').type('192.168.0.1');
        cy.get('[name="macAddress"]').type('fa:16:3e:b2:8f:68');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');

        cy.wait(700);


    })

    it('Validation (User select Fixed IP Address radio. The system display textfield IP Address.', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('[name="name"]').type('test');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click(); // Subnet
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('#fixed-ip').check();
        cy.get('[name="fixedIp"]').should('be.visible');


        cy.wait(700);


    })

    it('Validation (User specified an invalid MAC address. The system displays alert message “ Invalid MAC Address”', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('[name="name"]').type('test');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click(); // Subnet
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('#fixed-ip').check();
        cy.get('[name="fixedIp"]').type('1');
        cy.get('.app_renderer_lib_style__form-style > .card').click();
        cy.get('.text-danger').contains('Invalid IP Address');

        cy.wait(700);

    })

    it('Validation (User specified an IP Address not within the selected Subnet. The system displays alert message “Please specify an IP Address in the selected Subnet”', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('[name="name"]').type('test');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click(); // Subnet
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('#fixed-ip').check();
        cy.get('[name="fixedIp"]').type('10.0.0.1');
        cy.get('.app_renderer_lib_style__form-style > .card').click();
        cy.get('.text-danger').contains('Please specify an IP Address in the selected Subnet');

        cy.wait(700);

    })

    it('Validation (User has specified the same IP Address as another Network Interface. The system displays modal “Error”', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('[name="name"]').type('test');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click(); // Subnet
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('#fixed-ip').check();
        cy.get('[name="fixedIp"]').type('192.168.0.1');
        cy.get('.app_renderer_lib_style__form-style > .card').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Error');
           
        cy.wait(700);

    })

    it('Validation (User specified an invalid MAC address. The system displays modal “Invalid MAC Address”', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('[name="name"]').type('test');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click(); // Subnet
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('#fixed-ip').check();
        cy.get('[name="fixedIp"]').type('192.168.0.2');
        cy.get('[name="macAddress"]').type('fa');
        cy.get('.app_renderer_lib_style__form-style > .card').click();
        cy.get('.text-danger').contains('Invalid according to the format of MAC Address');
        cy.wait(700);

    })

    it('Usibirities (User go to Security Group (Optional) card. The system display alert Warning “You can assign a maximum of 5 security groups to a network interface.“', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('.app_renderer_lib_style__table-style > .card').click();
        cy.get('.callout').contains('You can assign amaximum of 5 security groups to a network interface')
        cy.wait(700);

    })

    it('Usibirities (User selects 5 Security Groups and then selects additional Security Groups. User can not  selects additional Security Groups.', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('.app_renderer_lib_style__table-style > .card').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get(':nth-child(4) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get(':nth-child(5) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get('.ant-pagination-item-2 > a').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.disabled');
        cy.wait(700);

    })

    it('Usibirities (User searches for the Security Group entry by Security Group Name. The system displays the searched list.', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('.app_renderer_lib_style__table-style > .card').click();
        cy.get('#search').type('test-3');
        cy.get('#search').clear().type('test Security Group');

        cy.wait(700);

    })

    it('Usibirities (User click Add button. The system open new tab leads to Create Security Group page.', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('.app_renderer_lib_style__table-style > .card').click();
        cy.get('[href="/cloud-server/security-group/new"]').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })


    it('Usibirities (User click Cancel button. The system closed page.', () => {

        cy.get('#network-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('[href="/cloud-server/network-interface/new"]').click();
        cy.get('small').click();

        cy.wait(700);

    })
})