describe('Create Security Group', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('[name="name"]').type('test-1');
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();


        cy.wait(700);


    })

    it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');


        cy.wait(700);


    })

    it('validation (User did not select field select. The system displays alert message “ Please select data”', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('[name="name"]').type('test-1');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');


        cy.wait(700);


    })

    it('Usibirities (User click Cancel button. The system closed page.', () => {

        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); //Create button
        cy.get('small').click();


        cy.wait(700);


    })
})