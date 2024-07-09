describe('Version / Manage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it("Usibirities ( The system displayed field labels :Name,Description,\
        Image ID, Remote User,Cloud Init)", () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(1000);
        cy.get('.ant-table-row > :nth-child(2) > .underline-link').click();
        cy.wait(700);
        cy.contains('label', "ID").should('have.text', "ID");
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Description').should('have.text', 'Description');
        cy.contains('label', 'Image ID').should('have.text', 'Image ID');
        cy.contains('label', 'Remote User').should('have.text', 'Remote User');
        cy.contains('label', 'Cloud Init').should('have.text', 'Cloud Init');

        cy.wait(1000);

    })

    it("Usibirities ( Admin click Edit button. The system displayed field labels :Name,\
        Description (Optional and will not be displayed on the customer side),\
        Image ID, Remote User, Using the Distro's Cloud init,Cloud Init)", () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(1000);
        cy.get('.ant-table-row > :nth-child(2) > .underline-link').click();
        cy.wait(700);
        cy.contains('Edit').click();
        cy.contains('label', "ID").should('have.text', "ID");
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Description').should('have.text', 'Description (Optional and will not be displayed on the customer side)');
        cy.contains('label', 'Image ID').should('have.text', 'Image ID');
        cy.contains('label', 'Remote User').should('have.text', 'Remote User');
        cy.contains('label', 'Cloud init').should('have.text', 'Cloud init');
        cy.contains('label', "Using the Distro's Cloud init").should('have.text', "Using the Distro's Cloud init");
        cy.contains('label', 'Add Command Cloud-init').should('have.text', 'Add Command Cloud-init');

        cy.wait(1000);

    })

    it("Usibirities ( Admin click Add Command Cloud-init radio. The system displayed field labels : Cloud-init (omit #cloud config))", () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(1000);
        cy.get('.ant-table-row > :nth-child(2) > .underline-link').click();
        cy.wait(700);
        cy.contains('Edit').click();
        cy.get('#addCommand').click();
        cy.contains('label', "Cloud-init (omit #cloud config)").should('have.text', "Cloud-init (omit #cloud config)");
        cy.wait(1000);

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(1000);
        cy.get('.ant-table-row > :nth-child(2) > .underline-link').click();
        cy.wait(700);
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        cy.get('[name="imageId"]').clear();
        cy.get('[name="remoteUser"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(1000);

    })

    it('Validation (Admin doesenter Image ID field incorrectly. The system display alert message “Please enter the correct information according to the format.”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(1000);
        cy.get('.ant-table-row > :nth-child(2) > .underline-link').click();
        cy.wait(700);
        cy.contains('Edit').click();
        cy.get('[name="imageId"]').clear().type('1');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter the correct information according to the format.');

        cy.wait(1000);

    })

    it('Usabilities (Admin select radio “เพิ่ม Command Cloud Init เอง”. The system display text area “Cloud Init”.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(1000);
        cy.get('.ant-table-row > :nth-child(2) > .underline-link').click();
        cy.wait(700);
        cy.contains('Edit').click();
        cy.get('#addCommand').click(); //เพิ่ม Command Cloud Init เอง
        cy.get('#additional-config').should('be.visible');


        cy.wait(1000);

    })

    it('Validation (Admin click Back button.  The system display modal “Leave Site ?.”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(1000);
        ccy.get('.ant-table-row > :nth-child(2) > .underline-link').click();
        cy.wait(700);
        cy.contains('Edit').click();
        cy.wait(500);
        cy.get('.back-to-main-page').click({ force: true });
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Leave Site ?')
            .wait(300)
            .contains('button', 'Leave')
            .click();

        cy.wait(1000);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(1000);
        cy.get('.ant-table-row > :nth-child(2) > .underline-link').click();
        cy.wait(700);
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('Windows 12');
        cy.get('[name="imageId"]').clear().type('0cac7f4c-c7c6-4280-83da-721a6c83c8aa');
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })
})