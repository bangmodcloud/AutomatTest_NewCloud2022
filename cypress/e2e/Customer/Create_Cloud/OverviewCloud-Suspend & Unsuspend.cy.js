describe('Overview Cloud / Change Status Suspend & Unsuspend', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (Admin click tab Online , Offline , Suspended and Unavailable . The system displays a list of items of Volume that are in Status.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/instance"]').click();
        cy.get(':nth-child(2) > .px-0').first().click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(3) > .px-0').click();
        cy.wait(700);


    })

    it('Usibirities (Admin search with Hostname and Customer. . The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/instance"]').click();
        cy.get('#search').type('plapika02@gmail.com');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('Test-Cloud');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(700);


    })

    it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/instance"]').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').invoke('removeAttr', 'target').click();
        cy.get('.header-30-semibold').contains('Manage User');
        cy.wait(1000);

    })



    it('Usibirities (Admin click hyperlink Name.  The system leads to Manage Cloud page.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/instance"]').click();
        cy.get(':nth-child(1) > :nth-child(4) > .underline-link').invoke('removeAttr', 'target').click();
        cy.get('.header-30-semibold').contains('Manage Cloud');
        cy.wait(1000);


    })

    it('Usibirities ( The system displayed field labels : \
        Instance Information card : ID,Hostname,Display Name,OS,Version,Ram (GB),CPU (Core),Login with User,Authentication Method,Create Date\
        Network Information card : Public IPv4 Address\
        Security Group card : Security Group )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('[href="/cloud/instance"]').click();
        cy.get(':nth-child(1) > :nth-child(4) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(500);
        cy.contains('label', 'No').should('have.text', 'No')
        cy.contains('label', 'Hostname').should('have.text', 'Hostname')
        cy.contains('label', 'Display Name').should('have.text', 'Display Name')
        cy.contains('label', 'OS').should('have.text', 'OS')
        cy.contains('label', 'Version').should('have.text', 'Version')
        cy.contains('label', 'Ram (GB)').should('have.text', 'Ram (GB)')
        cy.contains('label', 'CPU (Core)').should('have.text', 'CPU (Core)')
        cy.contains('label', 'Remote User').should('have.text', 'Remote User')
        cy.contains('label', 'Authentication Method').should('have.text', 'Authentication Method')
        cy.contains('label', 'Create Date').should('have.text', 'Create Date')
        cy.contains('label', 'Public IPv4 Address').should('have.text', 'Public IPv4 Address')
        cy.contains('label', 'Security Group').should('have.text', 'Security Group')
        cy.wait(700);

    })

    context('Chang Status to Suspend', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('[href="/cloud/instance"]').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(300);
            cy.contains('Suspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm suspend ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('[href="/cloud/instance"]').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(300);
            cy.contains('Suspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm suspend ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);


        })


    })

    context('Chang Status to Unsuspend', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('[href="/cloud/instance"]').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(300);
            cy.contains('Unsuspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm unsuspend ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(700);


        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('[href="/cloud/instance"]').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.wait(300);
            cy.contains('Unsuspend').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm unsuspend ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);


        })


    })
})