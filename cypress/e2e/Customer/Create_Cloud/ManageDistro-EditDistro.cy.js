describe('Manage Distro / Edit Distro Information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibilities (The system set Size Plan and Support SSH Key = Disabled.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
        cy.contains('Edit').click();
        cy.get('[name="sizePlanId"]').should('be.disabled');
        cy.get('#enable-ssh').should('be.disabled');


        cy.wait(700);

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
            cy.contains('Edit').click();
            cy.get('[name="name"]').clear();
            cy.get('#amount').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');

            cy.wait(700);

        })

    it('Validation (Admin does not Upload Logo.  The system display alert message “Please Upload Logo” )', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
            cy.contains('Edit').click();
            cy.get('.img-banner > .fas').click();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please Upload Logo');

            cy.wait(700);

        })

    it('Validation (Admin upload image file exceeds the specified size.  The system display alert message “Image size must be 100 x 100 pixels.” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
        cy.contains('Edit').click();
        cy.get('#upload-files').selectFile('cypress/fixtures/logo2.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Image size must be 100 x 100 pixels.');

        cy.wait(700);

    })

    it('Validation (Admin click Cancel button.  The system display modal “Leave Site ?.”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
        cy.contains('Edit').click();
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Leave Site ?')
            .wait(300)
            .contains('button', 'Leave')
            .click();


        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get('[data-row-key="6436235b5c65820716fc845a"] > :nth-child(2) > a').click();
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('Linux');
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })
})