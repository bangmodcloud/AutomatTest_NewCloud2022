describe('Create Issues Type', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (User click Edit button. The system displayed Field labels as follows:\
        Department, Priority, Issue Type, Published)', () => {

        cy.get('#ticket').click();
        cy.get('[href="/nt/ticket/new"]').click();

        cy.contains('label', 'Department').should('have.text', 'Department')
        cy.contains('label', 'Priority').should('have.text', 'Priority')
        cy.contains('label', 'Issue Type').should('have.text', 'Issue Type')
        cy.contains('label', 'Published').should('have.text', 'Published')
        cy.wait(700);

    })

    it('Validation (Admin does not enter selectfield..  The system display alert messsage “ Please select data” )', () => {

        cy.get('#ticket').click();
        cy.get('[href="/nt/ticket/new"]').click();
        cy.get('#issue').type('Refunded');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);

    })

    it('Validation (Admin does not enter selectfield..  The system display alert messsage “ Please select data” )', () => {

        cy.get('#ticket').click();
        cy.get('[href="/nt/ticket/new"]').click();
        cy.get('#issue').type('Refunded');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);

    })


    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#ticket').click();
        cy.get('[href="/nt/ticket/new"]').click();
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(2) > .ant-select-item-option-content').last().click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Usabilities (Admin click Cancel button. The system leads to Ticket page.)', () => {

        cy.get('#ticket').click();
        cy.get('[href="/nt/ticket/new"]').click();
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.wait(700);

    })

    it('Action success', () => {


        cy.get('#ticket').click();
        cy.get('[href="/nt/ticket/new"]').click();
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click();
        cy.get(':nth-child(2) > .ant-select-item-option-content').last().click();
        cy.get('#issue').type('Refunded');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})