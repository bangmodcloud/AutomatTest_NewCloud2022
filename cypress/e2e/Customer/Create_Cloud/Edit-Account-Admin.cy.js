describe('Edit Account Admin', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Account Information card', () => {
        it('Validation (User does not enter Text field. The system display alert message “Please Input data”.', () => {

            cy.get('#user-management-collapse').click();
            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get('.col-md-8 > :nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit
            cy.get('#email').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#user-management-collapse').click();
            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get('.col-md-8 > :nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit
            cy.get('#email').clear().type('EditAdmin@bangmod.cloud');
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system display modal “Are you sure to leave information updating?”.', () => {

            cy.get('#user-management-collapse').click();
            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get('.col-md-8 > :nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit
            cy.wait(300);
            cy.get('.ml-auto > .vars-1875906202 > .btn').click(); //Cancel
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })
    })

    context('Account Information card', () => {
        it('Validation (User does not enter Text field. The system display alert message “Please Input data”.', () => {

            cy.get('#user-management-collapse').click();
            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .app_renderer_nt_lib_style__card-style > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit
            cy.get('#firstName').clear();
            cy.get('#lastName').clear();
            cy.get('#mobilePhone').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')
            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#user-management-collapse').click();
            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .app_renderer_nt_lib_style__card-style > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit
            cy.get('#firstName').clear().type('EditAdmintest');
            cy.get('#lastName').clear().type('Editwebcloud');
            cy.get('#mobilePhone').clear().type('0123456788');
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })


        it('Usabilities (Admin click Cancel button. The system display modal “Are you sure to leave information updating?”.', () => {

            cy.get('#user-management-collapse').click();
            cy.get('#all-staff').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .app_renderer_nt_lib_style__card-style > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit
            cy.wait(300);
            cy.get('.ml-auto > .vars-1875906202 > .btn').click(); //cancel
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