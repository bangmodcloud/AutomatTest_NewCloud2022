describe('Create Volume', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usabilities (Usibirities (The system displayed field labels)', () => {

        cy.get('#volume').first().click({force: true});
        cy.contains('Create Volume').click();
        cy.contains('span', 'Size').should('have.text', 'Size');
        cy.contains('span', 'Name').should('have.text', 'Name');
        cy.contains('span', 'Description (Optional)').should('have.text', 'Description (Optional)');
       

        cy.wait(700);


    })

    it('Validation (User did not specify information. The system displays an alert message “ Please input data”', () => {

        cy.get('#volume').first().click({force: true});
        cy.contains('Create Volume').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('#amount').type('50');
        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(700);


    })


    it('Usabilities (User click toggle Do you want this volume to be automatically backed up?. Toggle change to Enable.)', () => {

        cy.get('#volume').first().click({force: true});
        cy.contains('Create Volume').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('#amount').type('50');
        cy.get('[name="name"]').clear().type('test-volume');
        cy.get('[name="description"]').type('test Volume');
        cy.get('.ant-switch').click().should('be.enabled');
       

        cy.wait(700);


    })

    it('Usabilities (User enters data and click Next button. The system leads to step  term and condition.)', () => {

        cy.get('#volume').first().click({force: true});
        cy.contains('Create Volume').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('#amount').type('50');
        cy.get('[name="name"]').clear().type('test-volume');
        cy.get('[name="description"]').type('test Volume');
        cy.get('.ant-switch').click();
        cy.get('[type="submit"]').click();
       

        cy.wait(700);


    })

    it('Usabilities (User did not check term and condition check box. The system displays alert warnning “ Please accept the terms and conditions of service”)', () => {

        cy.get('#volume').first().click({force: true});
        cy.contains('Create Volume').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('#amount').type('50');
        cy.get('[name="name"]').clear().type('test-volume');
        cy.get('[name="description"]').type('test Volume');
        cy.get('.ant-switch').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('.justify-content-center > .card > .card-body').contains('Please accept the terms and conditions of service.');
       

        cy.wait(700);


    })

    it('Usabilities (User click เติมเงิน button. The system open new tab to Tob Up page.)', () => {

        cy.get('#volume').first().click({force: true});
        cy.contains('Create Volume').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('#amount').type('50');
        cy.get('[name="name"]').clear().type('test-volume');
        cy.get('[name="description"]').type('test Volume');
        cy.get('.ant-switch').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.contains('Top Up').invoke('removeAttr','target').click({force: true});

        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#volume').first().click({force: true});
        cy.contains('Create Volume').click();
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('#amount').type('50');
        cy.get('[name="name"]').clear().type('test-volume');
        cy.get('[name="description"]').type('test Volume');
        cy.get('.ant-switch').click();
        cy.get('[type="submit"]').click();
        cy.get('#term-and-condition').check();
        cy.get('[type="submit"]').click();

        cy.wait(700);


    })
})