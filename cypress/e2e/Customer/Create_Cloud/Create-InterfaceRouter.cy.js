describe('Create Interface Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    it(" validation (The system display Alert Note “If you don't specify an IP address here, the gateway's IP address of the selected subnet will be used as the IP address of the newly created interface of the router. If the gateway's IP address is in use, you must use a different address which belongs to the selected subnet.“)", () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Create Interface
        cy.get('.callout').contains("If you don't specify an IP address here, the gateway's IP address of the selected subnet will be used as the IP address of the newly created interface of the router. If the gateway's IP address is in use, you must use a different address which belongs to the selected subnet.")
        cy.wait(700);


    })

    it('Usalibities (User searches for Subnet entry by Subnet Name / Description / IPv4 CIDR / Private Network. The system displays the searched list.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Create Interface
        cy.get('#search').type('subnet-test');
        cy.wait(200);
        cy.get('#search').clear().type('Test Subnet');
        cy.wait(200);
        cy.get('#search').clear().type('10.0.0.0/24');
        cy.wait(200);
        cy.get('#search').clear().type('WaraNet');
        cy.wait(700);

    })

    it('Usalibities (User click Add button. The system open new tab leads to Create Subnet.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Create Interface
        cy.wait(200);
        cy.get('[href="/cloud-server/subnet/new"]').invoke('removeAttr','target').click();
        cy.wait(700);

    })

    it('Usalibities (User click hyper link Subnet Name. The system open new tab leads to Manage your Subnet.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Create Interface
        cy.wait(200);
        cy.get('.ant-table-row-selected > :nth-child(2) > .underline-link').invoke('removeAttr','target').click();
        cy.wait(700);

    })

    it('Usalibities ( User click hyper link Private Network. The system open new tab leads to Manage your Private Network.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Create Interface
        cy.wait(200);
        cy.get('.ant-table-row-selected > :nth-child(5) > .underline-link').invoke('removeAttr','target').click();
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.get(':nth-child(2) > .px-0').click(); //Interface tab
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Create Interface
        cy.wait(200);
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })
})