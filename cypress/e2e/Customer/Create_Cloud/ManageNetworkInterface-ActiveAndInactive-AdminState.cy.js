describe(' Manage Network Interface / Active and Inactive Admin State', () => {
    beforeEach(() => {
        cy.login()
    })

    context('Toggle change to Down.', () => {

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-switch').click() //admin state
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ตกลง')
                .click();

            cy.wait(700);

        })

        it('Usibirities (User click cancel. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-switch').click() //admin state
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ยกเลิก')
                .click();

            cy.wait(700);

        })
    })

    context('Toggle change to Up.', () => {

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-switch').click() //admin state
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ตกลง')
                .click();

            cy.wait(700);

        })

        it('Usibirities (User click cancel. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-switch').click() //admin state
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ยกเลิก')
                .click();

            cy.wait(700);

        })
    })

    context('Manage Network Interface page / Toggle change to Down. ', () => {

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(4) > .content-14-reg > :nth-child(1) > .ant-switch').click(); //admin state
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ตกลง')
                .click();

            cy.wait(700);

        })

        it('Usibirities (User click cancel. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(4) > .content-14-reg > :nth-child(1) > .ant-switch').click(); //admin state
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ยกเลิก')
                .click();

            cy.wait(700);

        })
    })

    context('Manage Network Interface page / Toggle change to Up. ', () => {

        it('Action success', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(4) > .content-14-reg > :nth-child(1) > .ant-switch').click(); //admin state
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ตกลง')
                .click();

            cy.wait(700);

        })

        it('Usibirities (User click cancel. The system close modal.)', () => {
            cy.get('#cloud-collapse').click({ force: true });
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get(':nth-child(4) > :nth-child(2) > .underline-link').click();
            cy.get(':nth-child(2) > .px-0').click(); //tab Network Interface
            cy.get('.ant-table-row > :nth-child(1) > a').click(); //link Name
            cy.get(':nth-child(4) > .content-14-reg > :nth-child(1) > .ant-switch').click(); //admin state
            cy.wait(500);
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change admin state?')
                .contains('button', 'ยกเลิก')
                .click();

            cy.wait(700);

        })
    })

})