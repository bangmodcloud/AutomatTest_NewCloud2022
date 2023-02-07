
describe('Manage Cloud / Edit security group apply to all network interfaces in this instance.', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(5) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_lib_style__card-style > .card > .justify-content-between > div.d-flex > :nth-child(1) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check()
        cy.get('.ml-auto > .app_renderer_common_button__common-button-style > .btn').click(); // Save button
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Warning')
            .contains('button', 'ใช่')
            .click();
        cy.wait(700);


    })

    it('Usibirities (The system display Alert Warning “You can assign a maximum of 5 security groups to an instance.“)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(5) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_lib_style__card-style > .card > .justify-content-between > div.d-flex > :nth-child(1) > .app_renderer_common_button__common-button-style > .btn')
            .invoke('removeAttr', 'target')
            .click();
       cy.get('.callout').contains('You can assign a maximum of 5 security groups to an instance.')
        cy.wait(700);


    })

    it('Usibirities (User searches for the Security Group entry by Security Group Name and Description. The system displays the searched list.“)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(5) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_lib_style__card-style > .card > .justify-content-between > div.d-flex > :nth-child(1) > .app_renderer_common_button__common-button-style > .btn')
            .invoke('removeAttr', 'target')
            .click();
        cy.get('#search').clear().type('test-1')
        cy.wait(700);


    })

    it('Usibirities (User click Add button. The system open new tab leads to Create Security Group page.“)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(5) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_lib_style__card-style > .card > .justify-content-between > div.d-flex > :nth-child(1) > .app_renderer_common_button__common-button-style > .btn')
            .invoke('removeAttr', 'target')
            .click();
        cy.get('[href="/cloud-server/security-group/new"]')
            .invoke('removeAttr', 'target')
            .click();
        cy.wait(700);


    })

    it('Usibirities (User click Cancel button. The system close page.“)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(5) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(3) > .app_renderer_lib_style__card-style > .card > .justify-content-between > div.d-flex > :nth-child(1) > .app_renderer_common_button__common-button-style > .btn')
            .invoke('removeAttr', 'target')
            .click();
        cy.get('small').click();
        cy.wait(700);


    })
})
