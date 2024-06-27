describe('Edit SSL Certificate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
  
    })

    it('Usabirities (User go to manage SSL Certificate page..The system displayed Field labels as follows:\
        General Information card : Name, Description\
        Issued To card : Common Name (CN), Organization (O), Organizational Unit (OU)\
        Issued By card : Common Name (CN), Organization (O), Organizational Unit (OU)\
        Fingerprints card : SHA-256 Fingerprint, SHA-1 Fingerprint\
        Validity Period card : Issued On ,Expires On', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);

        cy.contains('.card', 'General Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name');
            cy.contains('label', 'Description').should('have.text', 'Description');
        })

        cy.contains('.card', 'Issued To').within(() => {
            cy.contains('label', 'Common Name (CN)').should('include.text', 'Common Name (CN)');
            cy.contains('label', 'Organization (O)').should('include.text', 'Organization (O)');
            cy.contains('label', 'Organizational Unit (OU)').should('include.text', 'Organizational Unit (OU)');
        })

        cy.contains('.card', 'Issued By').within(() => {
            cy.contains('label', 'Common Name (CN)').should('include.text', 'Common Name (CN)');
            cy.contains('label', 'Organization (O)').should('include.text', 'Organization (O)');
            cy.contains('label', 'Organizational Unit (OU)').should('include.text', 'Organizational Unit (OU)');
        })

        cy.contains('.card', 'Fingerprints').within(() => {
            cy.contains('label', 'SHA-256 Fingerprint').should('include.text', 'SHA-256 Fingerprint');
            cy.contains('label', 'SHA-1 Fingerprint').should('include.text', 'SHA-1 Fingerprint');
        })

        cy.contains('.card', 'Validity Period').within(() => {
            cy.contains('label', 'Issued On').should('include.text', 'Issued On');
            cy.contains('label', 'Expires On').should('include.text', 'Expires On');
        })
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Edit').click(); //Edit button

        cy.get('[name="name"]').clear().type('test-EditSSL')
        cy.get('[name="description"]').clear().type('Automate testing Edit SSL');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Edit').click(); //Edit button

        cy.get('[name="name"]').clear();
        cy.get('[name="description"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User click  Cancel button.  The system close Edit.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Edit').click(); //Edit button

        cy.get('.vars--1060101102 > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);


    })

    it('Validation (User click another action for which the edit was not saved.  The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#ssl-certificate').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Edit').click(); //Edit button

        cy.contains('Delete').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);


    })
})