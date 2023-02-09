describe('Create Private Network', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('10.0.0.1/8');
        cy.get('[type="submit"]').click();


        cy.wait(700);


    })

    it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('.ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');


        cy.wait(700);


    })

    it('validation (User did not select field select. The system displays alert message “ Please select data”', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('10.0.0.1/8');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');


        cy.wait(700);


    })

    it('Validation (User specified an invalid IPv4 CIDR. The system displays alert message “Please input valid CIDR Notation”', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('.ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('10');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input valid CIDR Notation');


        cy.wait(700);


    })

    it('Validation (The specified IPv4 CIDR subnet is not in the Private Network loop. The system displays alert message “IPv4 CIDR ที่ระบุไม่ได้อยู่ในวง Private Network”', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('.ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('192.168.0.0/16');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('IPv4 CIDR ที่ระบุไม่ได้อยู่ในวง Private Network');


        cy.wait(700);


    })

    it('Validation (The specified IPv4 CIDR subnet is not in the range. The system displays alert message “Please input valid network address in range”', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('.ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('192.168.0.0/16');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('IPv4 CIDR ที่ระบุไม่ได้อยู่ในวง Private Network');


        cy.wait(700);


    })

    it('Validation (The specified IPv4 CIDR subnet is not in the range. The system displays alert message “Please input valid network address in range”', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#subnet').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('.ant-select-selector').click(); //Private Network
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[name="subnets[0].name"]').clear().type('test-subnet');
        cy.get('[name="subnets[0].ipv4cidr"]').type('192.168.0.0/16');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('IPv4 CIDR ที่ระบุไม่ได้อยู่ในวง Private Network');


        cy.wait(700);


    })
})