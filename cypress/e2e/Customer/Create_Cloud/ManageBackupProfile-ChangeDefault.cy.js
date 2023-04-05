describe('Manage Backup Profile/ Change Default ', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })  

    it('Validation (Admin click Button Icon Star on the item for which you want to change the default and click No. \
        The system display modal “Confirm Change Default Backup Profile?” and closs modal', () => {
      
        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[:nth-child(2) > :nth-child(1) > .d-flex > .btn > .fa-star').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Backup Profile?')
                .wait(300)
                .contains('button', 'ไม่')
                .click();
        cy.wait(700);

    })

    it('Validation (Admin click Yes. \ Admin Change Default Backup Profile succeed.', () => {
      
        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get('[:nth-child(2) > :nth-child(1) > .d-flex > .btn > .fa-star').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Backup Profile?')
                .wait(300)
                .contains('button', 'ใช่')
                .click();
        cy.wait(700);

    })
})