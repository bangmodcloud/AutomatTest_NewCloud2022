describe('Create Volume Backup', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(1000)

        
        //    cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').first().click();
        //    cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').first().click();
        

    })

    it('Usabilities (The system display alert warning “การ Backup Volume ขณะใช้งาน เป็นการ Backup แบบ Point In Time โปรดดำเนินการด้วยความระมัดระวัง”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get('[href="/cloud-server/volume-backup/new"]').click();
        cy.wait(20000);
        cy.get('.callout').contains('การ Backup Volume ขณะใช้งาน เป็นการ Backup แบบ Point In Time โปรดดำเนินการด้วยความระมัดระวัง')
        cy.wait(700);


    })

    it('validation (User did not select Volume. The system display alert callout “กรุณาเลือก Volume ที่ต้องการ Backup”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get('[href="/cloud-server/volume-backup/new"]').click();
        cy.wait(20000);
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('กรุณาเลือก Volume ที่ต้องการ Backup')

        cy.wait(700);


    })

    it('validation (User did not check term and condition check box. The system display alert callout “กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get('[href="/cloud-server/volume-backup/new"]').click();
        cy.wait(20000);
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ')

        cy.wait(700);


    })

    it('validation (User searches for Volume entry by Name / Size / Type / Status. The system displays the searched list.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get('[href="/cloud-server/volume-backup/new"]').click();
        cy.wait(20000);
        cy.get('#search').type('volume-test');
        cy.wait(200);
        cy.get('#search').clear().type('volume-test');
        cy.wait(200);
        cy.get('#search').clear().type('100');
        cy.wait(200);
        cy.get('#search').clear().type('SSD');

        cy.wait(700);


    })

    it('validation (User click Add button. The system open new tab leads to Create Volume page.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get('[href="/cloud-server/volume-backup/new"]').click();
        cy.wait(20000);
        cy.get('[href="/cloud-server/volume/new"]').invoke('removeAttr','target').click();

        cy.wait(700);


    })

    it('validation (User click hyper link Volume Name. The system open new tab leads to Manage your Volume page.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get('[href="/cloud-server/volume-backup/new"]').click();
        cy.wait(20000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr','target').click();

        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume-backup').click();
        cy.get('[href="/cloud-server/volume-backup/new"]').click();
        cy.wait(20000);
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('validation (User click dropdown “Action” and select “ Backup”. The system open new tab leads to Create Volume Backup page.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume').click();
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').click();
        cy.wait(8000);
        cy.get('.dropdown > .app_renderer_common_button__common-button-style > .btn').click();
        cy.wait(700);
        cy.get('.app_renderer_common_button__common-button-style > .dropdown-menu > :nth-child(3)').click();
        cy.wait(700);


    })

    
})