describe('Manage User / Approved KYC', () => {
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

    it('Usabilities (Admin has not completed Verified Step KYC yet. Admin will not be able to click Toggle button = Disable)', () => {
        cy.get('#user-management-collapse').click();
        cy.get('#all-customer').click();
        cy.get(':nth-child(12) > :nth-child(2) > a').click();
        cy.get(':nth-child(2) > .px-0').click();
        cy.get('.ant-switch').should('be.disabled')

        cy.wait(700);

    })

    it('Usabilities (Admin click Toggle Approve and click No. The system display modal “Confirm Appove KYC” and close modal.)', () => {
        cy.get('#user-management-collapse').click();
        cy.get('#all-customer').click();
        cy.get(':nth-child(12) > :nth-child(2) > a').click();
        cy.get(':nth-child(2) > .px-0').click();
        cy.get('.ant-switch').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Approve KYC?')
            .wait(500)
            .contains('button', 'ไม่')
            .click();

        cy.wait(700);

    })

    it('Usabilities (User click Yes. TThe system display modal“ Update ข้อมูลสำเร็จแล้ว!” and display card “KYC Appoved”)', () => {
        cy.get('#user-management-collapse').click();
        cy.get('#all-customer').click();
        cy.get(':nth-child(12) > :nth-child(2) > a').click();
        cy.get(':nth-child(2) > .px-0').click();
        cy.get('.ant-switch').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Approve KYC?')
            .wait(500)
            .contains('button', 'ใช่')
            .click();

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Update ข้อมูลสำเร็จแล้ว!')
            .wait(500)
        
            cy.get('#kyc-approved > .app_renderer_nt_lib_style__card-style > .card > .row > div.my-auto > .app_renderer_lib_style__status > .status')
            .should('text', 'Verified')

        cy.wait(700);

    })
})