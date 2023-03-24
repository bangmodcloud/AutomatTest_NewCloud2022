describe('Customer / User Verification', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(3000);


    })
    context('Step 1. Specify phone number)', () => {

        it('Validation (User does not enter Phone number. The system display alert message “Please input data”)', () => {
            cy.get('.form-control').click();
            cy.get('.align-item-center > .card').click();
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
            cy.get('.ant-tooltip-inner').contains('Invalid code. Please try again.')
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


            cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
            cy.get('[title="Bangkok"]').click();
            cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
            cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
            cy.get(':nth-child(5) > .ant-select > .ant-select-selector').click(); //Sub-district / Sub-area
            cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')
            cy.wait(700);


        })

        it('Validation (User did not specify select field. The system alert message “Please select data”', () => {

            cy.get('#firstname').type('Yoongi');
            cy.get('#lastname').type('Min');
            cy.get('#identifier-number').type('1234224536571')
            cy.get('#date').type('1999-03-23');
            cy.get('#postal-code').type('12/34');
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please select data')
            cy.wait(700);


        })

        it('Usabilities (User specifies the country and zip code. The rest of the fields are automatically populated except for Address.', () => {

            cy.get(':nth-child(2) > .ant-select > .ant-select-selector').type('10530'); //Province
            cy.get('.ant-select-item').click();
            cy.get(':nth-child(3) > .ant-select > .ant-select-selector').should('text', 'Bangkok'); //Province
            cy.get(':nth-child(4) > .ant-select > .ant-select-selector').should('text', 'Nong Chok'); //District / Area

            cy.wait(700);


        })

        it('Usabilities (User chooses No radio Thai Nationally. The system displays a personal information form for foreigners.', () => {

            cy.get('#no').check();
            cy.get('#firstname').should('be.visible');
            cy.get('#lastname').should('be.visible');
            cy.get('#national-id').should('be.visible');
            cy.get('#date').should('be.visible');
            cy.get('#postal-code').should('be.visible');

        })

        it('Usabilities (User enter User enters personal information completes and click Submit button. The system leads to next step.', () => {

            cy.get('#firstname').type('Yoongi');
            cy.get('#lastname').type('Min');
            cy.get('#identifier-number').type('1234224536571')
            cy.get('#date').type('1999-03-23');
            cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
            cy.get('[title="Bangkok"]').click();
            cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
            cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
            cy.get(':nth-child(5) > .ant-select > .ant-select-selector').click(); //Sub-district / Sub-area
            cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
            cy.get('#postal-code').type('12/34');
            cy.get('[type="submit"]').click();
            cy.wait(700);


        })
    })
    context('Step 5. Upload Document to verify identity (Identity document upload form for Thai nationality)', () => {
        context('Thai Nation ID Card', () => {

            it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample of documents used to verify identity. which will use only the front ID card', () => {

                cy.get(':nth-child(1) > .content-16-reg > .ml-2').invoke('removeAttr', 'target').click();
                cy.wait(700);


            })

            it('Usabilities (User press to select text “Drag and place the file here or click to upload”. The system popup the user to select a file to upload.', () => {

                cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/Exam1.jpeg');

                cy.wait(700);


            })
        })

        context('Selfie with Thai National ID Card', () => {

            it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample of documents used to verify identity. which will use only the front ID card', () => {

                cy.get('.mt-4 > .content-16-reg > .ml-2').invoke('removeAttr', 'target').click();
                cy.wait(700);


            })

            it('Usabilities (User press to select text “Drag and place the file here or click to upload”. The system popup the user to select a file to upload.', () => {

                cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/Exam1.jpeg');

                cy.wait(700);


            })

            it('Usabilities (User dose not upload file. Submit button = Disable', () => {

                cy.get('[type="submit"]').should('be.disabled');

                cy.wait(700);


            })
        })
    })

    context('Step 5. Upload Document to verify identity (Identity document upload form for foreigners)', () => {
        context('Passport ', () => {

            it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample page of documents used to verify identity.', () => {

                cy.get('.vars-1454168680 > .btn').click();
                cy.get('#no').click();
                cy.get('[type="submit"]').click();
                cy.get(':nth-child(1) > .content-16-reg > .ml-2').invoke('removeAttr', 'target').click();
                cy.wait(700);


            })

            it('Usabilities (User press to select text “Drag and place the file here or click to upload”. The system popup the user to select a file to upload.', () => {

                cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/Exam1.jpeg');

                cy.wait(700);


            })
        })

        context('Selfie with Passport ', () => {

            it('Usabilities (User click hyperlink Example. The system Openlink new tab display sample page of taking a photo of your face with Passport.', () => {

                cy.get('.mt-4 > .content-16-reg > .ml-2').invoke('removeAttr', 'target').click();
                cy.wait(700);


            })

            it('Usabilities (User press to select text “Drag and place the file here or click to upload”. The system popup the user to select a file to upload.', () => {

                cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/Exam1.jpeg');

                cy.wait(700);


            })

            it('Usabilities (User has successfully uploaded all 2 files and click submit. The system displays the Wait for staff approved page.', () => {

                cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/Exam1.jpeg');
                cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/Exam1.jpeg');
                cy.get('[type="submit"]').click();

                cy.wait(700);


            })
        })
    })
})