describe('Manage User / Request to Edit [OFFICE]', () => {
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
    context(' Request to Edit : Step 1 and 2 Specify phone number)', () => {

        it('Usabilities (Admin dose not enter request. The system display alert message “Please input data”)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-1-request-edit').click();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system close modal.)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-1-request-edit').click();
            cy.wait(700);
            cy.get('#message').type('กรุณาแก้ไขเบอร์ใหม่')
            cy.get(':nth-child(3) > .d-flex > .btn').click();

            cy.wait(700);

        })

        it('Usabilities (Admin click Send button. Display messages in History Request to Edit card / display Verified button and KYC appoved = disable)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-1-request-edit').click();
            cy.wait(700);
            cy.get('#message').type('กรุณาแก้ไขเบอร์ใหม่')
            cy.get('[type="submit"]').click();
            cy.wait(1000);
            cy.get(':nth-child(2) > .sub-card').should('be.visible');
            cy.get('.ant-switch').should('be.disabled')

            cy.wait(700);

        })
    })

    context(' Request to Edit : Step 4 Specify personal information)', () => {

        it('Usabilities (Admin dose not enter request. The system display alert message “Please input data”)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-3-request-edit').click();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system close modal.)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-3-request-edit').click();
            cy.wait(700);
            cy.get('#message').type('ชื่อไม่ตรงกับบัตรประชาชน')
            cy.get(':nth-child(3) > .d-flex > .btn').click();

            cy.wait(700);

        })

        it('Usabilities (Admin click Send button. Display messages in History Request to Edit card.)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-3-request-edit').click();
            cy.wait(700);
            cy.get('#message').type('ชื่อไม่ตรงกับบัตรประชาชน')
            cy.get('[type="submit"]').click();
            cy.wait(1000);
            cy.get(':nth-child(2) > .sub-card').should('be.visible');

            cy.wait(700);

        })
    })

    context(' Request to Edit : Step 5 Upload documents to verify identity)', () => {

        it('Usabilities (Admin dose not enter request. The system display alert message “Please input data”)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-4-request-edit').click();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data')

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system close modal.)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-4-request-edit').click();
            cy.wait(700);
            cy.get('#message').type('กรุณาถ่ายรูปให้ชัดเจนกว่านี้ค่ะ')
            cy.get(':nth-child(3) > .d-flex > .btn').click();

            cy.wait(700);

        })

        it('Usabilities (Admin click Send button. Display messages in History Request to Edit card.)', () => {
            cy.get('#user-management-collapse').click();
            cy.get('#all-customer').click();
            cy.get(':nth-child(12) > :nth-child(2) > a').click();
            cy.get(':nth-child(2) > .px-0').click();
            cy.get('#step-4-request-edit').click();
            cy.wait(700);
            cy.get('#message').type('กรุณาถ่ายรูปให้ชัดเจนกว่านี้ค่ะ')
            cy.get('[type="submit"]').click();
            cy.wait(1000);
            cy.get(':nth-child(2) > .sub-card').should('be.visible');

            cy.wait(700);

        })
    })
})