describe('Edit Account Admin', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities ( The system displayed field labels : Email, Password, First Name, Last Name, Phone Number, Role)', () => {

        cy.get('#all-staff').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();

        cy.contains('.card', 'Account Information').within(() => {
            cy.contains('label', 'ID').should('have.text', 'ID');
            cy.contains('label', 'Email').should('have.text', 'Email');
        })

        cy.contains('.card', 'Personal Information').within(() => {
            cy.contains('label', 'First name').should('have.text', 'First name');
            cy.contains('label', 'Last name').should('have.text', 'Last name');
            cy.contains('label', 'Phone Number').should('have.text', 'Phone Number');
        })

        cy.contains('.card', 'Role').within(() => {
            cy.contains('label', 'Role').should('have.text', 'Role');
        })

        cy.contains('.card', 'Status').within(() => {
            cy.contains('label', 'Join Us').should('have.text', 'Join Us');
            cy.contains('label', 'Last Login').should('have.text', 'Last Login');
        })


    })

    context('Account Information card', () => {
        it('Validation (User does not enter Text field. The system display alert message “Please Input data”.', () => {

            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.contains('.card', 'Account Information').within(() => {
                cy.contains('Edit').click(); //Edit
            })
            cy.get('#email').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.contains('.card', 'Account Information').within(() => {
                cy.contains('Edit').click(); //Edit
            })
            cy.get('#email').clear().type('EditAdmin@bangmod.cloud');
            // cy.get('[type="submit"]').click();
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system display modal “Are you sure to leave information updating?”.', () => {

            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.contains('.card', 'Account Information').within(() => {
                cy.contains('Edit').click(); //Edit
                cy.wait(300);
                cy.contains('Cancel').click(); //Cancel
            })
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(300)
                .contains('button', 'Yes')
                .click();

        })
    })

    context('Personal Information card', () => {
        it('Validation (User does not enter Text field. The system display alert message “Please Input data”.', () => {

            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.contains('.card', 'Personal Information').within(() => {
                cy.contains('Edit').click(); //Edit
            })
            cy.get('#firstName').clear();
            cy.get('#lastName').clear();
            cy.get('#mobilePhone').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.contains('.card', 'Personal Information').within(() => {
                cy.contains('Edit').click(); //Edit
            })
            cy.get('#firstName').clear().type('EditAdmintest');
            cy.get('#lastName').clear().type('Editwebcloud');
            cy.get('#mobilePhone').clear().type('0123456788');
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })


        it('Usabilities (Admin click Cancel button. The system display modal “Are you sure to leave information updating?”.', () => {

            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.contains('.card', 'Personal Information').within(() => {
                cy.contains('Edit').click(); //Edit
                cy.wait(300);
                cy.contains('Cancel').click(); //cancel
            })
            cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Are you sure to leave information updating?')
                    .wait(300)
                    .contains('button', 'Yes')
                    .click();

            cy.wait(700);

        })
    })
})