describe('Office_Log', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()
        cy.wait(3000);

    })

    it('Usibirities (Admin try select filter Actor ID / Actor Type / Service Type / Target / Action.)', () => {

        cy.get('[href="/nt/log"]').click();
        cy.wait(2000);
        cy.get('[id="Actor ID"]').click();
        cy.get('[id="menu-Actor ID"]').should('have.length', 1).click();
        cy.get('[id="menu-Actor ID"] > .dropdown-header > .d-flex > .btn > .fas').click();
        cy.wait(300);
        cy.get('[id="Actor Type"]').click();
        cy.get('[id="menu-Actor Type"] > :nth-child(4)').click();
        cy.get('[id="menu-Actor Type"] > .dropdown-header > .d-flex > .btn > .fas').click();
        cy.wait(300);
        cy.get('[id="Service Type"]').click();
        cy.get('[id="menu-Service Type"] > :nth-child(4)').click();
        cy.get('[id="menu-Service Type"] > .dropdown-header > .d-flex > .btn > .fas').click();
        cy.wait(300);
        cy.get('#Target').click();
        cy.get('#menu-Target').should('have.length', 1).click();
        cy.get('#menu-Target > .dropdown-header > .d-flex > .btn > .fas').click();
        cy.wait(300);
        cy.get('#Action').click();
        cy.get('#menu-Action').should('have.length', 1).click({force: true});
        cy.get('#menu-Action > .dropdown-header > .d-flex > .btn > .fas').click();
        cy.wait(300);
        cy.wait(700);


    })


    it('Usibirities (Admin search with Timestamp / Actor Type / Actor ID / Target / Action)', () => {

        cy.get('[href="/nt/log"]').click();
        cy.wait(2000);
        cy.get('.ml-auto > #search').type('2023-06-07 17:33:32');
        cy.get('.ml-auto > #search').clear().type('System');
        cy.get('.ml-auto > #search').clear().type('System');
        cy.get('.ml-auto > #search').clear().type('Default Workspace');
        cy.get('.ml-auto > #search').clear().type('WorkspaceReservedBalanceEvent');
        cy.wait(700);


    })

    it('Usibirities (Admin try select filter Select Month. The system displays a list of each selected Filter.)', () => {

        cy.get('[href="/nt/log"]').click();
        cy.wait(2000);
        cy.get('.ant-picker').click();
        cy.get('[title="2023-06"]').click({ multiple: true });
        cy.wait(700);


    })


    it('Usibirities (Admin click hyperlink Actor_ID. The system leads to Manage User page.)', () => {

        cy.get('#log').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > :nth-child(5) > .underline-link').invoke('removeAttr', 'target').click();
        cy.get('.header-30-semibold').contains('Manage User');
        cy.wait(700);


    })

    it('Usibirities ( Admin does not select any items. Export button = Disable.)', () => {

        cy.get('[href="/nt/log"]').click();
        cy.wait(2000);
        cy.contains('Export Selected').should('not.be.enabled');
        cy.wait(700);


    })

    it('Usibirities ( Admin select log and click Export button. The system will export file that Admin has done to filter.)', () => {

        cy.get('[href="/nt/log"]').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.contains('Export Selected').click();
        cy.wait(700);


    })


    it('Usibirities ( Admin does not select filter data and click Export button. The system will export file all.)', () => {

        cy.get('[href="/nt/log"]').click();
        cy.wait(2000);
        cy.contains('Export All').invoke('removeAttr','target').click();
        cy.wait(700);


    })
})