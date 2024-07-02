describe(' Edit Pool', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
    })

    it('Usabilities (User go to Manage Pool page. The system displayed Field labels as follows:\
        Pool Information card : Name, Description, Algorithm,  Protocol, Session Persistence\
        Pool Members Card : Please click button to select instances or click HERE to add external member.', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });

        cy.contains('.card', 'Pool Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description')
            cy.contains('label', 'Algorithm').should('have.text', 'Algorithm')
            cy.contains('label', 'Protocol').should('have.text', 'Protocol')
            cy.contains('label', 'Session Persistence').should('have.text', 'Session Persistence')
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
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('Test-EditPool');
        cy.get('[name="description"]').clear().type('Wara Test Edit Pool');
        cy.get(':nth-child(1) > .px-0 > .ant-select > .ant-select-selector').click(); //Algorithm
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        // cy.get('[type="submit"]').click();
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
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User click Cancel button and click Yes.  The system display modal “Are you sure to leave information updating?")', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });
        cy.contains('Edit').click();
        cy.get('.vars--1060101102 > .btn').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);


    })

    it('Validation (User click another action for which the edit was not saved.  The system dispaly modal “Are you sure to leave information updating?“)', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .underline-link').click();
        cy.wait(5000)
        cy.get(':nth-child(4) > .px-0').click(); //Pool Tab
        cy.get('.underline-link').first().click({ force: true });
        cy.contains('Edit').click();
        cy.wait(700);
        cy.contains('Delete').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
        cy.wait(700);


    })
})