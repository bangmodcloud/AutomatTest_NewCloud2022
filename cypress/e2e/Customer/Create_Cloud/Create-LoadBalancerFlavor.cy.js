describe('Create Load Balancer Flavor', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Validation (Admin did not specify information.  The system display alert messsage “ Please input data” )', () => {
        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.get('.d-flex > .btn').click(); //Create button

        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click(); //Data Transfer Price Plan
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')


        cy.wait(700);

    })

    it('Validation (Admin did not select field select.  The system display alert messsage “ Please select data” )', () => {
        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.get('.d-flex > .btn').click(); //Create button
        cy.get('#name').type('Load-Balancer-Flavor1');
        cy.get('#description').type('Test Load Balance Flavor');
        cy.get('#flavorId').type('4f2dda44-8797-4317-89de-b4dcdb4c8150');
        cy.get('#maxConcurrent').type('30');
        cy.get('#price').type('50');
        cy.get('#publish').check();
        cy.get('#internationalTransferIn').type('10');
        cy.get('#internationalTransferOut').type('10');
        cy.get('#domesticTransferIn').type('10');
        cy.get('#domesticTransferOut').type('10');
        cy.get('#privateNetworkSpeed').type('50');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data')



        cy.wait(700);

    })

    it('Usabilities (Admin select Data Transfer Price Plan.  \
        Disable field Price International Transfer IN , Price International Transfer OUT, Price Domestic Transfer IN , \
        Price Domestic Transfer OUT and Show value from $datatransferPricePlan)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.get('.d-flex > .btn').click(); //Create button
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click(); //Data Transfer Price Plan
        cy.get('#internationalTransferPriceIn').should('be.disabled').and('have.value', '10');
        cy.get('#internationalTransferPriceOut').should('be.disabled').and('have.value', '10');
        cy.get('#domesticTransferPriceIn').should('be.disabled').and('have.value', '10');
        cy.get('#domesticTransferPriceOut').should('be.disabled').and('have.value', '10');

        cy.wait(700);

    })

    it('Usabilities (Admin click Cancel and click Yes. The system display modal “Are you sure to leave information updating?” and closed modal. )', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.get('.d-flex > .btn').click(); //Create button
        cy.wait(700);
        cy.get('small').click()
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
            .click()

        cy.wait(700);

    })

    it('Action success', () => {
        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.get('.d-flex > .btn').click(); //Create button
        cy.get('#name').type('Load-Balancer-Flavor1');
        cy.get('#description').type('Test Load Balance Flavor');
        cy.get('#flavorId').type('4f2dda44-8797-4317-89de-b4dcdb4c8150');
        cy.get('#maxConcurrent').type('30');
        cy.get('#price').type('50');
        cy.get('#publish').check();
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click(); //Data Transfer Price Plan
        cy.get('#internationalTransferIn').type('10');
        cy.get('#internationalTransferOut').type('10');
        cy.get('#domesticTransferIn').type('10');
        cy.get('#domesticTransferOut').type('10');
        cy.get('#privateNetworkSpeed').type('50');
        cy.get('[type="submit"]').click();



        cy.wait(700);

    })
})