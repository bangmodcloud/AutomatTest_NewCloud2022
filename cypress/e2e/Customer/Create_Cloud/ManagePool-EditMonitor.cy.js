describe(' Edit Monitor', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(4000)
    })

    it('Usabilities (User go to tab Monitor button. The system displayed Field labels as follows:\
        Monitor Information card : Name, Type, Max Retries Down, Delay (sec), Max Retries, Timeout (sec)\
        HTTP Method, Expected Codes, URL Path', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.contains('.card', 'Monitor Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Type').should('have.text', 'Type')
            cy.contains('label', 'Max Retries Down').should('have.text', 'Max Retries Down')
            cy.contains('label', 'Delay (sec)').should('have.text', 'Delay (sec)')
            cy.contains('label', 'Max Retries').last().should('have.text', 'Max Retries')
            cy.contains('label', 'Timeout (sec)').should('have.text', 'Timeout (sec)')
            cy.contains('label', 'HTTP Method').should('have.text', 'HTTP Method')
            cy.contains('label', 'Expected Codes').should('have.text', 'Expected Codes')
            cy.contains('label', 'URL Path').should('have.text', 'URL Path')
        })
        cy.wait(700);


    })

    it('Usabilities (User go to tab Monitor button and click Edit button. The system displayed Field labels as follows:\
        Monitor Information card : Name, Type, Max Retries Down, Delay (sec), Max Retries, Timeout (sec)\
        HTTP Method, Expected Codes, URL Path', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
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
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('Test-EditMonitor');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Type
        cy.get(':nth-child(2) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Usibirities (User select type “HTTP”.  The system display field HTTP Method (Optional) / Expected Codes (Optional) Prefill = 200 and URL Path (Optional) Prefill = / .)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('Test-EditMonitor');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Type
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#expectedCodes').should('have.value','200');
        cy.get('#urlPath').should('have.value','/');
        cy.wait(700);


    })

    it('Usibirities (User click Cancel button and click Yes.  The system display modal “Are you sure to leave information updating?” and close Edit.)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); // Monotor Tab
        cy.contains('Edit').click(); //Edit
        cy.wait(700);
        cy.contains('Cancel').click(); //Cancel
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click()
        cy.wait(700);


    })

})