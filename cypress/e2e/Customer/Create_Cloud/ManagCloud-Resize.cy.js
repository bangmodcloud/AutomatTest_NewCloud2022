
describe('Manage Cloud / Resize Instance', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usibirities (User select the desired new size and click Next. The system leads to step 2. ปรับขนาด Disk.)', () => {
      
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    it('Usibirities (User select ไม่ต้องการปรับขนาด SSD Disk radio and click Create and User click ยกเลิก. The system display modal “ยืนยันการปรับขนาด Cloud ?” and closed modal.)', () => {
  
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Cloud Resize?')
            .contains('button', 'Cancel')
            .click();
        cy.wait(700);
    })

    it('Usibirities (User click ยืนยันการปรับขนาด Cloud and click ยกเลิก. The system display modal “ยืนยันคำสั่ง Soft Shutdown ? “ and closed modal.)', () => {
   
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Cloud Resize?')
            .contains('button', 'Confirm Resize')
            .click();
        cy.wait(500);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Soft Shutdown')
            .contains('button', 'Cancel')
            .click();
        cy.wait(700);
    })


    it('Usibirities (User select ต้องการปรับขนาด SSD Disk radio. The system display field จำนวน Size เดิม , field  จำนวน Size ใหม่ที่คุณต้องการ และ alert note “กรุณาระบุตัวเลขมากกว่าค่าเดิมคือ 30”)', () => {

        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('.callout').contains('Please enter a numbergreater than current size 30');
        cy.get('[type="number"]').type('40');


        cy.wait(700);

    })


    it('Validation (User do not specify จำนวน Size ใหม่ที่คุณต้องการ. The system display alert massage “Please input data”)', () => {
       
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('.callout').contains('Please enter a numbergreater than current size 30');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')


        cy.wait(700);

    })

    it('Validation (User enters the number of Size less than 30. The system display alert massage “กรุณากรอกจำนวนมากกว่า 30 ขึ้นไป”)', () => {

        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('.callout').contains('Please enter a numbergreater than current size 30');
        cy.get('[type="number"]').type('20');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter a number greater than current size')


        cy.wait(700);

    })

    it('Usibirities (User specify จำนวน Size ใหม่ที่คุณต้องการ and click Create and click ยกลิก. The system display modal “ยืนยันการปรับขนาด Cloud ?”.)', () => {
      
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('[type="number"]').type('40');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Cloud Resize?')
            .contains('button', 'Cancel')
            .click();

        cy.wait(700);

    })

    it('Usibirities (User click ยืนยันการปรับขนาด Cloud and click ยกเลิก. The system display modal “ยืนยันคำสั่ง Soft Shutdown ? “ and closed modal.)', () => {

        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('[type="number"]').type('40');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Cloud Resize?')
            .contains('button', 'Confirm Resize')
            .click();

        cy.wait(500);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Soft Shutdown ?')
            .contains('button', 'Cancel')
            .click();

        cy.wait(700);

    })

    it('Action success', () => {

        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Cloud Resize?')
            .contains('button', 'Confirm Resize?')
            .click();
        cy.wait(700);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Soft Shutdown ?')
            .contains('button', 'Confirm Soft Shutdown')
            .click();
        cy.wait(20000);


    })

    it('Action success (User try Resize and do want to resize the SSD Disk.)', () => {
   
        cy.get(':nth-child(2) > :nth-child(2) > .underline-link').click();
        cy.wait(500);
        cy.contains('Action').as('btn').click();
        cy.contains('Resize').click();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get('[type="number"]').type('40');
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Cloud Resize?')
            .contains('button', 'Confirm Resize')
            .click();
        cy.wait(500);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Confirm Soft Shutdown ?')
            .contains('button', 'Confirm Soft Shutdown')
            .click();
        cy.wait(20000);

    })

    it('Usabilities ( User go to Billing and Cost tab Billed. The system display Items to Resize Cloud.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#billing-and-cost').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').should('have.text','ResizePlan-0.15to0.15-cloud-test-1')
        
        cy.wait(700);


    })

    it('Usabilities ( User go to My Pocket. The system display Items to Resize Cloud.)', () => {

   
        cy.get('#billing-collapse').click({ force: true });
        cy.get('#my-pocket').click({ force: true });
        cy.wait(700);
        cy.get(':nth-child(2) > .px-0').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(5) > .underline-link').should('have.text','ResizePlan-0.15to0.15-cloud-test-1')
        
        cy.wait(700);


    })
})

   


