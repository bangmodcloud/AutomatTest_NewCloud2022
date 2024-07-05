describe('Create Backup Profile', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (The system displayed field labels :Name, Description (Optional),\
        Cron Job Pattern (Cron job will be apply time UTC),Retention\
        Want this profile to be set to the default system backup profile?.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[href="/cloud/volume/backup-profile/new"]').click();

        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')
        cy.contains('label', 'Cron Job Pattern (Cron job will be apply time UTC)').should('have.text', 'Cron Job Pattern (Cron job will be apply time UTC)')
        cy.contains('label', 'Retention').should('have.text', 'Retention')
        cy.contains('label', 'Want this profile to be set to the default system backup profile?')

        cy.wait(700);

    })

    it('Validation (User does not enter Text field. The system display alert message “Please Input Data”.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[href="/cloud/volume/backup-profile/new"]').click();

        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(700);

    })

    it('Validation (Admin does not enter cron job in the pattern. The system display alert message “Please input in cron job pattern”.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[href="/cloud/volume/backup-profile/new"]').click();
        cy.get('[name="name"]').type('Backup-Profile-1')
        cy.get('[name="description"]').type('test Backup Profile')
        cy.get('[name="cronJobPattern"]').type('0')
        cy.get('[name="retention"]').type('1')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input in cron job pattern')
        cy.wait(700);

    })

    it('Validation (Admin enter Retention less than 1. The system display alert message “The number must be greater than 0”.', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[href="/cloud/volume/backup-profile/new"]').click();
        cy.get('[name="name"]').type('Backup-Profile-1')
        cy.get('[name="description"]').type('test Backup Profile')
        cy.get('[name="cronJobPattern"]').type('0 10 10 ? * *')
        cy.get('[name="retention"]').type('-0.1')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter a number greater than or equal to 1 or more.')
        cy.wait(700);

    })

    it('Usabilities (Admin does not have a default profile yet. The system set default profile = disable', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[href="/cloud/volume/backup-profile/new"]').click();

        cy.get('#is-default').should('be.disabled');
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[href="/cloud/volume/backup-profile/new"]').click();
        cy.get('[name="name"]').type('Backup-Profile-1')
        cy.get('[name="description"]').type('test Backup Profile')
        cy.get('[name="cronJobPattern"]').type('0 10 10 ? * *')
        cy.get('[name="retention"]').type('1')
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    it('Usabilities (Admin Check Default (The system has a Default Profile.) and click No. The system display modal “Confirm Change Default Backup Profile?” and closs modal', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[href="/cloud/volume/backup-profile/new"]').click();

        cy.get('[name="name"]').type('Backup-Profile-2')
        cy.get('[name="description"]').type('test Backup Profile 2')
        cy.get('[name="cronJobPattern"]').type('0 10 10 ? * *')
        cy.get('[name="retention"]').type('1')
        cy.get('#is-default').check();
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Change Default Backup Profile?')
            .wait(300)
            .contains('button', 'No')
            .click();
        cy.wait(700);

    })

    it('Usabilities (Admin click Yes. Admin Change Default Backup Profile succeed', () => {

        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[href="/cloud/volume/backup-profile/new"]').click();

        cy.get('[name="name"]').type('Backup-Profile-2')
        cy.get('[name="description"]').type('test Backup Profile 2')
        cy.get('[name="cronJobPattern"]').type('0 10 10 ? * *')
        cy.get('[name="retention"]').type('1')
        cy.get('#is-default').check();
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Change Default Backup Profile?')
            .wait(300)
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);

    })
})