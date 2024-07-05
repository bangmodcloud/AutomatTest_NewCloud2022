
describe('Create Size', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities ( The system displayed field labels : >> "View TestPlan")', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/size-plan"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Create Size').click();

        cy.contains('.card', 'Size Information').within(() => {
            cy.contains('label', 'Flavor ID').should('have.text', 'Flavor ID');
            cy.contains('label', 'Price').should('have.text', 'Price');
            cy.contains('label', 'Ram').should('have.text', 'Ram');
            cy.contains('label', 'CPU').should('have.text', 'CPU');
            cy.contains('label', 'Published').should('have.text', 'Published');

        })

        cy.contains('.card', 'Network Information').within(() => {
            cy.contains('label', 'Select Data Transfer Price Plan').should('have.text', 'Select Data Transfer Price Plan');
            cy.contains('label', 'Price International Transfer In (Price / 1 GB)').should('include.text', 'Price International Transfer In (Price / 1 GB)');
            cy.contains('label', 'International Transfer IN').should('include.text', 'International Transfer IN');
            cy.contains('label', 'Price International Transfer OUT (Price / 1 GB)').should('include.text', 'Price International Transfer OUT (Price / 1 GB)');
            cy.contains('label', 'International Transfer OUT').should('include.text', 'International Transfer OUT');
            cy.contains('label', 'Price Domestic Transfer In (Price / 1 GB)').should('include.text', 'Price Domestic Transfer In (Price / 1 GB)');
            cy.contains('label', 'Domestic Transfer IN').should('include.text', 'Domestic Transfer IN');
            cy.contains('label', 'Price Domestic Transfer OUT (Price / 1 GB)').should('include.text', 'Price Domestic Transfer OUT (Price / 1 GB)');
            cy.contains('label', 'Domestic Transfer OUT').should('include.text', 'Domestic Transfer OUT');
            cy.contains('label', 'Private Network Speed').should('have.text', 'Private Network Speed');

        })
        cy.wait(700);

    })


    it('Usabilities (The system setfield Price International Transfer In (Price / 1 GB) / \
        Price International Transfer OUT (Price / 1 GB) / Price Domestic Transfer In (Price / \
        1 GB) and Price Domestic Transfer OUT (Price / 1 GB) = Disabled.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/size-plan"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Create Size').click();

        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .input-group > #amount').should('be.disabled'); // Price International Transfer In (Price / 1 GB)
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .input-group > #amount').should('be.disabled'); // Price International Transfer OUT (Price / 1 GB)
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .input-group > #amount').should('be.disabled'); // Price Domestic Transfer In (Price / 1 GB)
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > .input-group > #amount').should('be.disabled'); //Price Domestic Transfer OUT (Price / 1 GB)
        cy.wait(700);


    })

    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/size-plan"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Create Size').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })


    it('Validation (Admin entered the Flavor ID incorrectly according to the format.  The system display alert messsage “Please enter the correct information according to the format.” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/size-plan"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Create Size').click();
        cy.get('#flavorId').type('1');
        cy.get('.card-body > :nth-child(2) > :nth-child(1) > .input-group > #amount').type('100'); // Price (THB/Month)
        cy.get(':nth-child(2) > .input-group > #amount').type('1024'); // Ram (MB)
        cy.get(':nth-child(3) > .input-group > #amount').type('3'); // CPU (Core)
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter the correct information according to the format.');
        cy.wait(700);


    })

    it('Validation (Admin click Cancel button. The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/size-plan"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Create Size').click();
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/size-plan"]').click();
        cy.get('.underline-link').first().click();
        cy.wait(700);
        cy.contains('Create Size').click();
        cy.get('#flavorId').type('4f2dda44-8797-4317-89de-b4dcdb4c8150');
        cy.get('.card-body > :nth-child(2) > :nth-child(1) > .input-group > #amount').type('100'); // Price (THB/Month)
        cy.get(':nth-child(2) > .input-group > #amount').type('1024'); // Ram (MB)
        cy.get(':nth-child(3) > .input-group > #amount').type('3'); // CPU (Core)
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    context('Manage Size page.', () => {
        it('Usibirities ( The system displayed field labels : >> "View TestPlan")', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('[href="/cloud/size-plan"]').click();
            cy.get('.underline-link').first().click();
            cy.wait(700);
            cy.get('.underline-link').first().click();

            cy.contains('.card', 'Size Information').within(() => {
                cy.contains('label', 'ID').should('have.text', 'ID');
                cy.contains('label', 'Flavor ID').should('have.text', 'Flavor ID');
                cy.contains('label', 'Price').should('have.text', 'Price');
                cy.contains('label', 'Ram (MB)').should('have.text', 'Ram (MB)');
                cy.contains('label', 'CPU (Core)').should('have.text', 'CPU (Core)');

            })

            cy.contains('.card', 'Network Information').within(() => {
                cy.contains('label', 'Data Transfer Price Plan').should('have.text', 'Data Transfer Price Plan');
                cy.contains('label', 'Price International Transfer IN / OUT (Price / 1 GB)').should('include.text', 'Price International Transfer IN / OUT (Price / 1 GB)');
                cy.contains('label', 'International Transfer IN/OUT (GB)').should('include.text', 'International Transfer IN/OUT (GB)');
                cy.contains('label', 'Price Domestic Transfer IN / OUT (Price / 1 GB)').should('include.text', 'Price Domestic Transfer IN / OUT (Price / 1 GB)');
                cy.contains('label', 'Domestic Transfer IN/OUT (GB)').should('include.text', 'Domestic Transfer IN/OUT (GB)');
                cy.contains('label', 'Private Network Speed (Mbps)').should('include.text', 'Private Network Speed (Mbps)');

            })
            cy.wait(700);

        })
    })
})