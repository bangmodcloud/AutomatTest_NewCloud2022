describe('Manage Load Balancer / Edit General Information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Action success', () => {

        cy.get('#load-balance-collapse').first().click({ force: true });
        cy.get('#load-balancer').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(2000);
        // cy.contains('label','Name').should('have.text','Name')
        cy.contains('.card','Size Information').contains('label','Name').should('have.text','Name')
        // cy.contains('label','Description').should('have.text','Description')
        // cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        // cy.get(':nth-child(1) > #formatName').clear().type('Edit-Load-Barancer');
        // cy.get(':nth-child(2) > #formatName').clear().type('Wara Test Edit Load Barancer');
        // cy.get('[type="submit"]').click();
        // cy.wait(700);


    })

    //   it('Action success', () => {
    //     cy.get('#cloud-collapse').click({ force: true });
    //     cy.get('#load-balance-collapse').first().click({ force: true });
    //     cy.get('#load-balancer').click();
    //     cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
    //     cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
    //     cy.get(':nth-child(1) > #formatName').clear().type('Edit-Load-Barancer');
    //     cy.get(':nth-child(2) > #formatName').clear().type('Wara Test Edit Load Barancer');
    //     cy.get('[type="submit"]').click();
    //     cy.wait(700);


    // })

    // it('Validation (User did not specify Name.  The system display alert message “Please input data”)', () => {
    //     cy.get('#cloud-collapse').click({ force: true });
    //     cy.get('#load-balance-collapse').first().click({ force: true });
    //     cy.get('#load-balancer').click();
    //     cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
    //     cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
    //     cy.get(':nth-child(1) > #formatName').clear();
    //     cy.get('[type="submit"]').click();
    //     cy.get('.text-danger').contains('กรุณาระบุข้อมูล');
    //     cy.wait(700);


    // })

    // it('Validation (User click Cancel button and click Yes.  The system display modal “ยืนยันออกจากการแก้ไข” and close Edit.)', () => {
    //     cy.get('#cloud-collapse').click({ force: true });
    //     cy.get('#load-balance-collapse').first().click({ force: true });
    //     cy.get('#load-balancer').click();
    //     cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
    //     cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
    //     cy.get('small').click();
    //     cy.get('.modal-content')
    //         .should('be.visible')
    //         .and('contain', 'ยืนยันออกจากการแก้ไข')
    //         .wait(500)
    //         .contains('button', 'ใช่')
    //         .click();
    //     cy.wait(700);
    // })

    // it('Validation (User click hyper link Private Network name.  The system Open new tab leads to Manage your Private Network page.)', () => {
    //     cy.get('#cloud-collapse').click({ force: true });
    //     cy.get('#load-balance-collapse').first().click({ force: true });
    //     cy.get('#load-balancer').click();
    //     cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
    //     cy.get(':nth-child(4) > .app_renderer_lib_style__card-style > .card').click(); //Card Subnet Information
    //     cy.wait(500);
    //     cy.get(':nth-child(1) > .content-14-reg > .underline-link').invoke('removeAttr', 'target').click(); //hyperlink Private Network
    //     cy.wait(700);
    // })


    // it('Validation (User click hyper link Subnet name.  The system Open new tab leads to Manage your Subnet page.)', () => {
    //     cy.get('#cloud-collapse').click({ force: true });
    //     cy.get('#load-balance-collapse').first().click({ force: true });
    //     cy.get('#load-balancer').click();
    //     cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
    //     cy.get(':nth-child(4) > .app_renderer_lib_style__card-style > .card').click(); //Card Subnet Information
    //     cy.wait(500);
    //     cy.get(':nth-child(2) > .content-14-reg > .underline-link').invoke('removeAttr', 'target').click(); //hyperlink Subnet
    //     cy.wait(700);
    // })
})
