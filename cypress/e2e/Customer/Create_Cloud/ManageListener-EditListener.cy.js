describe('Edit Listener', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
       
    })

    it('Usabilities (User go to Manage Pool page. The system displayed Field labels as follows:\
        Name, Description , Protocol, Port. Client Data Timeout ,\
        TCP Inspect Timeout , Member Connect Timeout \
        Member Data Timeout , Connection Limit, Insert Headers, X-Forwarded-For,\
        X-Forwarded-Proto, X-Forwarded-Port', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.wait(2000)
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')
        cy.contains('label', 'Protocol').should('have.text', 'Protocol')
        cy.contains('label', 'Port').should('have.text', 'Port')
        cy.contains('label', 'Client Data Timeout').should('have.text', 'Client Data Timeout')
        cy.contains('label', 'TCP Inspect Timeout').should('have.text', 'TCP Inspect Timeout')
        cy.contains('label', 'Member Connect Timeout').should('have.text', 'Member Connect Timeout')
        cy.contains('label', 'Member Data Timeout').should('have.text', 'Member Data Timeout')
        cy.contains('label', 'Connection Limit').should('have.text', 'Connection Limit')
        cy.contains('label', 'Insert Headers').should('have.text', 'Insert Headers')
        cy.contains('span', 'X-Forwarded-For').should('have.text', 'X-Forwarded-For')
        cy.contains('span', 'X-Forwarded-Proto').should('have.text', 'X-Forwarded-Proto')
        cy.contains('span', 'X-Forwarded-Port').should('have.text', 'X-Forwarded-Port')

        cy.contains('.card', 'Pool').within(() => {
            cy.contains('label', 'Pool Name').should('have.text', 'Pool Name')
        })
        cy.wait(700);


    })

    it('Usabilities (User go to Manage Pool page. The system displayed Field labels as follows:\
        Name, Description , Protocol, Port. Client Data Timeout ,\
        TCP Inspect Timeout , Member Connect Timeout \
        Member Data Timeout , Connection Limit, Insert Headers, X-Forwarded-For,\
        X-Forwarded-Proto, X-Forwarded-Port', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.wait(2000)
        cy.contains('.card', 'Listener Information').within(() => {
            cy.contains('Edit').click()
            cy.wait(500);
        })
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description (optional)').should('have.text', 'Description (optional)')
        cy.contains('label', 'Protocol').should('have.text', 'Protocol')
        cy.contains('label', 'Port').should('have.text', 'Port')
        cy.contains('label', 'Client Data Timeout (Optional)').should('have.text', 'Client Data Timeout (Optional)')
        cy.contains('label', 'TCP Inspect Timeout (Optional)').should('have.text', 'TCP Inspect Timeout (Optional)')
        cy.contains('label', 'Member Connect Timeout (Optional)').should('have.text', 'Member Connect Timeout (Optional)')
        cy.contains('label', 'Member Data Timeout (Optional)').should('have.text', 'Member Data Timeout (Optional)')
        cy.contains('label', 'Connection Limit').should('have.text', 'Connection Limit')
        cy.contains('label', 'Insert Headers').should('have.text', 'Insert Headers')
        cy.contains('label', ' X-Forwarded-For').should('have.text', ' X-Forwarded-For')
        cy.contains('label', ' X-Forwarded-Proto').should('have.text', ' X-Forwarded-Proto')
        cy.contains('label', ' X-Forwarded-Port').should('have.text', ' X-Forwarded-Port')
        cy.wait(700);


    })

    it('Action success', () => {


        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.wait(2000)
        cy.contains('.card', 'Listener Information').within(() => {
            cy.contains('Edit').click()
            cy.wait(500);
        })

        cy.get('[name="name"]').clear().type('Test-Edit-Listener');
        cy.get('[name="description"]').clear().type('Wara Test Edit Listener');
        cy.get('[name="clientDataTimeout"]').clear().type('20000');
        cy.get('[name="tcpInspectTimeout"]').clear().type('1');
        cy.get('[name="memberConnectTimeout"]').clear().type('20000');
        cy.get('[name="memberDataTimeout"]').clear().type('20000');
        cy.get('[name="connectionLimit"]').clear().type('1');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.wait(2000)
        cy.contains('.card', 'Listener Information').within(() => {
            cy.contains('Edit').click()
            cy.wait(500);
        })

        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usibirities (The system is open for editing. Field Protocol and Port cannot be modified.', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.wait(2000)
        cy.contains('.card', 'Listener Information').within(() => {
            cy.contains('Edit').click()
            cy.wait(500);
        })

        cy.get('#rc_select_0').should('be.disabled');
        cy.get('[name="port"]').should('be.disabled');
        cy.wait(700);


    })

    it('Usiribities (User click Cancel button and click Yes.  The system display modal “ยืนยันออกจากการแก้ไข” and close Edit.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.wait(2000)
        cy.contains('.card', 'Listener Information').within(() => {
            cy.contains('Edit').click()
            cy.wait(500);
        })

        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);


    })
})