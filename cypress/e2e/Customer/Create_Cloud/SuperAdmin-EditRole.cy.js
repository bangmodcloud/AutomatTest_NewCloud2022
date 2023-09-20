describe('Super Admin Edit role', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Action success', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_nt_lib_style__card-style > .card > .justify-content-between > .PRIMARY-TERTIARY > .btn').click(); //Edit
        cy.get('.ant-select-selector').click();
        cy.get('[title="Super Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })

    it('Usabilities (Super Admin click Cancel button. The system display modal “Are you sure to leave information updating?”.', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_nt_lib_style__card-style > .card > .justify-content-between > .PRIMARY-TERTIARY > .btn').click(); //Edit
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
    
        cy.wait(700);

    })

    it('Usabilities (Super Admin click Other Actions. The system display modal “Are you sure to leave information updating?”.', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_nt_lib_style__card-style > .card > .justify-content-between > .PRIMARY-TERTIARY > .btn').click(); //Edit
        cy.wait(500);
        cy.get(':nth-child(2) > .app_renderer_nt_lib_style__card-style > .card > .justify-content-between > .PRIMARY-TERTIARY > .btn').click(); //Edit Personal card
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
    
        cy.wait(700);

    })

    it('Usabilities (Super Admin click back button. The system display modal “Leave Site ?”.', () => {

        cy.get('#user-management-collapse').click();
        cy.get('#all-staff').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_nt_lib_style__card-style > .card > .justify-content-between > .PRIMARY-TERTIARY > .btn').click(); //Edit
        cy.wait(500);
        cy.scrollTo('top');
        cy.wait(500);
        cy.get('.text-dark').click(); //Back
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Leave Site ?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
    
        cy.wait(700);

    })
})