
describe('Manage Cloud / Terminate', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true }); 
        cy.get('.app_renderer_common_button__common-button-style.show > .dropdown-menu > button.no-hover').click(); // Terminat
        cy.get('[name="hostname"]').type('modvm-Wara-YM-1')
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันการ Terminate ?')
            .contains('button', 'ยืนยันการ Terminate')
            .click();
        cy.wait(700);
       


    })

    it('Usibirities (Alert note “การ Terminate จะทำให้ Public Network Interface ถูกลบ และรายการ Resource อื่นจะถูก Detach ออก”).', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true }); 
        cy.get('.app_renderer_common_button__common-button-style.show > .dropdown-menu > button.no-hover').click(); // Terminat
        cy.get('.callout').contains('การ Terminate จะทำให้ Public Network Interface ถูกลบ และรายการ Resource อื่นจะถูก Detach ออก')
        cy.wait(700);
       


    })

    it('Usibirities (User select Terminate and click ยกเลิก. The system closed modal.).', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true }); 
        cy.get('.app_renderer_common_button__common-button-style.show > .dropdown-menu > button.no-hover').click(); // Terminat
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันการ Terminate ?')
                .contains('button', 'ยกเลิก')
                .click();
        cy.wait(700);
       
    })

    it('Usibirities (User click Volume tab. The system dispaly table Volume.).', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true }); 
        cy.get('.app_renderer_common_button__common-button-style.show > .dropdown-menu > button.no-hover').click(); // Terminat
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันการ Terminate ?');
        cy.get('.app_renderer_lib_style__nav-styles > .nav > .active > .px-0').click(); //Tab volum
        cy.get('.ant-table-content').should('be.visible')
                
        cy.wait(700);
       
    })

    it('Validation (User do not specify Hostname. The system display alert massage “กรุณากรอกชื่อ Hostname ให้ถูกต้อง”).', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true }); 
        cy.get('.app_renderer_common_button__common-button-style.show > .dropdown-menu > button.no-hover').click(); // Terminat
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันการ Terminate ?')
                .contains('button', 'ยืนยันการ Terminate')
                .click();

        cy.get('.text-danger').contains('กรุณากรอกชื่อ Hostname ให้ถูกต้อง');
                
        cy.wait(700);
       
    })

    it('Validation (User specify Hostname incorrectly. The system display alert massage “กรุณากรอกชื่อ Hostname ให้ถูกต้อง”).', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true }); 
        cy.get('.app_renderer_common_button__common-button-style.show > .dropdown-menu > button.no-hover').click(); // Terminat
        cy.get('[name="hostname"]').type('test')
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันการ Terminate ?')
                .contains('button', 'ยืนยันการ Terminate')
                .click();

        cy.get('.text-danger').contains('กรุณากรอกชื่อ Hostname ให้ถูกต้อง');
                
        cy.wait(700);
       
    })

    it('Usibirities (User try Terminate  succeed. The system closed modal and display alert note “Cloud ของคุณได้ถูก Terminate แล้ว โดยรายการ Cloud นี้จะถูกลบออกจากหน้ารายการของคุณในอีก 3 วัน”.).', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true }); 
        cy.get('.app_renderer_common_button__common-button-style.show > .dropdown-menu > button.no-hover').click(); // Terminat
        cy.get('[name="hostname"]').type('wara-1-1')
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันการ Terminate ?')
                .contains('button', 'ยืนยันการ Terminate')
                .click();

        cy.get('.callout').contains('Cloud ของคุณได้ถูก Terminate แล้ว โดยรายการ Cloud นี้จะถูกลบออกจากหน้ารายการของคุณในอีก 3 วัน')
                
        cy.wait(700);
       
    })

    it('Usibirities (User try Terminate  succeed. The system closed modal and display alert note “Cloud ของคุณได้ถูก Terminate แล้ว โดยรายการ Cloud นี้จะถูกลบออกจากหน้ารายการของคุณในอีก 3 วัน”.).', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true }); 
        cy.get('.app_renderer_common_button__common-button-style.show > .dropdown-menu > button.no-hover').click(); // Terminat
        cy.get('[name="hostname"]').type('wara-1-1')
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'ยืนยันการ Terminate ?')
                .contains('button', 'ยืนยันการ Terminate')
                .click();

        cy.get('.callout').contains('Cloud ของคุณได้ถูก Terminate แล้ว โดยรายการ Cloud นี้จะถูกลบออกจากหน้ารายการของคุณในอีก 3 วัน')
                
        cy.wait(700);
       
    })
})

