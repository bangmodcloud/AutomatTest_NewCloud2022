describe('Request Change Phone Number', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

    it('Validation (User does not enter Password. The system display alert message “Please input data”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.wait(300);
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
       
        
        cy.wait(700);


    })

    it('Validation (User does not enter Text field. The system display alert message “The Password does not match this account.”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
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
        cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('#hidden-password').click();
       
        cy.wait(700);


    })

    it('Usabilities ( User enter Password and click “Confirm Change“button. The system leads to Request change email page.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.get('[type="submit"]').click();
       
        cy.wait(700);


    })

    it('Validation (User does not enter Phon Number. The system display alert message “Please input data”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.get('[type="submit"]').click();
        cy.wait(300);
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
       
        cy.wait(700);


    })

    it('Validation (User entered an invalid phone number. The system display alert message “กรุณาระบุเบอร์โทรศัพท์ให้ถูกต้อง”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.get('[type="submit"]').click();
        cy.wait(300);
        cy.get('#phone').type('01')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุเบอร์โทรศัพท์ให้ถูกต้อง')
       
        cy.wait(700);


    })

    it('Usabilities (User enter new Email and click Next. The system leads to steb Verify new phone number.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.get('[type="submit"]').click();
        cy.wait(300);
        cy.get('#phone').type('0122234567')
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(1) > .app_renderer_nt_lib_otp__otp-input-styles').eq(1).type('1');
        cy.get(':nth-child(2) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get(':nth-child(3) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get(':nth-child(4) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get(':nth-child(5) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get(':nth-child(6) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        
        cy.get('.text-danger').contains('Invalid verification code')
        cy.wait(20000)
        cy.get(':nth-child(1) > .app_renderer_nt_lib_otp__otp-input-styles').eq(1).type('1');
        cy.get(':nth-child(2) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get(':nth-child(3) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get(':nth-child(4) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get(':nth-child(5) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get(':nth-child(6) > .app_renderer_nt_lib_otp__otp-input-styles').type('1');
        cy.get('.alert').contains('The code has expired, please resend the code.')
        cy.get('.link-text').click();
        cy.wait(300);
        cy.get(':nth-child(1) > .app_renderer_nt_lib_otp__otp-input-styles').eq(1).type('1');
        cy.get(':nth-child(2) > .app_renderer_nt_lib_otp__otp-input-styles').type('2');
        cy.get(':nth-child(3) > .app_renderer_nt_lib_otp__otp-input-styles').type('3');
        cy.get(':nth-child(4) > .app_renderer_nt_lib_otp__otp-input-styles').type('4');
        cy.get(':nth-child(5) > .app_renderer_nt_lib_otp__otp-input-styles').type('5');
        cy.get(':nth-child(6) > .app_renderer_nt_lib_otp__otp-input-styles').type('6');
       
        cy.wait(700);


    })

    
})