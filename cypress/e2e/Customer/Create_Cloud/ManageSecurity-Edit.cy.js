describe('Manage Security Group', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)

    })

    it('Usabilities (User go to Manage Security Group page. The system displayed Field labels as follows: Name, Description)', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('label', 'Name').should('have.text', 'Name');
        cy.contains('label', 'Description').should('have.text', 'Description');

        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        cy.get('[name="description"]').clear().type('test edit security group');

        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. system display modal “Are you sure to leave information updating?”)', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.wait(700);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();

        cy.wait(700);


    })

    it('Action success', () => {


        cy.get('#network-collapse').first().click({ force: true });
        cy.get('#security-group').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('test-edit1');
        cy.get('[name="description"]').clear().type('test edit security group');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })
})