describe(' Create Monitor', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(4000)
    })


    it('Usibirities (Max Retries Down / Max Retries  Prefill = 3 , Delay (sec) / Timeout (sec) Prefill = 5.', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); //Pool member Tab
        cy.get(':nth-child(1) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click();
        cy.get('#maxRetriesDown').should('have.value','3');
        cy.get('#delay').should('have.value','5');
        cy.get('#maxRetries').should('have.value','3');
        cy.get('#timeout').should('have.value','5');
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); //Pool member Tab
        cy.get(':nth-child(1) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click();
        cy.get('.ant-select-selector').click(); //Type
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(6) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User did not select field select.  The system display alert message “Please select data”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); //Pool member Tab
        cy.get(':nth-child(1) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click();
        cy.get('[name="name"]').type('Test-Monitor');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);


    })

    it('Validation (User select type “HTTP”.  The system display field HTTP Method (Optional) / Expected Codes (Optional) Prefill = 200 and URL Path (Optional) Prefill = / .)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); //Pool member Tab
        cy.get(':nth-child(1) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click();
        cy.get('[name="name"]').type('Test-Monitor');
        cy.get('.ant-select-selector').click(); //Type
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#expectedCodes').should('have.value','200');
        cy.get('#urlPath').should('have.value','/');
        cy.wait(700);

    })

    it('Usibirities (User click Cancel button.  The system close tab.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); //Pool member Tab
        cy.get(':nth-child(1) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click();
        cy.wait(700);
        cy.get('small').click();
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.ant-table-row > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .px-0').click(); //Pool member Tab
        cy.get(':nth-child(1) > .app_renderer_common_button__common-button-style > .btn').invoke('removeAttr', 'target').click();
        cy.get('[name="name"]').type('Test-Monitor');
        cy.get('.ant-select-selector').click(); //Type
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(6) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })
})