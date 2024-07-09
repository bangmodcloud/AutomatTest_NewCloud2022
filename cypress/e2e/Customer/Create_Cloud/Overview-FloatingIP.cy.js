describe('Overview Floating IP', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (Admin click tab All / Available / Inactive)', () => {

            cy.get('#network-collapse').click();
            cy.get('#floating-ip').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get(':nth-child(3) > .px-0').click();
            

        })

        it('Usibirities (Admin search with ID / IP Address / Customer / Instance / Network Interface / Date Create)', () => {

            cy.get('#network-collapse').click();
            cy.get('#floating-ip').click();
            cy.get('#search').type('43.239.251.11');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('Qa test');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('modvm-w7gbj-JO-1');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('nic-f29ed63f-7c: 10.0.3.55');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);
            cy.get('#search').clear().type('2023-05-02 21:41:23');
            cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
            cy.wait(300);

        })

        it('Usibirities (Admin click hyperlink IP Address.  The system leads to Manage Floating IP page.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#floating-ip').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage Floating IP');
            

        })

        it('Usibirities (Admin click hyperlink Customer.  The system leads to Manage User page.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#floating-ip').click();
            cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
            cy.get('.header-30-semibold').contains('Manage User');
            

        })


        it('Usibirities (Admin click hyperlink Instance.  The system leads to  Manage Cloud page.)', () => {

            cy.get('#network-collapse').click();
            cy.get('#floating-ip').click();
            cy.get(':nth-child(1) > :nth-child(4) > div > .underline-link').invoke('removeAttr','target').click();
            cy.get('.header-30-semibold').contains('Manage Cloud');
            

        })


        it('Usibirities (Admin click hyperlink IP Address.  The system displayed Field labels as follows:\
            General Information card : IP Address, Description\
            Associated Instance card : Instance, Network Interface)', () => {

            cy.get('#network-collapse').click();
            cy.get('#floating-ip').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('.card','General Information').within(() => {
                cy.contains('label','IP Address').should('have.text','IP Address');
                cy.contains('label','Description').should('have.text','Description')
            })

            cy.contains('.card','Associated Instance').within(() => {
                cy.contains('label','Instance').should('have.text','Instance')
                cy.contains('label','Network Interface').should('have.text','Network Interface')
            })
            

        })

    })