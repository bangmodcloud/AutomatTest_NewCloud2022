describe('Create Private Network', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#private-network').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('[name="name"]').clear().type('test-Private');
        cy.get('[name="ipv4cidr"]').type('10.0.0.0/8');
        cy.get(':nth-child(2) > .card > .card-body > :nth-child(2) > .form-control').clear().type('Test-subnet'); //Name
        cy.get('[name="subnets[0].ipv4cidr"]').type('10.0.0.0/8');
        cy.get('[type="submit"]').click();


        cy.wait(700);


    })

    it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {


        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#private-network').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');


        cy.wait(700);


    })

    it('Validation (User specified an invalid IPv4 CIDR. The system displays alert message “Please input valid CIDR Notation”', () => {


        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#private-network').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('[name="name"]').clear().type('test-Private');
        cy.get('[name="ipv4cidr"]').type('10');
        cy.get(':nth-child(2) > .card > .card-body > :nth-child(2) > .form-control').clear().type('Test-subnet'); //Name
        cy.get('[name="subnets[0].ipv4cidr"]').type('10');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input valid CIDR Notation');

        cy.wait(700);


    })

    it('Validation (The specified IPv4 CIDR subnet is not in the Private Network loop. The system displays alert message “IPv4 CIDR ที่ระบุไม่ได้อยู่ในวง Private Network”', () => {


        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#private-network').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('[name="name"]').clear().type('test-Private');
        cy.get('[name="ipv4cidr"]').type('10.0.0.0/8');
        cy.get(':nth-child(2) > .card > .card-body > :nth-child(2) > .form-control').clear().type('Test-subnet'); //Name
        cy.get('[name="subnets[0].ipv4cidr"]').type('192.168.0.0/16');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('IPv4 CIDR ที่ระบุไม่ได้อยู่ในวง Private Network');

        cy.wait(700);


    })

    it('Validation (User click Add Subnet button. The system displays card Subnet', () => {


        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#private-network').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('.container.mt-4 > .app_renderer_common_button__common-button-style > .btn').click(); //add button

        cy.wait(700);


    })


})