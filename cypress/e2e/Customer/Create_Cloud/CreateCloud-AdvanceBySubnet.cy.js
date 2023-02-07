
describe('Create Cloud Advance Flow by Subnet', () => {
    beforeEach(() => {
        cy.login()
    })

    context('Create Cloud Select Subnet and Have Public IP', () => {

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
            cy.get('#attach-private-network').check();
            cy.get('.ant-table-row-expand-icon').click();
            cy.get('.mr-2 > #subnet').check();
            cy.get('#yes').check();
            cy.get('[type="submit"]').click();
            // Step 5.
            cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
            cy.get('[data-row-key="publicIP"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.checked');
            cy.get('[data-row-key="63dc6a71050f4a79b6878792"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.checked');
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

        it('Usibirities (User select Attach From Private Network radio, click add icon in the Name column and select Subnet. The system display Subnet to choose from.)', () => {
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
            cy.get('#attach-private-network').check();
            cy.get('.ant-table-row-expand-icon').click();
            cy.get('.card-body > :nth-child(3)').should('be.visible')
            cy.get('.mr-2 > #subnet').check();


        })

        it('Usibirities (User select Yes radio on Do you want your instance to have a Public IP? card and click Next and click add icon security group required. \
            The system display table of Associate Security Group to Subnet information and display Public IP to choose from.)', () => {

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
            cy.get('#attach-private-network').check();
            cy.get('.ant-table-row-expand-icon').click();
            cy.get('.card-body > :nth-child(3)').should('be.visible')
            cy.get('.mr-2 > #subnet').check();
            cy.get('#yes').check();
            cy.get('[type="submit"]').click();
            // Step 5.
            cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
            cy.get('[data-row-key="publicIP"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.checked');


        })
        
    })

    context('Create Cloud Select Subnet and Does not have Public IP', () => {

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
            cy.get('#attach-private-network').check();
            cy.get('.ant-table-row-expand-icon').click();
            cy.get('.mr-2 > #subnet').check();
            cy.get('[type="submit"]').click();
            // Step 5.
            cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
            cy.get('.ant-checkbox-input').should('be.checked');
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

        it('Usibirities (User select Attach From Private Network radio, click add icon in the Name column and select Subnet. The system display Subnet to choose from.)', () => {
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
            cy.get('#attach-private-network').check();
            cy.get('.ant-table-row-expand-icon').click();
            cy.get('.card-body > :nth-child(3)').should('be.visible')
            cy.get('.mr-2 > #subnet').check();
            cy.wait(700);

        })

        it('Usibirities (User select No radio on Do you want your instance to have a Public IP? card and click Next and add icon security group required. \
            The system display table of Security Group information but not display Public IP to choose from.)', () => {

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
            cy.get('#attach-private-network').check();
            cy.get('.ant-table-row-expand-icon').click();
            cy.get('.card-body > :nth-child(3)').should('be.visible')
            cy.get('.mr-2 > #subnet').check();
            cy.get('[type="submit"]').click();
            // Step 5.
            cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
            cy.get('.ant-checkbox-input').should('be.checked');

            cy.wait(700);

        })
    })

})