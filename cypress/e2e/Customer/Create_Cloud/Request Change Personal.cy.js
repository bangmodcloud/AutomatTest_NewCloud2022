describe('Request Change Personal Information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
    })

    it('Usabilities (User click “Request Change“ button on Phone Number card and click Cancel button. The system display Modal “Confirm request change personal information?” close modal.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm request change personal information?')
            .wait(300)
            .contains('button', 'cancel')
            .click();

        cy.wait(700);


    })

    it('Usabilities (User click “Request Change“ button on Phone Number card and User click “Confirm Change” button. The system leads to “Require Confirm Password” page.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm request change personal information?')
            .wait(300)
            .contains('button', 'Confirm change')
            .click();

        cy.wait(700);


    })

    it('Validation (User does not enter Password. The system display alert message “Please input data”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm request change personal information?')
            .wait(300)
            .contains('button', 'Confirm change')
            .click();

        cy.wait(300);
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')

        cy.wait(700);


    })

    it('Validation (User does not enter Text field. The system display alert message “The Password does not match this account.”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm request change personal information?')
            .wait(300)
            .contains('button', 'Confirm change')
            .click();

        cy.wait(300);
        cy.get('#password').type('1111111111')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('The Password does not match this account.')

        cy.wait(700);


    })

    it('Usabilities (User click Icon eye. The system display all characters in the textfield.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm request change personal information?')
            .wait(300)
            .contains('button', 'Confirm change')
            .click();

        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('#hidden-password').click();

        cy.wait(700);


    })

    it('Usabilities ( User enter Password and click “Confirm Change“button. The system leads to Request change personal information page.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm request change personal information?')
            .wait(300)
            .contains('button', 'Confirm change')
            .click();

        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.get('[type="submit"]').click();

        cy.wait(700);


    })

    it('Validation (User does not enter Text field. The system display alert message “Please Input Data”.', () => {

        cy.get('#firstname').clear();
        cy.get('#lastname').clear();
        cy.get('#national-id').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')

        cy.wait(700);

    })

    it('Validation (User entered an invalid National ID. The system display alert message “กรุณากรอกเลขบัตรประจำตัว 13 หลักให้ถูกต้อง”.', () => {

        cy.wait(700);
        cy.get('#national-id').clear().type('11');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณากรอกเลขบัตรประจำตัว 13 หลักให้ถูกต้อง')

        cy.wait(700);

    })

    it('Usabilities (User change personal information and click Submit button. The system go to step Upload documents to verify identity.', () => {

        cy.wait(700);
        cy.get('#firstname').clear().type('qa2');
        cy.get('#lastname').clear().type('test2');
        cy.get('#national-id').clear().type('1120750601733');
        cy.get('[type="submit"]').click();

        cy.wait(700);


    })

    it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample of documents used to verify identity. which will use only the front ID card', () => {

        cy.wait(700);
        cy.get(':nth-child(1) > .content-16-reg > .ml-2').click(); //hyperlink Example1.
        cy.wait(300);
        cy.get('.mt-4 > .content-16-reg > .ml-2').click(); //hyperlink Example2.

        cy.wait(700);


    })

    it('Usabilities (User change image ID card and image verify identity and click submit. The system displays the Wait for staff approved page.', () => {

        cy.wait(700);
        cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/IDcard.png');
        cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/verify.jpg');
        cy.get('[type="submit"]').click();
        cy.wait(300);
       

        cy.wait(700);


    })




})