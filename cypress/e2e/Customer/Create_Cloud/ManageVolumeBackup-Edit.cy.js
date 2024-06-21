describe('Manage Volume Backup / Edit General', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login();
        cy.wait(1000)


    })

    it('Usibirities (User go to Manage Volume Backup page. The system displayed Field labels as follows:\
        General Information card : ID,Name,Description,Create at,Volume\
        Specs Card : Size)', () => {

        
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        // General Information card : 
        cy.contains('label', 'ID').should('have.text', 'ID')
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')
        cy.contains('label', 'Create at').should('have.text', 'Create at')
        cy.contains('label', 'Volume').should('have.text', 'Volume')
        // Specs Card :
        cy.contains('label', 'Size').should('have.text', 'Size')
        cy.wait(1000);


    })

    it('Usibirities (User click Edit button. The system displayed Field labels as follows:\
        General Information card : ID,Name,Description,Create at,Volume\
        Specs Card : Size)', () => {

        
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.contains('Edit').click();
        // General Information card : 
        cy.contains('label', 'ID').should('have.text', 'ID')
        cy.contains('label', 'Name').should('have.text', 'Name')
        cy.contains('label', 'Description').should('have.text', 'Description')
        cy.contains('label', 'Create at').should('have.text', 'Create at')
        cy.contains('label', 'Volume').should('have.text', 'Volume')
        // Specs Card :
        cy.contains('label', 'Size').should('have.text', 'Size')
        cy.wait(1000);


    })

    it('Action success', () => {

        
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button

        cy.get('[name="name"]').clear().type('Edit-VolumeBackUp');
        cy.get('[type="submit"]').click();
        cy.wait(1000);


    })

    it('Validation (User did not specify field Name.  The system display alert messsage “ Please input data” )', () => {

        
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button

        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(1000);


    })

    it('Validation (User click  Cancel button.  The system close Edit. )', () => {

        
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        cy.wait(500);
        cy.get('.vars--1060101102 > .btn').click(); //Cancel buttonq
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
        cy.wait(1000);


    })

    it('Validation (User click another action for which the edit was not saved.  The system display modal “Are you sure to leave information updating?” )', () => {

        
        cy.get('#volume-backup').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click(); //Edit button
        cy.wait(500);

        cy.get('.ml-3 > .app_renderer_common_button__common-button-style > .btn').click();//Restore
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(500)
            .contains('button', 'Yes')
        cy.wait(1000);


    })
})