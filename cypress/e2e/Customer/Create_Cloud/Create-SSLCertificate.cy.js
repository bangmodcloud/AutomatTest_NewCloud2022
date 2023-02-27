describe('Create SSL Certificate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.app_renderer_common_button__common-button-style > .btn').click(); //Create SSL
        cy.get('#name').type('test-SSL')
        cy.get('#description').type('Automate testing SSL');
        cy.get('div.form-control > label').click();

        //Upload file to the input field
        cy.get("input[type=file]").attachFile("cert (1).p12")
        cy.get('div.form-control > label').contains('cert (1).p12');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.app_renderer_common_button__common-button-style > .btn').click(); //Create SSL
        cy.get('#description').type('Automate testing SSL');
        cy.get('div.form-control > label').click();

        //Upload file to the input field
        cy.get("input[type=file]").attachFile("cert (1).p12")
        cy.get('div.form-control > label').contains('cert (1).p12');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User did not Upload Certificate.  The system display alert message “Please upload a file”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.app_renderer_common_button__common-button-style > .btn').click(); //Create SSL
        cy.get('#name').type('test-SSL')
        cy.get('#description').type('Automate testing SSL');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please upload a file');
        cy.wait(700);


    })

    it('Validation (User click Cancel button. The system close tap. )', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.app_renderer_common_button__common-button-style > .btn').click(); //Create SSL
        cy.wait(700);
        cy.get('small').click();
        cy.wait(700);


    })
})