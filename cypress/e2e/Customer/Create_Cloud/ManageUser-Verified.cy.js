describe(' Manage User / Verified', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.intercept({
            url: 'https://office-test.bangmod.cloud/auth/login',
            method: 'GET',
        }).as("User")


        cy.visit('https://office-test.bangmod.cloud/auth/login')

        cy.get('#username').type('admin@bangmod.cloud');
        cy.get('#password').type('Adminbangmod123@');
        cy.get('.btn').click();


        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');

    })
    context(' Request to Edit : Step 4 Specify personal information)', () => {

        it('Usabilities (Admin click Verified button and click No. The system display modal “Verified Step Specify Personal information” and close modal.)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-3-verified').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Verified Step 4 Personal Information?')
                .wait(500)
                .contains('button', 'ไม่')
                .click();

            cy.wait(700);

        })

        it('Usabilities (Admin click  Yes. The system display modal “ Update ข้อมูลสำเร็จแล้ว!” and ระบบจะเปลี่ยนสถานะจากรอการยืนยันเป็นยืนยันแล้ว)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-3-verified').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Verified Step 4 Personal Information?')
                .wait(500)
                .contains('button', 'ใช่')
                .click();

            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Update ข้อมูลสำเร็จแล้ว!')
                .wait(500)

            cy.get('#specify-personal-information > .app_renderer_nt_lib_style__card-style > .card > .mx-0 > div.my-auto > .app_renderer_lib_style__status > .status')
                .should('text', 'Verified')
            cy.wait(700);

        })
    })

    context(' Request to Edit : Step 4 Specify personal information)', () => {

        it('Usabilities (Admin click Verified button and click No. The system display modal “Verified Step Specify Personal information” and close modal.)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-4-verified').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Verified Step 5 Document?')
                .wait(500)
                .contains('button', 'ไม่')
                .click();

            cy.wait(700);

        })

        it('Usabilities (Admin click  Yes. The system display modal “ Update ข้อมูลสำเร็จแล้ว!” and ระบบจะเปลี่ยนสถานะจากรอการยืนยันเป็นยืนยันแล้ว)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-4-verified').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Verified Step 5 Document?')
                .wait(500)
                .contains('button', 'ใช่')
                .click();

            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Update ข้อมูลสำเร็จแล้ว!')
                .wait(500)

                cy.get('.app_renderer_nt_user-management_detail_components-tab_kyc_upload-document__user-uploaded-document-card-styles > :nth-child(1) > .row > div.my-auto > .app_renderer_lib_style__status > .status')
                .should('text', 'Verified')
            cy.wait(700);

        })
    })
})