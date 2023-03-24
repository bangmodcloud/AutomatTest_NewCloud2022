describe('Manage User / Request to Edit [Customer]', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(3000);

    })

        it('Validation (User go to the step that the admin wants the user to edit. The system display message in Card Staff Request.)', () => {
            cy.get('.card-body > :nth-child(1)').should('be.visible');
            cy.get('.card-body > :nth-child(2)').should('be.visible');
            cy.wait(700);

        })

        it('Validation (User edit User enter Phone number and click “Next”. If there are more than one step to Edit . The system leads to the next step to Edit.)', () => {
            cy.get('.form-control').type('0999345678');
            cy.get('[type="submit"]').click();

            cy.get(':nth-child(1) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('1');
            cy.get(':nth-child(2) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('2');
            cy.get(':nth-child(3) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('3');
            cy.get(':nth-child(4) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('4');
            cy.get(':nth-child(5) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('5');
            cy.get(':nth-child(6) > .app_renderer_nt_kyc_new_step2-sms-otp__otp-input-styles').type('6');
            cy.wait(700);

        })

        it('Validation (User Edit Document and click submit. If there are more than one step to Edit . The system leads to the next step to Edit.)', () => {
    
            cy.get('[for="identifierImage"]').selectFile('cypress/fixtures/Exam2.jpeg');
            cy.get('[for="selfieWithIdentifierImage"]').selectFile('cypress/fixtures/Exam1.jpeg');
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })
    })