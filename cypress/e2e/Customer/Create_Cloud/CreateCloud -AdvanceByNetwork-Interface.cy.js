
describe('Create Cloud Advance Flow by Network Interface', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        // Step 1.
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        // Step 2.
        cy.get('[type="submit"]').click();
        // Step 3.
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({ force: true }); //Advance Network Setting button
        // Step 4.
        cy.get('#attach-network-interface').check();
        cy.get('.ant-checkbox-input').check();
        cy.get('#yes').check();
        cy.get('[type="submit"]').click();
        // Step 5.
        cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.get('.ant-checkbox-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        // Step 6.
        cy.get('[type="submit"]').click();
        // Step 7.
        cy.get('[name="hostname"]').clear().type('Wara-Test-Instance');
        cy.get('#instanceAmount').clear().type('2');
        cy.get('[type="submit"]').click();
        // Step 8.
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    it('Usilibities (User select Attach From Network Interface radio. The system display Network Interface to choose from.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        // Step 1.
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        // Step 2.
        cy.get('[type="submit"]').click();
        // Step 3.
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({ force: true }); //Advance Network Setting button
        // Step 4.
        cy.get('#attach-network-interface').check();
        cy.get('.card-body > :nth-child(4)').should('be.visible');

    })

    it('Usilibities (User select Yes radio on Do you want your instance to have a Public IP? card / click Next and click add icon security group required. \
        The system display table of Security Group information and display Public IP to choose from.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        // Step 1.
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        // Step 2.
        cy.get('[type="submit"]').click();
        // Step 3.
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({ force: true }); //Advance Network Setting button
        // Step 4.
        cy.get('#attach-network-interface').check();
        cy.get('.ant-checkbox-input').check();
        cy.get('#yes').check();
        cy.get('[type="submit"]').click();
        // Step 5.
        cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.get('[data-row-key="publicIP"] > .ant-table-selection-column').should('be.visible')

    })

})