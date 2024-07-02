describe('Create SSL Certificate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)

    })

    it('Usibirities ( The system displayed field labels : \
        General Information card : Name, Description (Optional), \
        Upload Certificate card : File Format, Upload, Attach Files : .p12 only, maximum file size 5 MB)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.contains('.card', 'General Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name');
            cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)');
        })

        cy.contains('.card', 'Upload Certificate').within(() => {
            cy.contains('div', 'File Format').should('have.text', 'File Format');
            cy.contains('span', 'Upload').should('include.text', 'Upload');
            cy.contains('span', 'Attach Files').should('have.text', 'Attach Files : .p12 only, maximum file size 5 MB');
        })
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#name').clear().type('test-SSL')
        cy.get('#description').type('Automate testing SSL');
        cy.get('[for="p12Certificate"]').click();

        //Upload file to the input field
        cy.get('[for="p12Certificate"]').selectFile('cypress/fixtures/cert1.p12');
        cy.get('div.form-control > label').contains('cert1.p12');
        // cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#name').clear()
        cy.get('#description').type('Automate testing SSL');
        cy.get('div.form-control > label').click();

        //Upload file to the input field
        cy.get('[for="p12Certificate"]').selectFile('cypress/fixtures/cert1.p12');
        cy.get('div.form-control > label').contains('cert1.p12');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User did not Upload Certificate.  The system display alert message “Please upload a file”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#name').clear().type('test-SSL')
        cy.get('#description').type('Automate testing SSL');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please upload a file');
        cy.wait(700);


    })

    it('Validation (User click Cancel button. The system close tab. )', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.wait(700);
        cy.contains('Cancel').click();
        cy.wait(700);


    })
})
