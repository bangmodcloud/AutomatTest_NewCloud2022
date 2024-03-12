describe('[Office] User Terminate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities (Admin search with filename / create_date / expired_date. The system displays the searched list.)', () => {

        cy.get('[href="/nt/user-terminated"]').click();
        cy.get('#search').type('647ede04573dbe35877e5268-personal-data.zip');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('2023-06-06');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.wait(300);
        cy.get('#search').clear().type('2023-10-04');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');

        cy.wait(700);

    })

    it('Usibirities (Admin click Hide password. The system display password of archive file.)', () => {

        cy.get('[href="/nt/user-terminated"]').click();
        cy.wait(700);
        cy.get('.password-icon').first().click();
        cy.get('.fa-copy').should('be.visible');
 

        cy.wait(700);

    })

    it('Usibirities (Admin click hyperlink File Name. The system will dlowload file.)', () => {

        cy.get('[href="/nt/user-terminated"]').click();
        cy.wait(300);
        cy.get(':nth-child(2) > .ant-table-cell > .underline-link').click();

        cy.wait(700);

    })

    it('Usibirities (Admin does not select any items. Download Selected button = Disable.)', () => {

        cy.get('[href="/nt/user-terminated"]').click();
        cy.wait(300);
        cy.contains('Download Selected').should('have.class','disabled');

        cy.wait(700);

    })

    it('Usibirities (Admin select log and click Download Selected  button. The system will download file that Admin has done to select.)', () => {

        cy.get('[href="/nt/user-terminated"]').click();
        cy.wait(300);
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.contains('Download Selected').click();

        cy.wait(700);

    })

    it('Usibirities (Admin click Download All button. The system will download file all.)', () => {

        cy.get('[href="/nt/user-terminated"]').click();
        cy.wait(300);
        cy.get('.ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.contains('Download All').click();

        cy.wait(700);

    })
})