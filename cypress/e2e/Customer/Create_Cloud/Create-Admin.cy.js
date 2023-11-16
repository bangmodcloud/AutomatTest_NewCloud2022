
describe('Create Admin', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })



    it('Validation (User does not enter Text field. The system display alert message “Please Input Data”.', () => {

        cy.get('#all-staff').click();
        cy.contains('Create Admin').click();

        cy.get('#password').type('Testernbangmod01-');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(700);

    })

    it('Validation (User does not enter duplicate email in the system. The system display alert message “Do not duplicate emails in the system.”.', () => {

        cy.get('#all-staff').click();
        cy.contains('Create Admin').click();

        cy.get('#email').type('admin@bangmod.cloud');
        cy.get('#password').type('Testernbangmod01-');
        cy.get('.text-danger').contains('Do not duplicate emails in the system')
        cy.wait(700);

    })

    it('Validation (User enter password less than 8 characters. The system display alert message “Please enter at least 8 characters.”.', () => {


        cy.get('#all-staff').click();
        cy.contains('Create Admin').click();

        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('T');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('Please enter at least 8 characters.')
        cy.wait(700);

    })

    it('Validation (User enter password without lowercase letters. The system display alert message “It must contain at least one lowercase letter.”', () => {


        cy.get('#all-staff').click();
        cy.contains('Create Admin').click();

        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('12345678T');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('It must contain at least one lowercase letter.')
        cy.wait(700);

    })

    it('Validation (User enter password without uppercase letter. The system display alert message “It must contain at least one uppercase letter.”', () => {


        cy.get('#all-staff').click();
        cy.contains('Create Admin').click();

        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('1234567t');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('It must contain at least one uppercase letter.')
        cy.wait(700);

    })

    it('Validation (User enter password without special character. The system display alert message “There must be at least one special character.”', () => {


        cy.get('#all-staff').click();
        cy.contains('Create Admin').click();

        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('1234567Test');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('There must be at least one special character.')
        cy.wait(700);

    })

    it('Validation (User enter password without numbers.. The system display alert message “There must be at least one number.”', () => {


        cy.get('#all-staff').click();
        cy.contains('Create Admin').click();

        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('Testernbangmod-');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('There must be at least one number.')
        cy.wait(700);

    })

     it('Action success', () => {


        cy.get('#all-staff').click();
        cy.contains('Create Admin').click();
        cy.get('#email').type('tester@bangmod.cloud');
        cy.get('#password').type('Testernbangmod01-');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    it('Usabilities (Admin creaet admin account succeed. The system display role in column role on list Admin page.', () => {


        cy.get('#all-staff').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .app_renderer_nt_lib_style__nt-status > .status').should('have.text','Admin')
        cy.wait(700);

    })

    it('Usabilities (Admin creaet admin account succeed and go to Manage Admin page. The system display role on Head title.', () => {


        cy.get('#all-staff').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('.mt-3 > :nth-child(3)').should('have.text','Admin')
        cy.wait(700);

    })


})

describe('Admin try login account Activate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.wait(1000)

        cy.intercept({
            url: 'https://office-test.bangmod.cloud/auth/login',
            method: 'GET',
        }).as("Admin")

        cy.visit('https://office-test.bangmod.cloud/auth/login')
    })

    it('Usabilities (Admin login account admin that was just created. The system display role next to Profile.', () => {

        cy.get('#username').type('waratest11@gmail.com');
        cy.get('#password').type('Qatest01-');
        cy.get('.btn').click();

        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');

        cy.wait(2000);
        cy.get('.ml-3 > :nth-child(1) > .app_renderer_nt_lib_style__nt-status > .status').should('have.text', 'Super Admin');

    })
  
})