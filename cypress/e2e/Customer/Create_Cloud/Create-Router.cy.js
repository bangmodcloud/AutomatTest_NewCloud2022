describe('Create Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)

    })

    it('Usabilities (User click Add button icon. The system open new tap leads to Create Floating IP page.)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('[href="/cloud-server/router/new"]').click();

        // General Information card
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')

        cy.get('#isUseExternalNetwork').check();
        cy.contains('.card','Setting SNAT').contains('div','Source Network Address Translation (source-nat or SNAT) allows traffic from a private network to go out to the internet. Virtual machines launched on a private network can get to the internet by going through a gateway capable of performing SNAT.')
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('[href="/cloud-server/router/new"]').click();
        cy.get('#name').clear().type('test-Router');
        cy.get('#description').type('Automate test router');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('[href="/cloud-server/router/new"]').click();
        cy.get('#name').clear();
        cy.get('#description').type('Automate test router');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usabilities (User hovers over the warning icon.  The system display tooltip “Selecting External Network is selecting Public IP to be the Outgoing IP.  Public IP here will be taken from Service Floating IP.”)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('[href="/cloud-server/router/new"]').click();
        cy.get('#name').type('test-Router');
        cy.get('#description').type('Automate test router');
        cy.get('#isUseExternalNetwork').check();
        cy.get('#popover-attach-security').trigger('mouseover');
        cy.wait(200)
        cy.get('.popover-body').contains("Selecting External Network is selecting Public IP to be the Outgoing IP. Public IP here will be taken from Service Floating IP.")
        cy.wait(700);



    })

    it('Usabilities (User Check Select External Network Checkbox.  The system display Select External Network card.)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('[href="/cloud-server/router/new"]').click();
        cy.get('#name').type('test-Router');
        cy.get('#description').type('Automate test router');
        cy.get('#isUseExternalNetwork').check();
        cy.contains('.card','Setting SNAT').should('be.visible');
        cy.wait(700);

    })

    it('Usabilities (User searches for External Network entry by External Network IP Address / Description.  The system displays the searched list.)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('[href="/cloud-server/router/new"]').click();
        cy.get('#name').type('test-Router');
        cy.get('#description').type('Automate test router');
        cy.get('#isUseExternalNetwork').check();
        cy.get('#search').type('43.239.251.24');
        cy.wait(200)
        cy.get('#search').clear().type('test Floating IP');
        cy.wait(700);

    })

    it('Usabilities (User click Add button icon. The system open new tap leads to Create Floating IP page.)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('[href="/cloud-server/router/new"]').click();
        cy.get('#name').type('test-Router');
        cy.get('#description').type('Automate test router');
        cy.get('#isUseExternalNetwork').check();
        cy.get('[href="/cloud-server/floating-ip/new"]').invoke('removeAttr', 'target').click();
        cy.wait(700);

    })

    it('Usabilities (User Check Select External Network Checkbox. Setting SNAT Toggle Default = Enable)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('[href="/cloud-server/router/new"]').click();
        cy.get('#name').clear().type('test-Router');
        cy.get('#description').type('Automate test router');
        cy.get('#isUseExternalNetwork').check();
        cy.get('.ant-switch-checked').should('be.enabled').find('span','Enable');
        cy.wait(700);

    })
})