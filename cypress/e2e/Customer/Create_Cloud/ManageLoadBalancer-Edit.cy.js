describe('Manage Load Balancer / Edit General Information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000);
    })

    it('Usabilities (User go to Manage Load Balancer page. The system displayed Field labels as follows:\
        General Information card : Name, Description\
        Size Information card : Name, Max Concurrent, High Availability\
        Subnet Information card : Private Network, Subnet, IP Address\
        Status card : Operating Status, Provisioning Status, Admin State', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(4000);

        cy.contains('.card', 'General Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description')
        })

        cy.contains('.card', 'Size Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Max Concurrent').should('have.text', 'Max Concurrent')
            cy.contains('label', 'High Availability').should('have.text', 'High Availability')
        })

        cy.contains('.card', 'Subnet Information').within(() => {
            cy.contains('label', 'Private Network').should('have.text', 'Private Network')
            cy.contains('label', 'Subnet').should('have.text', 'Subnet')
            cy.contains('label', 'IP Address').should('have.text', 'IP Address')
        })

        cy.contains('.card', 'Status').within(() => {
            cy.contains('label', 'Operating Status').should('have.text', 'Operating Status')
            cy.contains('label', 'Provisioning Status').should('have.text', 'Provisioning Status')
            cy.contains('label', 'Admin State').should('have.text', 'Admin State')
        })

            cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('.card', 'General Information').contains('Edit').click(); //Edit button
        cy.get('[name="name"]').clear().type('Edit-Load-Barancer');
        cy.get('[name="description"]').clear().type('Wara Test Edit Load Barancer');
        // cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('.card', 'General Information').contains('Edit').click(); //Edit button
        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User click Cancel button and click Yes.  The system display modal “ยืนยันออกจากการแก้ไข” and close Edit.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('.card', 'General Information').contains('Edit').click(); //Edit button
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);
    })

    it('Validation (User click hyper link Private Network name.  The system Open new tab leads to Manage your Private Network page.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('.card', 'Subnet Information')
            .contains('label', 'Private Network')
            .next()
            .find('a')
            .invoke('removeAttr', 'target').click(); //hyperlink Private Network

        cy.wait(700)
        cy.get('.header-30-semibold').contains('Manage your Private Network')
        cy.wait(1000);
    })


    it('Validation (User click hyper link Subnet name.  The system Open new tab leads to Manage your Subnet page.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('.card', 'Subnet Information')
            .contains('label', 'Subnet')
            .next()
            .find('a')
            .invoke('removeAttr', 'target').click(); //hyperlink Private Network

        cy.wait(700)
        cy.get('.header-30-semibold').contains('Manage your Subnet')
        cy.wait(1000);
    })
})
