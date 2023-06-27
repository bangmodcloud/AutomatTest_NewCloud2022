describe('Delete volume (default volume)', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(3000);

    })

    context('Case delete ไม่ได้ จะdelete ไม่ได้ เนื่องจากเชื่อมต่อกับ instance อื่น', () => {

        it('Usabilities ( User click Dropdown “Action” and select “Delete” The system display modal “Confirm Delete Volume?”.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume').first().click({ force: true });
            cy.wait(1000);
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(8000);
            cy.contains('Action').click();
            cy.contains('Delete').click();

            cy.wait(700);


        })

        it('Usabilities (User click No button. The system closed modal..)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume').first().click({ force: true });
            cy.wait(1000);
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(8000);
            cy.contains('Action').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .wait(500)
                .contains('button', 'No')
                .click()

            cy.wait(700);


        })

        it('Usabilities (User click Yes button. The system display modal “Can’t delete volume.”)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume').first().click({ force: true });
            cy.wait(1000);
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(8000);
            cy.contains('Action').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .wait(500)
                .contains('button', 'Yes')
                .click()

            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Can’t delete volume.')
                .wait(500)
                .contains('button', 'Close')
               

            cy.wait(700);


        })

        it('Usabilities (User click hyperlink Name. The system open new tab go to Manage your Cloud page”)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume').first().click({ force: true });
            cy.wait(1000);
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(8000);
            cy.contains('Action').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .wait(500)
                .contains('button', 'Yes')
                .click()

            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Can’t delete volume.')
                .wait(500)
                .get('.ant-table-row > :nth-child(2) > .underline-link')
                .invoke('removeAttr','target')
                .click();
               

            cy.wait(700);


        })

        it('Usabilities (User click Close button. The system closed modal.”)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume').first().click({ force: true });
            cy.wait(1000);
            cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
            cy.wait(8000);
            cy.contains('Action').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .wait(500)
                .contains('button', 'Yes')
                .click()

            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Can’t delete volume.')
                .wait(500)
                .contains('button', 'Close')
                .click();
               

            cy.wait(700);


        })

       
    })

    context('Case delete ได้ จะdelete ได้ ก็ต่อเมื่อไม่มีการเชื่อมต่อกับ instance อื่นอยู่', () => {

        it('Usabilities ( User click Dropdown “Action” and select “Delete” The system display modal “Confirm Delete Volume?”.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume').first().click({ force: true });
            cy.wait(1000);
            cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
            cy.wait(8000);
            cy.contains('Action').click();
            cy.contains('Delete').click();

            cy.wait(700);


        })

        it('Usabilities (User click No button. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume').first().click({ force: true });
            cy.wait(1000);
            cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
            cy.wait(8000);
            cy.contains('Action').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .wait(500)
                .contains('button', 'No')
                .click()

            cy.wait(700);


        })

        it('Usabilities (User click No button. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('#volume').first().click({ force: true });
            cy.wait(1000);
            cy.get(':nth-child(2) > :nth-child(1) > .underline-link').click();
            cy.wait(8000);
            cy.contains('Action').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .wait(500)
                .contains('button', 'Yes')
                .click()

            cy.wait(700);


        })
    })
})