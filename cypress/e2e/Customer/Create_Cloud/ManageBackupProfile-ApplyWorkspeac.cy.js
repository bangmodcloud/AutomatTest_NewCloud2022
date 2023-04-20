describe('Manage Backup Profile/ Apply Workspace ', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })  

    it('Usabilities (Admin search with / Workspace / Customer / Profile. The system displays the searched list.)', () => {
      
        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.ml-4 > .px-0').click(); //tab Apply
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); // Add Workspace
        cy.get('#search').type('Default Workspace');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('qa test');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('Backup-Profile-1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        
        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Workspace. The system open new tap to Workspace page.)', () => {
      
        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.ml-4 > .px-0').click(); //tab Apply
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); // Add Workspace
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr','target').click();
        
        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Customer. The system open new tap to Manage User  page.)', () => {
      
        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.ml-4 > .px-0').click(); //tab Apply
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); // Add Workspace
        cy.wait(300);
        cy.get(':nth-child(2) > :nth-child(3) > .underline-link').invoke('removeAttr','target').click();
        
        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Profile. The system open new tap to Manage Backup Profile page.)', () => {
      
        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.ml-4 > .px-0').click(); //tab Apply
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); // Add Workspace
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(4) > .underline-link').invoke('removeAttr','target').click();
        
        cy.wait(700);

    })

    it('Action success', () => {
      
        cy.get('#volume-collapse').click();
        cy.get('#system-backup-profile').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.get('.ml-4 > .px-0').click(); //tab Apply
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); // Add Workspace
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})
