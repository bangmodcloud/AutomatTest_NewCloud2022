describe('Manage your Volume / Edit', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();

    })

    it('Usabilities (User go to Manage Volume page. The system displayed field labels)', () => {

        cy.get('#volume').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()

        // Volume Information card
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')
        cy.contains('label', 'Size').should('have.text', 'Size')
        cy.contains('label', 'Type').should('have.text', 'Type')
        cy.contains('label', 'Bootable').should('have.text', 'Bootable')

        // Attached Instance Card
        cy.contains('label', 'Instance').should('have.text', 'Instance')
        cy.wait(700);


    })

    it('Usabilities (User click Edit button.. The system displayed field labels)', () => {

        cy.get('#volume').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
        cy.wait(1000);
        cy.contains('Edit').click();


        // Volume Information card
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')
        cy.contains('label', 'Size').should('have.text', 'Size')
        cy.contains('label', 'Type').should('have.text', 'Type')
        cy.contains('label', 'Bootable').should('have.text', 'Bootable')

        // Attached Instance Card
        cy.contains('label', 'Instance').should('have.text', 'Instance')
        cy.wait(700);


    })

    it('validation (User does not enter Name. The system displays an alert message “ Please input data”)', () => {

        cy.get('#volume').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
        cy.wait(1000);
        cy.contains('Edit').click();


        cy.get(':nth-child(2) > .form-control').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('#volume').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click()
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.wait(700);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?');
    
        cy.wait(700);


    })
})