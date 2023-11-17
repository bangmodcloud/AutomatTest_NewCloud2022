describe('Customer / User Verification', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(2000);


    })
    context('Step 1. Specify phone number)', () => {

        it('Validation (User does not enter Phone number. The system display alert message “Please input data”)', () => {
            cy.get('.form-control').click();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')

            cy.wait(700);

        })


        it('Validation (User  enter Phone number and click “Next”. The system will send an OTP number via SMS according to the phone number that has been entered and leads to next step.', () => {
            cy.get('.form-control').type('0882345678');
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })
    })

    context('Step 2. Enter the code received from the SMS)', () => {

        it('Validation (User waits for Countdown 90 seconds. The system displays “Resend” for User to send a new password again.', () => {
            cy.get('.form-control').type('0882345678');
            cy.get('[type="submit"]').click();
            cy.wait(90000);
            cy.get('.link-text').should('be.visible').and('text', 'Resend')
            cy.wait(700);


        })

        it('Validation (User  enter Phone number and click “Next”. The system will send an OTP number via SMS according to the phone number that has been entered and leads to next step.', () => {
            cy.get('.form-control').type('0882345678');
            cy.get('[type="submit"]').click();

            cy.get(':nth-child(1) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('1');
            cy.get(':nth-child(2) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('1');
            cy.get(':nth-child(3) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('1');
            cy.get(':nth-child(4) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('1');
            cy.get(':nth-child(5) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('1');
            cy.get(':nth-child(6) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('1');
            cy.get('.ant-tooltip-inner').contains('Invalid verification code')
            cy.wait(700);

            cy.get(':nth-child(1) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('1');
            cy.get(':nth-child(2) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('2');
            cy.get(':nth-child(3) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('3');
            cy.get(':nth-child(4) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('4');
            cy.get(':nth-child(5) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('5');
            cy.get(':nth-child(6) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('6');
            cy.wait(700);

        })
    })

    context('Step 3. Consent PDPA)', () => {

        it('Usabilities (User click Consent button. The system leads to next step.', () => {

            cy.wait(700);
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })
    })

    context('Step 4. Specify Personal information)', () => {

        it('Validation (User did not specify input field. The system alert message “ Please input data”', () => {


            cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //จังหวัด
            cy.get(':nth-child(1) > .ant-select-item-option-content').click();
            cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //เขต/อำเภอ
            cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
            cy.get(':nth-child(5) > .my-1 > .ant-select > .ant-select-selector').click(); //แขวง/ตำบล
            cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
           
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')
            cy.wait(700);


        })

        it('Validation (User did not specify select field. The system alert message “Please select data”', () => {

            cy.get('#firstname').type('สมศรี');
            cy.get('#lastname').type('หมายจันทร์');
            cy.get('#national-id').type('1103702769461')
            cy.get('.ant-picker-input').type('1999-03-23'+'{enter}');
            cy.get('#postal-code').type('12/34');
            cy.get('.card').click();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please select data')
            cy.wait(700);


        })

        it('Usabilities (User specifies the country and zip code. The rest of the fields are automatically populated except for Address.', () => {

            cy.get(':nth-child(2) > .ant-select > .ant-select-selector').type('10530'+'{enter}' ); //รหัสไปรษณีย์
            cy.get(':nth-child(3) > .ant-select > .ant-select-selector').should('text', 'กรุงเทพมหานคร'); //Province
            cy.get(':nth-child(4) > .ant-select > .ant-select-selector').should('text', 'หนองจอก'); //District / Area

            cy.wait(700);


        })

        it('Usabilities (User chooses No radio Thai Nationally. The system displays a personal information form for foreigners.', () => {

            cy.get('#no').check();
            cy.get('#firstname').should('be.visible');
            cy.get('#lastname').should('be.visible');
            cy.get('#national-id').should('be.visible');
            cy.get('.ant-picker').should('be.visible');
            cy.get('#postal-code').should('be.visible');

        })

        it('Usabilities (User enter User enters personal information completes and click Submit button. The system leads to next step.', () => {

            cy.get('#firstname').type('สมศรี');
            cy.get('#lastname').type('หมายจันทร์');
            cy.get('#national-id').type('1103702769461')
            cy.get('.ant-picker-input').type('1999-03-23'+'{enter}');
            cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //จังหวัด
            cy.get(':nth-child(1) > .ant-select-item-option-content').click();
            cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //เขต/อำเภอ
            cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
            cy.get(':nth-child(5) > .my-1 > .ant-select > .ant-select-selector').click(); //แขวง/ตำบล
            cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
            cy.get('#postal-code').type('12/34');
            cy.get('[type="submit"]').click();
            cy.wait(1000);


        })
    })
    context('Step 5. Upload Document to verify identity (Identity document upload form for Thai nationality)', () => {
        context('Thai Nation ID Card', () => {

            it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample of documents used to verify identity. which will use only the front ID card', () => {

                cy.get('[href="/asset/img/nationality-card.svg"]').click()
                cy.wait(700);


            })

            it('Usabilities (User press to select text “Drag and place the file here or click to upload”. The system popup the user to select a file to upload.', () => {

                cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/IDcard.png');

                cy.wait(700);


            })
        })

        context('Selfie with Thai National ID Card', () => {

            it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample of documents used to verify identity. which will use only the front ID card', () => {

                cy.get('[href="/asset/img/selfie.svg"]').click()
                cy.wait(700);


            })

            it('Usabilities (User press to select text “Drag and place the file here or click to upload”. The system popup the user to select a file to upload.', () => {

                cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/pictureWithIDcard.jpg');

                cy.wait(700);


            })

        })
    })

    context('Step 5. Upload Document to verify identity (Identity document upload form for foreigners)', () => {
        context('Passport ', () => {

            it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample page of documents used to verify identity.', () => {

                cy.contains('Back').click();
                cy.get('#no').click();
                cy.get('#firstname').clear().type('Yoongi');
                cy.get('#lastname').clear().type('Min');
                cy.get('[type="submit"]').click();
                cy.get('[href="/asset/img/passport.svg"]').click();
                cy.wait(700);


            })
       

            it('Usabilities (User press to select text “Drag and place the file here or click to upload”. The system popup the user to select a file to upload.', () => {

                cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/IDcard.png');

                cy.wait(700);


            })
        })

        context('Selfie with Passport ', () => {

            it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample page of taking a photo of your face with Passport.', () => {

                cy.get('[href="/asset/img/selfie-with-passport.svg"]').click();
                cy.wait(700);


            })

            it('Usabilities (User press to select text “Drag and place the file here or click to upload”. The system popup the user to select a file to upload.', () => {

                cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/pictureWithIDcard.jpg');

                cy.wait(700);


            })

            it('Usabilities (User upload images without a file extension. The system display validate “Please upload a "jpeg, .jpg, .png" file.”', () => {

                cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/card');
                cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/card');
                cy.get('[type="submit"]').click();
                cy.get('.text-danger').contains('Please upload a "jpeg, .jpg, .png" file.')

                cy.wait(700);


            })

            it('Usabilities (User has successfully uploaded all 2 files and click submit. The system displays the Wait for staff approved page.', () => {

                cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/IDcard.png');
                cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/pictureWithIDcard.jpg');
                cy.get('[type="submit"]').click();

                cy.wait(700);


            })
        })
    })
})