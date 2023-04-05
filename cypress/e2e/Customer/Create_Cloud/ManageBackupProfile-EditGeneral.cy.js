describe('Manage Backup Profile', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })  

    it('Validation (User does not enter Text field. The system display alert message “Please Input Data”.', () => {
      
        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.d-flex > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="name"]').clear();
        cy.get('[name="cronJobPattern"]').clear();
        cy.get('[name="retention"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(700);

    })

    it('Validation (Admin does not enter cron job in the pattern. The system display alert message “Please input in cron job pattern”.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.d-flex > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="name"]').clear().type('Edit-Backup-Profile-1')
        cy.get('[name="description"]').clear().type('test  Edit Backup Profile')
        cy.get('[name="cronJobPattern"]').clear().type('0')
        cy.get('[name="retention"]').clear().type('1')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input in cron job pattern')
        cy.wait(700);

    })

       
    it('Validation (Admin enter Retention less than 1. The system display alert message “The number must be greater than 0”.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.d-flex > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="name"]').clear().type('Edit-Backup-Profile-1')
        cy.get('[name="description"]').clear().type('test  Edit Backup Profile')
        cy.get('[name="cronJobPattern"]').clear().type('0 10 10 ? * *')
        cy.get('[name="retention"]').clear().type('-0.1')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 1 ขึ้นไป')
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.d-flex > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[name="name"]').clear().type('Edit-Backup-Profile-1')
        cy.get('[name="description"]').clear().type('test  Edit Backup Profile')
        cy.get('[name="cronJobPattern"]').clear().type('0 10 10 ? * *')
        cy.get('[name="retention"]').clear().type('1')
        cy.get('[type="submit"]').click();

    })

    it('Validation (Admin click Cancel . The system display modal “Leave Site?”.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.d-flex > .app_renderer_common_button__common-button-style > .btn').click();
        cy.wait(300);
        cy.get('.vars-209014119 > .btn').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Leave Site?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
        cy.wait(700);

    })
})