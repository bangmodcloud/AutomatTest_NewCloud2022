describe('Create-SSL-UploadFile .pem', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()

    })

    it('Usabirities (User select File .pem radio.The system displayed Field labels as follows:\
        Upload Certificate card : Upload File Certificate, Attach Files : .pem, .cer and .crt only\
        Upload File Private Key, Attach Files : .pem and .key only', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#pemfile').click();

        cy.contains('.card', 'Upload Certificate').within(() => {
            cy.contains('span', 'Upload File Certificate').should('include.text', 'Upload File Certificate');
            cy.contains('span', 'Attach Files : .pem, .cer and .crt only').should('include.text', 'Attach Files : .pem, .cer and .crt only');
            cy.contains('div', 'Upload File Private Key').should('include.text', 'Upload File Private Key');
            cy.contains('span', 'Attach Files : .pem and .key only').should('include.text', 'Attach Files : .pem and .key only');
        })
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#name').type('test-SSL')
        cy.get('#description').type('Automate testing SSL');
        cy.get('#pemfile').click();

        // Upload File Certificate
        cy.get('[for="pemCertificate"]').selectFile('cypress/fixtures/cert.pem');

        // Upload File Private Key
        cy.get('[for="pemKey"]').selectFile('cypress/fixtures/key.pem');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not enter Name.  The system display alert message “Please input data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#pemfile').click();

        // Upload File Certificate
        cy.get('[for="pemCertificate"]').selectFile('cypress/fixtures/cert.pem');

        // Upload File Private Key
        cy.get('[for="pemKey"]').selectFile('cypress/fixtures/key.pem');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User did not Upload Certificate.  The system display alert message “Please upload a file”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#name').type('test-SSL')
        cy.get('#description').type('Automate testing SSL');
        cy.get('#pemfile').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please upload a file');
        cy.wait(700);


    })

    it('Usabilities (User upload a password-locked file. The system display modal Error . )', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#name').type('test-SSL')
        cy.get('#description').type('Automate testing SSL');
        cy.get('#pemfile').click();

        // Upload File Certificate
        cy.get('[for="pemCertificate"]').selectFile('cypress/fixtures/certificate.pem');

        // Upload File Private Key
        cy.get('[for="pemKey"]').selectFile('cypress/fixtures/private_key.pem');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Error')
        cy.wait(700);


    })

    it('Usabilities (User upload file where the keys of the two files don not match.  The system display modal Error.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.get('#name').type('test-SSL')
        cy.get('#description').type('Automate testing SSL');
        cy.get('#pemfile').click();

        // Upload File Certificate
        cy.get('[for="pemCertificate"]').selectFile('cypress/fixtures/cert.pem');

        // Upload File Private Key
        cy.get('[for="pemKey"]').selectFile('cypress/fixtures/key2.pem');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Error')
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. The system close tab. )', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('[href="/cloud-server/ssl/new"]').click(); //Create SSL
        cy.wait(700);
        cy.contains('Cancel').click();
        cy.wait(700);


    })
})