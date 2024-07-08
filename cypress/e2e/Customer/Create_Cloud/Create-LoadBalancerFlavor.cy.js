describe('Create Load Balancer Flavor', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (The system displayed Field labels as follows: >> "view test plan" )', () => {
        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.contains('Create Flavor').click(); //Create button
        cy.contains('.card','Load Balancer Flavor Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description (Optional and will not be displayed on the customer side)')
            cy.contains('label', 'Flavor ID from Openstack').should('have.text', 'Flavor ID from Openstack')
            cy.contains('label', 'Max concurrent').should('have.text', 'Max concurrent')
            cy.contains('label', 'Price').should('have.text', 'Price')
            cy.contains('label', 'High Availability').should('have.text', 'High Availability')
            cy.contains('label', 'Published').should('have.text', 'Published')
        })

        cy.contains('.card', 'Network Information').within(() => {
            cy.contains('label', 'Data Transfer Price Plan').should('have.text', 'Data Transfer Price Plan');
            cy.contains('label', 'Price International Transfer IN (Price / 1 GB)').should('include.text', 'Price International Transfer IN (Price / 1 GB)');
            cy.contains('label', 'International Transfer IN').should('include.text', 'International Transfer IN');
            cy.contains('label', 'Price International Transfer OUT (Price / 1 GB)').should('include.text', 'Price International Transfer OUT (Price / 1 GB)');
            cy.contains('label', 'International Transfer OUT').should('include.text', 'International Transfer OUT');
            cy.contains('label', 'Price Domestic Transfer IN (Price / 1 GB)').should('include.text', 'Price Domestic Transfer IN (Price / 1 GB)');
            cy.contains('label', 'Domestic Transfer IN').should('include.text', 'Domestic Transfer IN');
            cy.contains('label', 'Price Domestic Transfer OUT (Price / 1 GB)').should('include.text', 'Price Domestic Transfer OUT (Price / 1 GB)');
            cy.contains('label', 'Domestic Transfer OUT').should('include.text', 'Domestic Transfer OUT');
            cy.contains('label', 'Private Network Speed').should('have.text', 'Private Network Speed');

        })

        cy.wait(700);

    })

    it('Validation (Admin did not specify information.  The system display alert messsage “ Please input data” )', () => {
        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.contains('Create Flavor').click(); //Create button

        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')


        cy.wait(700);

    })

    it('Usabilities (Admin select Data Transfer Price Plan.  \
        Disable field Price International Transfer IN , Price International Transfer OUT, Price Domestic Transfer IN , \
        Price Domestic Transfer OUT and Show value from $datatransferPricePlan)', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.contains('Create Flavor').click(); //Create button
        cy.get('#internationalTransferPriceIn').should('be.disabled').and('have.value', '10');
        cy.get('#internationalTransferPriceOut').should('be.disabled').and('have.value', '10');
        cy.get('#domesticTransferPriceIn').should('be.disabled').and('have.value', '10');
        cy.get('#domesticTransferPriceOut').should('be.disabled').and('have.value', '10');

        cy.wait(700);

    })

    it('Usabilities (Admin click Cancel and click Yes. The system display modal “Are you sure to leave information updating?” and closed modal. )', () => {

        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.contains('Create Flavor').click(); //Create button
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
        cy.contains('Create Flavor').click(); //Create button
        cy.get('#name').type('Load-Balancer-Flavor1');
        cy.get('#description').type('Test Load Balance Flavor');
        cy.get('#flavorId').type('4f2dda44-8797-4317-89de-b4dcdb4c8150');
        cy.get('#maxConcurrent').type('30');
        cy.get('#price').type('50');
        cy.get('#publish').check();
        cy.get('[type="submit"]').click();



        cy.wait(700);

    })


    it('Usibirities (Admin go to Manage Load Balancer Flavor page. The system displayed Field labels as follows: >> "view test plan" )', () => {
        cy.get('#lb-collapse').click();
        cy.get('#load-balancer-flavor').click();
        cy.get('.underline-link').first().click();
        cy.contains('.card','Load Balancer Flavor Information').within(() => {
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description')
            cy.contains('label', 'Flavor ID from Openstack').should('have.text', 'Flavor ID from Openstack')
            cy.contains('label', 'Max concurrent').should('have.text', 'Max concurrent')
            cy.contains('label', 'Price').should('have.text', 'Price')
            cy.contains('label', 'High Availability').should('have.text', 'High Availability')
        })

        cy.contains('.card', 'Network Information').within(() => {
            cy.contains('label', 'Data Transfer Price Plan').should('have.text', 'Data Transfer Price Plan');
            cy.contains('label', 'Price International Transfer IN (Price / 1 GB)').should('include.text', 'Price International Transfer IN (Price / 1 GB)');
            cy.contains('label', 'International Transfer IN').should('include.text', 'International Transfer IN');
            cy.contains('label', 'Price International Transfer OUT (Price / 1 GB)').should('include.text', 'Price International Transfer OUT (Price / 1 GB)');
            cy.contains('label', 'International Transfer OUT').should('include.text', 'International Transfer OUT');
            cy.contains('label', 'Price Domestic Transfer IN (Price / 1 GB)').should('include.text', 'Price Domestic Transfer IN (Price / 1 GB)');
            cy.contains('label', 'Domestic Transfer IN').should('include.text', 'Domestic Transfer IN');
            cy.contains('label', 'Price Domestic Transfer OUT (Price / 1 GB)').should('include.text', 'Price Domestic Transfer OUT (Price / 1 GB)');
            cy.contains('label', 'Domestic Transfer OUT').should('include.text', 'Domestic Transfer OUT');
            cy.contains('label', 'Private Network Speed').should('have.text', 'Private Network Speed (Mbps)');

        })

        cy.wait(700);

    })
})