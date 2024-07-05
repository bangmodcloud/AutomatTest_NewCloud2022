describe('Manage Distro / Edit Distro Information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities ( The system displayed field labels :Name, Description, Size Plan, Minimum Disk Required (GB), \
        Cloud Init, Supported Authentication Method)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Description').should('have.text', 'Description');
        cy.contains('label', 'Size Plan').should('have.text', 'Size Plan');
        cy.contains('label', 'Minimum Disk Required (GB)').should('have.text', 'Minimum Disk Required (GB)');
        cy.contains('label', 'Cloud Init').should('have.text', 'Cloud Init');
        cy.contains('label', 'Supported Authentication Method').should('have.text', 'Supported Authentication Method');
        cy.wait(700);

    })

    it('Usibirities ( The system displayed field labels :Name, Distro Logo,\
        Attached files :Upload a JPG, PNG, or SVG image size 100x100 px.,\
        Description (Optional and will not be displayed on the customer side),\
        Size Plan, Minimum Disk Required, Cloud-init (omit #cloud config), Supported Authentication Method, Published )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Distro Logo').should('have.text', 'Distro Logo');
        cy.contains('span', 'Attach file :').should('have.text', 'Attach file :');
        cy.contains('span', 'Only 1 image .jpg or .png').should('have.text', 'Only 1 image .jpg or .png');
        cy.contains('label', 'Description').should('have.text', 'Description (Optional and will not be displayed on the customer side)');
        cy.contains('label', 'Size Plan').should('have.text', 'Size Plan');
        cy.contains('label', 'Minimum Disk Required').should('have.text', 'Minimum Disk Required');
        cy.contains('label', 'Cloud Init (omit #cloud config)').should('have.text', 'Cloud Init (omit #cloud config)');
        cy.contains('label', 'Supported Authentication Method').should('have.text', 'Supported Authentication Method');
        cy.wait(700);

    })

    it('Usibilities (The system set Size Plan and Support SSH Key = Disabled.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.get('[name="sizePlanId"]').should('be.disabled');
        cy.get('#enable-ssh').should('be.disabled');


        cy.wait(700);

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        cy.get('#amount').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(700);

    })

    it('Validation (Admin does not Upload Logo.  The system display alert message “Please Upload Logo” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.get('.img-banner > .fas').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please Upload Logo');

        cy.wait(700);

    })

    it('Validation (Admin upload image file exceeds the specified size.  The system display alert message “Image size must be 100 x 100 pixels.” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.get('#upload-files').selectFile('cypress/fixtures/logo2.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Image size must be 100 x 100 pixels.');

        cy.wait(700);

    })

    it('Validation (Admin click Cancel button.  The system display modal “Leave Site ?.”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Leave Site ?')
            .wait(300)
            .contains('button', 'Leave')
            .click();


        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.get('.underline-link').first().click();
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('Linux');
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })
})