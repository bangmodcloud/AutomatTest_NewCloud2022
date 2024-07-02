describe('Create Listener', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)

    })

    it('Usabilities (User go to Create Pool page. The system displayed Field labels as follows:\Name, Description (Optional)\
        Protocol, Port. Client Data Timeout (Optional), TCP Inspect Timeout (Optional), Member Connect Timeout (Optional)\
        Member Data Timeout (Optional), Connection Limit, Insert Headers, X-Forwarded-For, X-Forwarded-Proto, X-Forwarded-Port', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener

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
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener

        cy.get('[name="name"]').clear().type('Test-Listener');
        cy.get('[name="description"]').type('Wara Test Create Listener');
        cy.get('[name="insertHeaders"]').check('FORWARD_FOR');
        cy.get('[name="insertHeaders"]').check('FORWARD_PROTO');
        // cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Usiribities ( Potocal Prefill = HTTP , Port Prefill = 80 , Client Data Timeout  Prefill = 50000 , TCP Inspect Timeout Prefill = 0 ,\
        Member Connect Prefill = 50000 , Member Data Timeout (Optional) Prefill = 50000 , Connection Limit Prefill = -1', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('.ant-select-selection-item').should('have.attr', 'title', 'HTTP'); //Protocol
        cy.get('[name="port"]').should('have.value', '80');
        cy.get('[name="clientDataTimeout"]').should('have.value', '50000');
        cy.get('[name="tcpInspectTimeout"]').should('have.value', '0');
        cy.get('[name="memberConnectTimeout"]').should('have.value', '50000');
        cy.get('[name="memberDataTimeout"]').should('have.value', '50000');
        cy.get('[name="connectionLimit"]').should('have.value', '-1');
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
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('[name="name"]').clear();
        cy.get('[name="description"]').type('Wara Test Create Listener');
        cy.get('[name="insertHeaders"]').check('FORWARD_FOR');
        cy.get('[name="insertHeaders"]').check('FORWARD_PROTO');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usiribities (User select Protocol = HTTP .  The system display Insert Headers checkbox.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('.ant-select-selector').click(); //Protocol
        cy.get(':nth-child(1) > .ant-select-item-option-content').click(); //HTTP
        cy.get('[name="insertHeaders"]').should('be.visible');

        cy.wait(700);


    })

    it('Usiribities (User select Protocol = TCP / HTTPS .  The system did not display Insert Headers checkbox.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('.ant-select-selector').click(); //Protocol
        cy.get(':nth-child(4) > .ant-select-item-option-content').click(); //HTTPs

        cy.wait(700);


    })

    it('Usiribities (User select Protocol = Terminated HTTPS  .  The system display Insert Headers checkbox , SSL Certificates card.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('.ant-select-selector').click(); //Protocol
        cy.get(':nth-child(3) > .ant-select-item-option-content').click(); //Terminated HTTPS
        cy.get('[name="insertHeaders"]').should('be.visible');
        cy.get(':nth-child(3) > .card').should('be.visible');

        cy.wait(700);


    })

    it('Usiribities (User select Protocol = Terminated HTTPS / UDP . The system Port Prefill = 443)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('.ant-select-selector').click(); //Protocol
        cy.get(':nth-child(3) > .ant-select-item-option-content').click(); //Terminated HTTPS
        cy.get('[name="port"]').should('have.value', '443');
        cy.wait(500);

        cy.get('.ant-select-selector').click(); //Protocol
        cy.get(':nth-child(5) > .ant-select-item-option-content').click(); //Terminated HTTPS
        cy.get('[name="port"]').should('have.value', '443');

        cy.wait(700);


    })

    it('Usiribities (User searches for Pool entry by Pool Name / Algorithm / Protocol / Monitor Type.  The system displays the searched list.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('#search').type('test-Pool');
        cy.wait(500);
        cy.get('#search').clear().type('SOURCE_IP');
        cy.wait(500);
        cy.get('#search').clear().type('HTTPS');

        cy.wait(700);


    })

    it('Usiribities (User click Add button.  The system Open new tab leads to Create Pool page.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('.d-flex > .ICON').invoke('removeAttr', 'target').click();

        cy.wait(700);


    })

    it('Usiribities (User searches for SSL Certificates entry by SSL Certificates Name / Common Name (CN).  The system displays the searched list.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener
        cy.get('.ant-select-selector').click(); //Protocol
        cy.get(':nth-child(3) > .ant-select-item-option-content').click(); //Terminated HTTPS
        cy.contains('.card', 'SSL Certificates').within(() => {
            cy.get('#search').type('test-SSL')
            cy.wait(500);
            cy.get('#search').clear().type('Somlove')
        })
        cy.wait(1000);


    })

    it('Usiribities (User click Add button.  The system Open new tab leads to Create SSL Certificates page.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener

        cy.get('.ant-select-selector').click(); //Protocol
        cy.get(':nth-child(3) > .ant-select-item-option-content').click(); //Terminated HTTPS
        cy.get('[href="/cloud-server/ssl/new"]')
            .invoke('removeAttr', 'target').click();


    })

    it('Usiribities (User select Listener Protocol = TERMINATED_HTTPS and Pool with Protocol “HTTPS“.  The system display Modal Error.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(4000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)

        cy.get(':nth-child(4) > .nav-link').last().click({ force: true }); //Pool Tab
        cy.get(':nth-child(3) > .px-0').click(); //Listener Tab
        cy.contains('Create Listener').invoke('removeAttr', 'target').click(); //Create Listener

        cy.get('.ant-select-selector').click(); //Protocol
        cy.get(':nth-child(3) > .ant-select-item-option-content').click(); //Terminated HTTPS
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Error')
            .and('contain', 'Failed creation.')
            .and('contain', "The Listener Protocol 'TERMINATED_HTTPS' with Pool Protocol 'HTTPS' cannot be created.")
            .and('contain', "Please try again.")
            .wait(700)

    })
})