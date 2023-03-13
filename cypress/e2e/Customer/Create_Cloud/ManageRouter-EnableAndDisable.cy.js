describe('Manage Router / Enable & Disable SNAT Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })

    context('Change toggle to Disable.', () => {

    it('Usibirities (User click No. The system closed modal.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(300);
        cy.get('.mt > .content-14-reg > .ant-switch').click(); //toggle SNAT
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disable SNAT?')
                .contains('button', 'ยกเลิก')
                .wait(200)
                .click();
            cy.wait(700);
       
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(300);
        cy.get('.mt > .content-14-reg > .ant-switch').click(); //toggle SNAT
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disable SNAT?')
                .contains('button', 'ตกลง')
                .wait(200)
                .click();
            cy.wait(700);
       
        cy.wait(3000);


    })
})

context('Change toggle Port Security Group to Enable.', () => {

    it('Usibirities (User click No. The system closed modal.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(300);
        cy.get('.mt > .content-14-reg > .ant-switch').click(); //toggle SNAT
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Enable SNAT?')
                .contains('button', 'ยกเลิก')
                .wait(200)
                .click();
            cy.wait(700);
       
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').click();
        cy.wait(300);
        cy.get('.mt > .content-14-reg > .ant-switch').click(); //toggle SNAT
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Enable SNAT?')
                .contains('button', 'ตกลง')
                .wait(200)
                .click();
            cy.wait(700);
       
        cy.wait(3000);


    })
})
})
