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
        cy.contains('.card', 'Personal Information').contains('Request Change').click();
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
        cy.contains('.card', 'Personal Information').contains('Request Change').click();
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
        cy.contains('.card', 'Personal Information').contains('Request Change').click();
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
        cy.contains('.card', 'Personal Information').contains('Request Change').click();
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
        cy.contains('.card', 'Personal Information').contains('Request Change').click();
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
        cy.contains('.card', 'Personal Information').contains('Request Change').click();
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

    it('Usabirities (User go to Request change personal information page.Then : The system displayed Field labels as follows:>>"View Test Plan")', () => {

        cy.contains('label', 'คุณเป็นคนสัญชาติไทยใช่หรือไม่? / Thai Nationality ? ').should('have.text', 'คุณเป็นคนสัญชาติไทยใช่หรือไม่? / Thai Nationality ? ');
        cy.contains('label', 'Yes').should('have.text', 'ใช่ / Yes');
        cy.contains('label', 'No').should('have.text', 'ไม่ / No');
        cy.get('[for="firstname"]').should('have.text', 'ชื่อ (กรุณาระบุข้อมูลเป็นภาษาไทย)');
        cy.get('[for="lastname"]').should('have.text', 'นามสกุล (กรุณาระบุข้อมูลเป็นภาษาไทย)');
        cy.get('[for="national-id"]').should('have.text', 'หมายเลขบัตรประจำตัวประชาชน');
        cy.contains('label', 'วันเกิด').should('have.text', 'วันเกิด');
        cy.contains('label', 'ประเทศ').should('have.text', 'ประเทศ');
        cy.contains('label', 'รหัสไปรษณีย์').should('have.text', 'รหัสไปรษณีย์');
        cy.contains('label', 'จังหวัด').should('have.text', 'จังหวัด');
        cy.contains('label', 'เขต/อำเภอ').should('have.text', 'เขต/อำเภอ');
        cy.contains('label', 'แขวง/ตำบล').should('have.text', 'แขวง/ตำบล');
        cy.contains('label', 'ที่อยู่').should('have.text', 'ที่อยู่');
        cy.wait(700);

    })

    it('Usabirities (User click “ไม่” radio : The system displayed Field labels as follows: >>"View Test Plan")', () => {

        cy.get('#no').check();
        cy.contains('label', 'คุณเป็นคนสัญชาติไทยใช่หรือไม่? / Thai Nationality ? ').should('have.text', 'คุณเป็นคนสัญชาติไทยใช่หรือไม่? / Thai Nationality ? ');
        cy.contains('label', 'Yes').should('have.text', 'ใช่ / Yes');
        cy.contains('label', 'No').should('have.text', 'ไม่ / No');
        cy.get('[for="firstname"]').should('have.text', 'First Name');
        cy.get('[for="lastname"]').should('have.text', 'Last Name');
        cy.get('[for="national-id"]').should('have.text', 'Passport Number');
        cy.contains('label', 'Date of birth').should('have.text', 'Date of birth');
        cy.contains('label', 'Place Of Birth').should('have.text', 'Place Of Birth');
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


    it('Usabilities (User change image ID card and image verify identity and click submit. The system displays the Wait for staff approved page.', () => {

        cy.wait(700);
        cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/IDcard.png');
        cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/verify.jpg');
        cy.get('[type="submit"]').click();
        cy.wait(300);


        cy.wait(700);


    })




})