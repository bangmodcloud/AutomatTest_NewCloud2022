
describe('Delete my account', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(3000)
    })

    it('Usabilities (User click “Delete your account“ button on Delete account card. The system leads to “Confirm Password” page.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();

        cy.wait(700);


    })

    it('Validation (User does not enter Password. The system display alert message “Please input data”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('[type="submit"]').click();
        cy.get('#password-error').contains('Please input data.')

        cy.wait(700);


    })

    it('Validation (User does not enter invalid Password. The system display alert message “The password does not match this account.”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('#password').type('1111111111')
        cy.get('[type="submit"]').click();
        cy.get('#password-error').contains('The password does not match this account.')

        cy.wait(700);


    })

    it('Usabilities (User click Icon eye. The system display all characters in the textfield.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('#hidden-password').click();

        cy.wait(700);


    })

    it('Usabilities (User enter Password and click “Next“button. The system leads to Confirm Delete Account page.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('[type="submit"]').click();

        cy.wait(700);


    })

    it('Usabilities (User does not check All Checkbox. The system disble Confirm delete my account button.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('[type="submit"]').click();
        cy.wait(200);
        cy.contains('Confirm delete my account').should('be.disabled')

        cy.wait(700);


    })

    it('Validation (User does not enter fieldtext. The system display alert message “Please input data”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('[type="submit"]').click();
        cy.wait(200);
        cy.get('#username-or-email').click();
        cy.get('#confirm-delete').click();
        cy.get('#username-or-email').click();
        cy.get('.text-danger').contains('Please input data')

        cy.wait(700);


    })

    it('Validation (User entered an invalid Email. The system display alert message “This Username or Email could not be found in the system.”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('[type="submit"]').click();
        cy.wait(200);
        cy.get('#username-or-email').type('test')
        cy.get('#confirm-delete').click();
        cy.get('.text-danger').contains('This Username or Email could not be found in the system.')

        cy.wait(700);


    })

    it('Validation (User entered an invalid TextCode. The system display alert message “You entered incorrect text.”.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('[type="submit"]').click();
        cy.wait(200);
        cy.get('#confirm-delete').type('test');
        cy.get('#username-or-email').click();
        cy.get('.text-danger').contains('You entered incorrect text.')

        cy.wait(700);


    })


    it('Usabilities (User completes the details and click “Confirm delete my account“button. The system redirect to login page.', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('Delete your account').click();
        cy.wait(300);
        cy.get('#password').type('769461Pla-')
        cy.wait(200);
        cy.get('[type="submit"]').click();
        cy.wait(200);
        cy.get('[name="term-1"]').check();
        cy.get('[name="term-2"]').check();
        cy.get('[name="term-3"]').check();
        cy.get('[name="term-4"]').check();
        cy.get('#username-or-email').type('Heesueng');
        cy.get('#confirm-delete').type('delete my account');
        cy.contains('Confirm delete my account').click();
        cy.wait(1000);
        cy.get('#username').type('Heesueng');
        cy.get('#password').type('769461Pla-');
        cy.get('.btn').click();
        cy.get('#username-error').contains('This email or username was not found in the system.')

        cy.wait(700);


    })
})