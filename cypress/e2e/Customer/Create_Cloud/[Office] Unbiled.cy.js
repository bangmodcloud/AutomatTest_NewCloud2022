describe('[Office] Unbilled', () => {

    beforeEach(() => {

        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()


    })

    it('Usibirities (Admin go to Unbilled page. The system display : >>> View Test Plan <<<<)', () => {

        cy.get('[href="/unbilled"]').click();
        cy.get('.sticky-header').contains('Unbilled');
        cy.get('.ant-select').should('be.visible');
        cy.contains('button', 'Export').should('be.visible')
        cy.get('#summary-cost')
            .should('be.visible')
            .and(chart => {
                expect(chart.height()).to.be.greaterThan(200)
            })
        cy.get('.col-md-4').eq(0)
            .should('contain', 'Cloud','Volume','Volume Backup','Floating IP and Public IP','Load Balancer')
        cy.get('#search').should('be.visible');
        cy.get('.ant-table-thead')
            .invoke('text')
            .should('contains','AccountID','Resource UID','Name','Service','Plan','Start Time','Price Plan','Usage Quantity')
        cy.get('.ant-pagination').should('be.visible');
        cy.wait(700);

    })

    it('Usibirities (Admin try filter Account. The system display the filtered Account.)', () => {

        cy.get('[href="/unbilled"]').click();
        cy.get('.ant-select')
            .type('Plapika02@gmail.com')
            .type('{enter}')//Change type for test

        cy.wait(700);

    })

    it('Usibirities (Admin try search find data center with resource uid,name, service, or plan. The system displays the searched list. If not found, it will display a message “ No Data.”.)', () => {

        cy.get('[href="/unbilled"]').click();
        cy.get('#search').type('66c70e780e517d2706fd02e9'); //Change type for test resource uid
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('volume-modvm-ojx2y-XP-1'); //Change type for test Name
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('Cloud Service'); //Change type for test Service
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('lvmdriver-1 20 GB'); //Change type for test Plan
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');

        cy.wait(700);

    })

    it('Usibirities (Admin click hyperlink AccountID. The system direct to Manage User page.)', () => {

        cy.get('[href="/unbilled"]').click();
        cy.wait(700);

        cy.get("tr td:nth-child(1) > .underline-link").eq(0).invoke('removeAttr','target').click();
        cy.title('Manage User')
        cy.wait(700);

    })

    it('Usibirities (Admin click hyperlink Name. The system direct to the Manage page of that service.)', () => {

        cy.get('[href="/unbilled"]').click();
        cy.wait(700);

        cy.get("tr td:nth-child(3) > .underline-link").eq(0).invoke('removeAttr','target').click();
        cy.wait(700);

    })

    it('Usibirities (Admin click caret-up icon on Fields Column AccountID , Resource UID , Name , Service , Plan , Start Time , Price Plan , Usage Quantity. The system will to sort ascending.)', () => {

        cy.get('[href="/unbilled"]').click();
        cy.wait(1000);

        cy.get('.ant-table-column-sorters').eq(0).click().wait(200).dblclick();
        cy.wait(500);
        cy.get('.ant-table-column-sorters').eq(1).click().wait(200).dblclick();
        cy.wait(500);
        cy.get('.ant-table-column-sorters').eq(2).click().wait(200).dblclick();
        cy.wait(500);
        cy.get('.ant-table-column-sorters').eq(3).click().wait(200).dblclick();
        cy.wait(500);
        cy.get('.ant-table-column-sorters').eq(4).click().wait(200).dblclick();
        cy.wait(500);
        cy.get('.ant-table-column-sorters').eq(5).click({force: true}).wait(200).dblclick({force: true});
        cy.wait(500);
        cy.get('.ant-table-column-sorters').eq(6).click({force: true}).wait(200).dblclick({force: true});
        cy.wait(500);
        cy.get('.ant-table-column-sorters').eq(7).click({force: true}).wait(200).dblclick({force: true});
        cy.wait(500);
        cy.get('.ant-table-column-sorters').eq(8).click({force: true}).wait(200).dblclick({force: true});
        cy.wait(700);

    })

    it('Usibirities (Admin click Export button. The system will export file .CSV and File name format: YYYY-DD)', () => {

        cy.get('[href="/unbilled"]').click();
        cy.wait(700);

        cy.contains('button', 'Export').click();
        cy.readFile('cypress/downloads/2024-08.csv') //change fileName
        cy.wait(700);

    })
})