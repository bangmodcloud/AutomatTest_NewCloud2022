describe(' Create Pool', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
    })

    it('Usabilities (User go to Create Pool page. The system displayed Field labels as follows:\
        Pool Information card : Name, Description (Optional), Algorithm,  Protocol, Session Persistence (Optional)\
        Pool Members Card : Please click button to select instances or click HERE to add external member.', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool

        cy.contains('.card', 'Pool Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description (optional)').should('have.text', 'Description (optional)')
            cy.contains('label', 'Algorithm').should('have.text', 'Algorithm')
            cy.contains('label', 'Protocol').should('have.text', 'Protocol')
            cy.contains('label', 'Session Persistence (Optional)').should('have.text', 'Session Persistence (Optional)')
        })

        cy.contains('.card', 'Pool Members').within(() => {
            cy.contains('label', 'Please click ').should('have.text', 'Please click button to select instances or click HERE to add external member.')
          
        })

        cy.wait(700);


    })

    it('Usabilities (User click Add Monitor button. The system displayed Field labels as follows:\
        Monitor Information card : Name, Type, Max Retries Down, Delay (sec), Max Retries, Timeout (sec)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.contains('Add Monitor').click(); //Add Monitor

        cy.contains('.card', 'Monitor Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Type').should('have.text', 'Type')
            cy.contains('label', 'Max Retries Down').should('have.text', 'Max Retries Down')
            cy.contains('label', 'Delay (sec)').should('have.text', 'Delay (sec)')
            cy.contains('label', 'Max Retries').last().should('have.text', 'Max Retries')
            cy.contains('label', 'Timeout (sec)').should('have.text', 'Timeout (sec)')
        })

        cy.wait(700);


    })

    it('Usabilities (User click Add Monitor button and select Type = HTTP. The system displayed Field labels as follows:\
        Monitor Information card : Name, Type, Max Retries Down, Delay (sec), Max Retries, Timeout (sec)\
        HTTP Method (Optional), Expected Codes (Optional), URL Path (Optional)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.contains('Add Monitor').click(); //Add Monitor
        cy.get('#rc_select_3').click();
        cy.get('[title="HTTP"]').click()

        cy.contains('.card', 'Monitor Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Type').should('have.text', 'Type')
            cy.contains('label', 'Max Retries Down').should('have.text', 'Max Retries Down')
            cy.contains('label', 'Delay (sec)').should('have.text', 'Delay (sec)')
            cy.contains('label', 'Max Retries').last().should('have.text', 'Max Retries')
            cy.contains('label', 'Timeout (sec)').should('have.text', 'Timeout (sec)')
            cy.contains('label', 'HTTP Method (Optional)').should('have.text', 'HTTP Method (Optional)')
            cy.contains('label', 'Expected Codes (Optional)').should('have.text', 'Expected Codes (Optional)')
            cy.contains('label', 'URL Path (Optional)').should('have.text', 'URL Path (Optional)')
        })

        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.get('[name="name"]').clear().type('Test-Pool');
        cy.get('[name="description"]').type('Wara Test Create Pool');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Algorithm
        cy.get(':nth-child(3) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click({ force: true }); //Protocol
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('.ACTIVE-ICON > .btn').first().click({ force: true }); //Instance Hostname
        cy.get(':nth-child(4) > div > .form-control').type('60'); //Port
        cy.get('[type="submit"]').click();
        cy.wait(5000);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool

        cy.get('[name="name"]').clear().type('Test-Pool');
        cy.get('[name="description"]').type('Wara Test Create Pool');
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click(); //Algorithm
        cy.get(':nth-child(3) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click({ force: true }); //Protocol
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('.ACTIVE-ICON > .btn').first().click({ force: true }); //Instance Hostname

        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User did not select field select.  The system display alert message “Please select data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.get('[name="name"]').clear().type('Test-Pool');
        cy.get('[name="description"]').type('Wara Test Create Pool');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);


    })

    it('Usiribities (User click hyper link “HERE”.  The system display table Allocated Members.”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.contains('.card', 'Pool Members').should('be.visible')
        cy.wait(700);


    })

    it('Validation (User entered an Invalid format IP address.  The system dispaly alert massege “Invalid Format IP Address”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.get('[name="0IpAddress"]').type('1');
        cy.get(':nth-child(2) > .card').click();
        cy.get('.text-danger').contains('Invalid Format IP Address');
        cy.wait(700);


    })

    it('Validation (User entered more or less ports than the system-defined range.  The system dispaly alert massege “Please input data in range 0-256”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.get('[name="0IpAddress"]').type('15.255.123.109');
        cy.get('[name="0Port"]').type('60');
        cy.get('[name="0Weight"]').clear().type('-1');
        cy.get(':nth-child(2) > .card').click();
        cy.get('.text-danger').contains('Please input data in range 0-256');
        cy.wait(700);


    })

    it('Usiribities (User click Add External Member button.  The system dispaly add table row.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.contains('Add External Member').click(); //Add External Member
        cy.get('tr').last().should('be.visible');
        cy.wait(700);


    })

    it('Usiribities (User click minus icon.  The system close table row.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('[href="#"]').click();
        cy.contains('Add External Member').click(); //Add External Member
        cy.wait(700);
        cy.get('.DANGER-ICON .btn').last().click(); //minus icon
        cy.wait(700);


    })

    it('Usiribities (User click icon add button in the Instance Hostname column.  The system display IP Address.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('[aria-label="Expand row"]').first().click({ force: true });
        cy.get('td').should('be.visible');
        cy.wait(700);

    })

    it('Usiribities (User click hyper link Instance Hostname.  The system open new tab leads to Manage your cloud page.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('.underline-link').first().invoke('removeAttr', 'target').click();
        cy.wait(700);

    })

    it('Usiribities (User click icon add button from Available Instances.  That list will be displayed at Allocated Members.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('.ACTIVE-ICON > .btn').first().click({ force: true }); //Instance Hostname
        cy.contains('.card', 'Pool Members').within(() => {
        cy.get('.ant-table').should('be.visible')
        })
        cy.wait(700);

    })

    it('Usiribities (User searches for Private Network entry by Instance Hostname.  The system displays the searched list.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.get('#search').type('Wara-Test-1');
        cy.wait(700);

    })

    it('Usiribities (User click Add Monitor button.  The system add new card “Monitor Information”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.contains('Add Monitor').click(); //Add Monitor
        cy.wait(700);

    })

    it('Usiribities (User click Delete Monitor button.  The system close card.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(6000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.contains('Create Pool').invoke('removeAttr', 'target').click(); //Create Pool
        cy.wait(700);
        cy.contains('Add Monitor').click(); //Add Monitor
        cy.wait(700);
        cy.contains('Delete Monitor').click(); //Delete Monitor
        cy.wait(700);

    })


})