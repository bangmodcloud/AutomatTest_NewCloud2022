describe('Create Security Group', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usalibities (User go to Manage Router page. The system displayed Field labels as follows: Name, Template, Description (Optional))', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.contains('Create Security Group').click(); //Create button
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Template').should('have.text', 'Template');
        cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)');


        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.contains('Create Security Group').click(); //Create button
        cy.get('[name="name"]').clear().type('test-1');
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();


        cy.wait(700);


    })

    it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.contains('Create Security Group').click(); //Create button
        cy.get('[name="name"]').clear();
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');


        cy.wait(700);


    })

    it('validation (User did not select field select. The system displays alert message “ Please select data”', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.contains('Create Security Group').click(); //Create button
        cy.get('[name="name"]').clear().type('test-1');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');


        cy.wait(700);


    })

    it('Usibirities (User click Cancel button. The system closed page.', () => {

        cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.contains('Create Security Group').click(); //Create button
        cy.wait(700);
        cy.contains('Cancel').click();


        cy.wait(700);


    })
})