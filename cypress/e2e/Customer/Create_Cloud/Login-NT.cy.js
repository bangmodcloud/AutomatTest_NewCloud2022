describe('Login NT Flow ', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.wait(1000)

        cy.intercept({
            url: 'https://web-test.bangmod.cloud/auth/login',
            method: 'GET',
        }).as("User")

        cy.visit('https://web-test.bangmod.cloud/auth/login')
    })

    it('Action success', () => {

            cy.get('#username').type('qa@gmail.com');
            cy.get('#password').type('123456');
            cy.get('.btn').click();


            cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
            cy.get('.d-flex > :nth-child(2)').type('2');
            cy.get('.d-flex > :nth-child(3)').type('3');
            cy.get('.d-flex > :nth-child(4)').type('4');
            cy.get('.d-flex > :nth-child(5)').type('5');
            cy.get('.d-flex > :nth-child(6)').type('6');


    })

    it('Validation (User does not enter Username and Password. The system display alert message “Please input data”)', () => {


            cy.get('.btn').click();
            cy.get('.text-danger').contains('Please input data')

    })

        it('Usabilities (User click “Sign up“ is a hyperlink. The system leads to Registration page.)', () => {

            cy.get('[href="https://web-test.bangmod.cloud/registration"]').click();

    })


    it('Usabilities (User click “เข้าสู่ระบบ”  The system will perform two factor authentication. by sending a verification code to your email)', () => {

        cy.get('#username').type('qa@gmail.com');
        cy.get('#password').type('123456');
        cy.get('.btn').click();
    })

    it('Validation  (User enters a code that does not match the code sent by the system. The system alert message “ Invalid verification code”)', () => {

        cy.get('#username').type('qa@gmail.com');
        cy.get('#password').type('123456');
        cy.get('.btn').click();

        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('1');
        cy.get('.d-flex > :nth-child(3)').type('1');
        cy.get('.d-flex > :nth-child(4)').type('1');
        cy.get('.d-flex > :nth-child(5)').type('1');
        cy.get('.d-flex > :nth-child(6)').type('1');
        cy.get('.alert').contains('Invalid code. Please try again.')
        cy.wait(700)
    })

    it('Validation  (User Enter Code Expired.  The system alert message “The code has expired, please resend the code.”)', () => {

        cy.get('#username').type('qa@gmail.com');
        cy.get('#password').type('123456');
        cy.get('.btn').click();

        cy.wait(20000)
        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('1');
        cy.get('.d-flex > :nth-child(3)').type('1');
        cy.get('.d-flex > :nth-child(4)').type('1');
        cy.get('.d-flex > :nth-child(5)').type('1');
        cy.get('.d-flex > :nth-child(6)').type('1');
        cy.get('.alert').contains('The code has expired, please resend the code.')
        cy.wait(700)
    })

    it('Usabilities (User login Customer Account that has not passed KYC Process. The system opens the User Verification page.)', () => {

        cy.get('#username').type('qa@gmail.com');
        cy.get('#password').type('123456');
        cy.get('.btn').click();

        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');
        cy.wait(2000);
    })

    it('Usabilities (User login Customer Account that has passed KYC Process. The system leads to website and display modal “ความยินยอมข้อมูลส่วนบุคคลของคุณ”.)', () => {

        cy.get('#username').type('qa@gmail.com');
        cy.get('#password').type('123456');
        cy.get('.btn').click();

        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');
        cy.wait(2000);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ความยินยอมข้อมูลส่วนบุคคลของคุณ')
        cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').first().click();
        cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').first().click();
    })
})