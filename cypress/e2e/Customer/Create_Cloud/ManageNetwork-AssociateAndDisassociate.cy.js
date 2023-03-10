describe(' Manage Network Interface / Associate and Disassociate Floating IP', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })
    context('Associate', () => {
        it('Usabilities (User Search Field IP Address and Description. The system displays the searched list.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > div > .underline-link').click();
            cy.get(':nth-child(3) > .px-0').click(); //Floating IP tab
            cy.get('.row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.justify-content-end > .app_renderer_lib_style__searchbar > #search').type('43.239.251.57');
            cy.wait(200);
            cy.get('.justify-content-end > .app_renderer_lib_style__searchbar > #search').clear().type('Floating IP');
            cy.wait(700);


        })

        it('Usabilities (User click Add icon. The system leads to  Create Floating IP page.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > div > .underline-link').click();
            cy.get(':nth-child(3) > .px-0').click(); //Floating IP tab
            cy.get('.row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.wait(200);
            cy.get('[href="/cloud-server/floating-ip/new"]').invoke('removeAttr', 'target').click();
            cy.wait(700);


        })

        it('Usabilities (User click Cancel button. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > div > .underline-link').click();
            cy.get(':nth-child(3) > .px-0').click(); //Floating IP tab
            cy.get('.row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Associate Floating IP')
                .wait(500)
                .contains('button', 'ยกเลิก')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > div > .underline-link').click();
            cy.get(':nth-child(3) > .px-0').click(); //Floating IP tab
            cy.get('.row > .app_renderer_common_button__common-button-style > .btn').click();
            cy.wait(700);
            cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper').click();
            cy.get('[type="submit"]').click();
            cy.wait(2000);


        })
    })

    context('Disassociate', () => {
        it('Usibirities (User click No. The system closed modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > div > .underline-link').click();
            cy.get(':nth-child(3) > .px-0').click(); //Floating IP tab
            cy.get('.app_renderer_common_button__common-button-style > .btn > .fa-light').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disassociate?')
                .wait(500)
                .contains('button', 'ไม่')
                .click();
            cy.wait(700);

        })

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/network-interface"]').first().click({ force: true });
            cy.get(':nth-child(1) > :nth-child(1) > div > .underline-link').click();
            cy.get(':nth-child(3) > .px-0').click(); //Floating IP tab
            cy.get('.app_renderer_common_button__common-button-style > .btn > .fa-light').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Disassociate?')
                .wait(500)
                .contains('button', 'ใช่')
                .click();
            cy.wait(700);

        })
    })
})