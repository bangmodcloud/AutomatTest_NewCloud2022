describe('Create Static Route Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
      
    })

    it('Usalibities (User go to Manage Router page. The system displayed Field labels as follows: Destination CIDR, Next Hop IP)', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); //Static Route
        cy.contains('Create Static Route').click(); //Create Static Route button
        cy.contains('label', 'Destination CIDR').should('have.text', 'Destination CIDR')
        cy.contains('label', 'Next Hop IP').should('have.text', 'Next Hop IP')
        cy.wait(700);

    })


    it('Action success', () => {

            cy.get('#network-collapse').first().click({ force: true });
            cy.get('[href="/cloud-server/router"]').first().click({ force: true });
            cy.get('.underline-link').first().click({ force: true });
            cy.get(':nth-child(3) > .px-0').click(); //Static Route
            cy.contains('Create Static Route').click(); //Create Static Route button
            cy.get('#destinationCidr').type('10.0.0.0/24')
            cy.get('#nextHopIp').type('10.0.0.0')
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })

    it('Usalibities (User User hover over Warning icon. The system display tooltip “Next Hop IP must be a part of one of the subnets to which the router interfaces are connected.”', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); //Static Route
        cy.contains('Create Static Route').click(); //Create Static Route button
        cy.get('#popover-tooltips').trigger('mouseover');
        cy.wait(200)
        cy.get('.ant-tooltip-inner').contains("Next Hop IP must be a part of one of the subnets to which the router interfaces are connected.")
        cy.wait(700);

    })

    it('validation (User User did not specify Destination CIDR. The system dispaly alert massege “Please input data”', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); //Static Route
        cy.contains('Create Static Route').click(); //Create Static Route button
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('validation (User entered an Invalid format Destination CIDR. The system dispaly alert massege “Please input valid CIDR Notation”', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); //Static Route
        cy.contains('Create Static Route').click(); //Create Static Route button
        cy.get('#destinationCidr').type('10')
        cy.get('#nextHopIp').type('10.0.0.0')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input valid CIDR Notation');
        cy.wait(700);

    })

    it('validation (User entered an Invalid format Next Hop IP. The system dispaly alert massege “Invalid Format IP Address”', () => {

        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/router"]').first().click({ force: true });
        cy.get('.underline-link').first().click({ force: true });
        cy.get(':nth-child(3) > .px-0').click(); //Static Route
        cy.contains('Create Static Route').click(); //Create Static Route button
        cy.get('#destinationCidr').type('10.0.0.0/24')
        cy.get('#nextHopIp').type('10')
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Invalid Format IP Address');
        cy.wait(700);

    })
    })