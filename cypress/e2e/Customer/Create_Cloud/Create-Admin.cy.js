
describe('Create Admin', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

   

    it('Validation (User does not enter Text field. The system display alert message “Please Input Data”.', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get('[href="/user_management/staff/new"]').click();

        cy.get('#password').type('Testernbangmod01-');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(700);

    })

    it('Validation (User does not enter duplicate email in the system. The system display alert message “Do not duplicate emails in the system.”.', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get('[href="/user_management/staff/new"]').click();
      
        cy.get('#email').type('admin@bangmod.cloud');
        cy.get('#password').type('Testernbangmod01-');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Do not duplicate emails in the system')
        cy.wait(700);

    })

    it('Validation (User enter password less than 8 characters. The system display alert message “Please enter at least 8 characters.”.', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get('[href="/user_management/staff/new"]').click();
      
        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('T');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('Please enter at least 8 characters.')
        cy.wait(700);

    })

    it('Validation (User enter password without lowercase letters. The system display alert message “It must contain at least one lowercase letter.”', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get('[href="/user_management/staff/new"]').click();
      
        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('12345678T');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('It must contain at least one lowercase letter.')
        cy.wait(700);

    })

    it('Validation (User enter password without uppercase letter. The system display alert message “It must contain at least one uppercase letter.”', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get('[href="/user_management/staff/new"]').click();
      
        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('1234567t');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('It must contain at least one uppercase letter.')
        cy.wait(700);

    })

    it('Validation (User enter password without special character. The system display alert message “There must be at least one special character.”', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get('[href="/user_management/staff/new"]').click();
      
        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('1234567Test');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('There must be at least one special character.')
        cy.wait(700);

    })

    it('Validation (User enter password without numbers.. The system display alert message “There must be at least one number.”', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get('[href="/user_management/staff/new"]').click();
      
        cy.get('#email').type('Tester@bangmod.cloud');
        cy.get('#password').type('Testernbangmod-');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('.text-danger').contains('There must be at least one number.')
        cy.wait(700);

    })

     it('Action success', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get('[href="/user_management/staff/new"]').click();
        cy.get('#email').type('tester@bangmod.cloud');
        cy.get('#password').type('Testernbangmod01-');
        cy.get('#firstName').type('Admintest');
        cy.get('#lastName').type('webcloud');
        cy.get('#mobilePhone').type('0123456789');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})