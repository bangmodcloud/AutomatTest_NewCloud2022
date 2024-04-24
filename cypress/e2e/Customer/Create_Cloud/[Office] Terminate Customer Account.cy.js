describe('Terminate Account Customer', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities ( Admin click hyperlink Email. The system direct to User Manage page.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })

    it('Usibirities ( Admin click terminate this account button.\
        The system direct to Delete Account Customer page.”)', () => {
        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();
        cy.contains("Delete this account").click();

        cy.wait(700);

    })

    it('Usibirities (dmindoes not check All Checkbox.\
        The system disble Confirm delete account customer button.)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();
        cy.contains("Delete this account").click();
        cy.wait(500);
        cy.contains('Confirm delete account customer').should('be.disabled')

        cy.wait(700);

    })

    it('Usibirities (Admin does not enter fieldtext \
        The system display alert message “Please input data”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();
        cy.contains("Delete this account").click();
        cy.wait(500);
        cy.get(':nth-child(1) > #usernameOrEmail').click();
        cy.get(':nth-child(2) > #usernameOrEmail').click();
        cy.get(':nth-child(1) > #usernameOrEmail').click();
        cy.get('.text-danger').contains('Please input data')

        cy.wait(700);

    })

    it('Validation (Admin entered an invalid Email and Password.\
        The system display alert message “The specified username or email does not match the customer account. Please ensure that the username or email matches the hyperlink of the selected account.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();
        cy.contains("Delete this account").click();
        cy.wait(500);
        cy.get(':nth-child(1) > #usernameOrEmail').type("test");
        cy.get(':nth-child(2) > #usernameOrEmail').click();
        cy.get('.text-danger').contains('The specified username or email does not match the customer account. Please ensure that the username or email matches the hyperlink of the selected account.')

        cy.wait(700);

    })

    it('Validation (Admin entered an invalid TextCode.The system display alert message “You entered incorrect text.”)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();
        cy.contains("Delete this account").click();
        cy.wait(500);

        cy.get(':nth-child(2) > #usernameOrEmail').type('test');
        cy.get(':nth-child(1) > #usernameOrEmail').click();
        cy.get('.text-danger').contains('You entered incorrect text')

        cy.wait(700);

    })

    it('Usesiribities (Admin click Cancel button. The system will close the Delete Account Customer page.)', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();
        cy.contains("Delete this account").click();
        cy.wait(500);
        cy.contains("Cancel").click();
       

        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#user-terminated-collapse').click();
        cy.get('#user-awaiting-terminate').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .px-0').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();
        cy.contains("Delete this account").click();
        cy.wait(500);
        cy.get('#rule-0').check();
        cy.get('#rule-1').check();
        cy.get('#rule-2').check();
        cy.get('#rule-3').check();
        cy.get(':nth-child(1) > #usernameOrEmail').type("mildsadz-nt-dev@gmail.com");
        cy.get(':nth-child(2) > #usernameOrEmail').type("delete account customer");
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})