
describe('Manage Cloud / Attach Network Interface', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
        cy.get('.row > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn') // Attach button
            .invoke('removeAttr', 'target')
            .click(); 
        cy.get(':nth-child(3) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('.app_renderer_common_button__common-button-style > .btn').click(); //บันทึก
        cy.wait(700);


    })

    it('Usiribities (User searches for Network Interface entry by Name / Fixed IP and MAC Address. The system displays the searched list.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
        cy.get('.row > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn') // Attach button
            .invoke('removeAttr', 'target')
            .click(); 
        cy.get('#search').type('test-1');
        cy.get('#search').clear().type('192.168.0.1');
        cy.get('#search').clear().type('fa:16:3e:b2:8f:68');
        cy.wait(700);


    })

    it('Usiribities (User click Add icon. The system leads to Create Network Interface page.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
        cy.get('.row > :nth-child(2) > .app_renderer_common_button__common-button-style > .btn') // Attach button
            .invoke('removeAttr', 'target')
            .click(); 
        cy.get('svg').first().click({ multiple: true });
      
        cy.wait(700);


    })
})
