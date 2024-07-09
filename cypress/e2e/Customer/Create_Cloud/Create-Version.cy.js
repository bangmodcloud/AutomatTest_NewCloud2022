describe('Create Version', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it("Usibirities ( The system displayed field labels :Name,\
        Description (Optional and will not be displayed on the customer side),\
        Image ID, Remote User, Using the Distro's Cloud init, Add Command Cloud-initPublished )", () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.wait(700);
        cy.get('.underline-link').first().click();
        cy.wait(500);
        cy.contains('Create Version').click();
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Description').should('have.text', 'Description (Optional and will not be displayed on the customer side)');
        cy.contains('label', 'Image ID').should('have.text', 'Image ID');
        cy.contains('label', 'Remote User').should('have.text', 'Remote User');
        cy.contains('label', "Using the Distro's Cloud init").should('have.text', "Using the Distro's Cloud init");
        cy.contains('label', 'Add Command Cloud-init').should('have.text', 'Add Command Cloud-init');
        cy.contains('label', 'Published').should('have.text', 'Published');
        cy.wait(700);

    })

    it("Usibirities ( Admin click Add Command Cloud-init radio. The system displayed field labels : Cloud-init (omit #cloud config))", () => {

        y.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.wait(700);
        cy.get('.underline-link').first().click();
        cy.wait(500);
        cy.contains('Create Version').click();
        cy.get('#addCommand').click();
        cy.contains('label', "Cloud-init (omit #cloud config)").should('have.text', "Cloud-init (omit #cloud config)");
        cy.wait(1000);

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.wait(700);
        cy.get('.underline-link').first().click();
        cy.wait(500);
        cy.contains('Create Version').click();
       
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(1000);

    })

    it('Usabilities (Admin select radio “เพิ่ม Command Cloud Init เอง”. The system display text area “Cloud Init”.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.wait(700);
        cy.get('.underline-link').first().click();
        cy.wait(500);
        cy.contains('Create Version').click();
        cy.get('[name="name"]').type('Windows 11');
        cy.get('[name="description"]').type('test create version');
        cy.get('[name="imageId"]').type('2d9bb53f-70ea-4066-a68b-67960eaae673');
        cy.get('[name="remoteUser"]').type('centos');
        cy.get('#addCommand').click(); //เพิ่ม Command Cloud Init เอง
        cy.get('#additional-config').should('be.visible');
    

        cy.wait(1000);

    })

    it('Validation (Admin click Cancel button.  The system closed Edit.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.wait(700);
        cy.get('.underline-link').first().click();
        cy.wait(500);
        cy.contains('Create Version').click();
        cy.wait(300);
        cy.contains('Cancel').click();

        cy.wait(1000);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.wait(700);
        cy.get('.underline-link').first().click();
        cy.wait(500);
        cy.contains('Create Version').click();
        cy.get('[name="name"]').type('Windows 11');
        cy.get('[name="description"]').type('test create version');
        cy.get('[name="imageId"]').type('2d9bb53f-70ea-4066-a68b-67960eaae673');
        cy.get('[name="remoteUser"]').type('centos');
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })
})