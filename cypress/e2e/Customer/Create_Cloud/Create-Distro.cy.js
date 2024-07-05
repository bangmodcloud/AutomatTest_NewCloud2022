describe('Create Distro', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities ( The system displayed field labels :Name, Distro Logo,\
        Attached files :Upload a JPG, PNG, or SVG image size 100x100 px.,\
        Description (Optional and will not be displayed on the customer side),\
        Size Plan, Minimum Disk Required, Cloud-init (omit #cloud config), Supported Authentication Method, Published )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.contains('Create Distro').click();
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Distro Logo').should('have.text', 'Distro Logo');
        cy.contains('label', 'Attach file :').should('have.text', 'Attach file :');
        cy.contains('label', 'Upload a JPG, PNG, or SVG image size 100x100 px.').should('have.text', 'Upload a JPG, PNG, or SVG image size 100x100 px.');
        cy.contains('label', 'Description').should('have.text', 'Description (Optional and will not be displayed on the customer side)');
        cy.contains('label', 'Size Plan').should('have.text', 'Size Plan');
        cy.contains('label', 'Minimum Disk Required').should('have.text', 'Minimum Disk Required');
        cy.contains('label', 'Cloud-init (omit #cloud config)').should('have.text', 'Cloud-init (omit #cloud config)');
        cy.contains('label', 'Supported Authentication Method').should('have.text', 'Supported Authentication Method');
        cy.contains('label', 'Published').should('have.text', 'Published');
        cy.wait(700);

    })

    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.contains('Create Distro').click();
        cy.get('#upload-files').selectFile('cypress/fixtures/logo.png');
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.contains('Create Distro').click();
        cy.get('#upload-files').selectFile('cypress/fixtures/logo.png');
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Validation (Admin does not enter selectfield.  The system display alert messsage “ Please select data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows');
        cy.get('[name="description"]').type('Test distro')
        cy.get('#upload-files').selectFile('cypress/fixtures/logo.png');
        cy.get('#amount').type('30');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);

    })

    it('Validation (Admin does not Upload Logo.  The system display alert message “Please Upload Logo” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows');
        cy.get('[name="description"]').type('Test distro')
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#amount').type('30');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please Upload Logo');
        cy.wait(700);

    })

    it('Validation (Admin upload image file exceeds the specified size.  The system display alert message “Image size must be 100 x 100 pixels.” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows');
        cy.get('[name="description"]').type('Test distro')
        cy.get('#upload-files').selectFile('cypress/fixtures/logo2.png');
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#amount').type('30');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Image size must be 100 x 100 pixels.');
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows');
        cy.get('[name="description"]').type('Test distro')
        cy.get('#upload-files').selectFile('cypress/fixtures/logo2.png');
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#amount').type('30');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    it('Validation (Admin check Support SSH Key.  The system create Distro that supports SSH keys.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/distro"]').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows2');
        cy.get('[name="description"]').type('Test distro')
        cy.get('#upload-files').selectFile('cypress/fixtures/logo.png');
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#amount').type('30');
        cy.get('#enable-ssh').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})