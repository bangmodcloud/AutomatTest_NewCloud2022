
describe('Create Cloud Advance Flow by Network Interface', () => {
    beforeEach(() => {
        cy.login()
    })

    context('Create Cloud Select Network Interface and Have Public IP', () => {

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
        cy.get(':nth-child(1) > :nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
        cy.get('[data-row-key="publicIP"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
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

    context('Create Cloud Select Network Interface and Does not have Public IP', () => {

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

        it('Usilibities (User select No radio on Do you want your instance to have a Public IP? card and click Next. The system display list the security groups of that Network Interface.)', () => {
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
            cy.get('[type="submit"]').click();
            //Step 5.
            cy.get('.ant-checkbox-input').check().should('be.checked');


        })


        it('Usilibities (User click add icon security group required. The system display Network Interface to choose from.)', () => {
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
            cy.get('[type="submit"]').click();
            //Step 5.
            cy.get('.ant-checkbox-input').check().should('be.checked');


        })
    })

    context('สร้างได้เครื่องเดียว', () => {

        it('Usilibities (User go to step 7. Setting Instance and Number of instance to be built. The system disable field จำนวนเครื่องที่ต้องการสร้าง and set value = 1 .)', () => {
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
            cy.get('[type="submit"]').click();
            //Step 5.
            cy.get('.ant-checkbox-input').check().should('be.checked');
            cy.get('[type="submit"]').click();
            //Step 6.
            cy.wait(500);
            cy.get('[type="submit"]').click();
             //Step 7.
            cy.get('#instanceAmount').should('have.value','1').and('be.disabled');
            



        })

    })
})
