describe('Top Up', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)
    })

    it('Action success', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.mt-3 > .topup-option').click(); //Enter the amount you want to top up yourself
        cy.get('[type="number"]').clear().type('2000');
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.get('#juristicName').type('Wara');
        cy.get('#businessId').type('1234556');
        cy.get('#branchId').type('00000');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click(); //Sub-district / Sub-area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[name="address"]').type('64')
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Usabilities (User go to Top Up page. \
        1 . Default Select the amount you want to top up. = 1000 THB \
        2 . Default Tax invoice (e-Tax) = Tax invoice (Full)', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(1) > :nth-child(1)').should('class','selected');
        cy.get('.mt-4 > :nth-child(1) > .col > .card-body > :nth-child(2)').should('class','selected');
        cy.wait(700);


    })

    it('Usabilities (User select  “Enter the amount you want to top up yourself”. \
        The system displays the input field, enter the desired amount and minimum = 0.', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.mt-3 > .topup-option').click(); //Enter the amount you want to top up yourself
        cy.get('[type="number"]')
            .should('be.visible')
            .and('have.value','0');
        cy.wait(700);


    })

    it('Usabilities (User select radio Tax invoice ( Full ) and hovers over the warning icon. \
        The system. display Type of taxpayer / e-Tax information for personal and \
        display Tooltop “This information is extracted from your personal information”.', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.mt-4 > :nth-child(1) > .col > .card-body > :nth-child(2)').should('class','selected');
        cy.get('.card-body > :nth-child(3)').should('be.visible');
        cy.get('.my-3 > :nth-child(1) > .fas').trigger('mouseover');
        cy.get('.ant-tooltip-inner').contains('This information is extracted from your personal information.')
        cy.wait(700);


    })

        it('Usabilities (User select radio Juristic. The system displays a form to enter.', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.get('.app_renderer_nt_topup_juristic-info-form__juristic-form-styles').should('be.visible')
        cy.wait(700);


    })

    it('Validation (User does not enter Text field. The system display alert message “Please Input Data”.', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click(); //Sub-district / Sub-area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input Data')
        cy.wait(700);


    })

    it('Validation (User does not select dropdowfield. The system display alert message “Please select data”.', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.get('#juristicName').type('Wara');
        cy.get('#businessId').type('1234556');
        cy.get('#branchId').type('00000');
        cy.get('[name="address"]').type('64')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data')
        cy.wait(700);


    })

    it('Usabilities (User completes the information and click Submit button. The system display information \
        1 . Juristic Name \
        2 . Juristic ID \
        3 . Branch ID \
        4 . Address.', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.get('#juristicName').type('Wara');
        cy.get('#businessId').type('1234556');
        cy.get('#branchId').type('00000');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click(); //Sub-district / Sub-area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[name="address"]').type('64')
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .col-md-2').should('be.visible').and('contain','Juristic Name');
        cy.get(':nth-child(3) > .col-md-2').should('be.visible').and('contain','Juristic ID')
        cy.get(':nth-child(4) > .col-md-2').should('be.visible').and('contain','Branch ID')
        cy.get(':nth-child(5) > .col-md-2').should('be.visible').and('contain','Address')
        cy.wait(700);


    })

    it('Usabilities (User completes the information and click Submit button. The syetem leads to PAYMENT GATEWAY page.', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.get('#juristicName').type('Wara');
        cy.get('#businessId').type('1234556');
        cy.get('#branchId').type('00000');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click(); //Sub-district / Sub-area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[name="address"]').type('64')
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Usabilities (User completes the information and click Submit button. The syetem leads to PAYMENT GATEWAY page.', () => {

        cy.get('#billing-collapse').click({ force: true });
        cy.get('#confirm-payment-nt').first().click({ force: true });
        cy.get('.card-body > :nth-child(3) > .mx-0 > .ml-3 > .far').click(); //Juristic
        cy.get('#juristicName').type('Wara');
        cy.get('#businessId').type('1234556');
        cy.get('#branchId').type('00000');
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click(); //Province
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click(); //District / Area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search').click(); //Sub-district / Sub-area
        cy.get(':nth-child(1) > .ant-select-item-option-content').last().click();
        cy.get('[name="address"]').type('64')
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })
})