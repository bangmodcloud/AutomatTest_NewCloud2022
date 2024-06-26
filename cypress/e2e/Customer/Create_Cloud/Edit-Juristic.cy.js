describe('Edit e-tax information juristic', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

    it('Usabirities (The system displayed Field labels as follows:>>"View Test Plan")', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('li','e-Tax Juristic').click(); //Juristic
        cy.wait(300);

        cy.contains('label', 'Juristic Name').should('have.text', 'Juristic Name');
        cy.contains('label', 'Juristic ID').should('have.text', 'Juristic ID');
        cy.contains('label', 'Branch ID').should('have.text', 'Branch ID');
        cy.contains('label', 'Country').should('have.text', 'Country');
        cy.contains('label', 'Postal Code').should('have.text', 'Postal Code');
        cy.contains('label', 'Province').should('have.text', 'Province');
        cy.contains('label', 'District / Area').should('have.text', 'District / Area');
        cy.contains('label', 'Sub District / Sub-area').should('have.text', 'Sub District / Sub-area');
        cy.contains('label', 'Road').should('have.text', 'Road');
        cy.contains('label', 'Address').should('have.text', 'Address');
        cy.wait(700);


    })

    it('Usabirities (User go to Request change personal information page.Then : The system displayed Field labels as follows:>>"View Test Plan")', () => {

        cy.get('[id="dropdown-profile "]').click({ force: true });
        cy.get('#user-menu').click({ force: true });
        cy.wait(300);
        cy.contains('li','e-Tax Juristic').click(); //Juristic
        cy.wait(300);
        cy.contains('Edit').click();

        cy.contains('label', 'Juristic Name').should('have.text', 'Juristic Name');
        cy.contains('label', 'Juristic ID').should('have.text', 'Juristic ID');
        cy.contains('label', 'Branch ID').should('have.text', 'Branch ID');
        cy.contains('label', 'Country').should('have.text', 'Country');
        cy.contains('label', 'Postal Code').should('have.text', 'Postal Code');
        cy.contains('label', 'Province').should('have.text', 'Province');
        cy.contains('label', 'District / Area').should('have.text', 'District / Area');
        cy.contains('label', 'Sub District / Sub-area').should('have.text', 'Sub District / Sub-area');
        cy.contains('label', 'Road (Optional)').should('have.text', 'Road (Optional)');
        cy.contains('label', 'Address').should('have.text', 'Address');
        cy.wait(700);


    })

    it('Usabilities (User does not enter fieldinput. The system display alert message “Please input data” .)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.option').contains('span','Juristic').click(); //Juristic
        cy.wait(300);
        cy.contains('Edit').invoke('removeAttr','target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get('#juristicName').clear();
        cy.get('#businessId').clear();
        cy.get('#branchId').clear();
        cy.get('[name="address"]').clear();
        cy.get('[type="submit"]').clear;
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usabilities (User enters a Branch ID of less than 5 digits. The system display alert message “Please enter branchID 5 digit number” .)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.option').contains('span','Juristic').click(); //Juristic
        cy.contains('Edit').invoke('removeAttr', 'target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get('#branchId').clear().type('00');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter branchID 5 digit number');
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.option').contains('span','Juristic').click(); //Juristic
        cy.contains('Edit').invoke('removeAttr', 'target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.get('#juristicName').clear().type('Test-1');
        cy.get('#businessId').clear().type('2324134188800');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Usabilities (User click Cancel button. The system display modal”Are you sure to leave information updating?”.)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.option').contains('span','Juristic').click(); //Juristic
        cy.wait(300);
        cy.contains('Edit').invoke('removeAttr', 'target').click();
        cy.wait(300);
        cy.contains('Edit').click();
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);


    })
})