
describe('Manage Cloud / Resize Instance', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันการปรับขนาด Cloud ?')
            .contains('button', 'ยืนยันการปรับขนาด Cloud')
            .click();
        cy.wait(700);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันคำสั่ง Soft Shutdown ?')
            .contains('button', 'ยืนยัน Soft Shutdown ?')
            .click();
        cy.wait(700);


    })

    it('Usibirities (User select the desired new size and click Next. The system leads to step 2. ปรับขนาด Disk.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    it('Usibirities (User select ไม่ต้องการปรับขนาด SSD Disk radio and click Create and User click ยกเลิก. The system display modal “ยืนยันการปรับขนาด Cloud ?” and closed modal.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันการปรับขนาด Cloud ?')
            .contains('button', 'ยกเลิก')
            .click();
        cy.wait(700);
    })

    it('Usibirities (User click ยืนยันการปรับขนาด Cloud and click ยกเลิก. The system display modal “ยืนยันคำสั่ง Soft Shutdown ? “ and closed modal.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันการปรับขนาด Cloud ?')
            .contains('button', 'ยืนยันการปรับขนาด Cloud')
            .click();
        cy.wait(500);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันคำสั่ง Soft Shutdown ?')
            .contains('button', 'ยกเลิก')
            .click();
        cy.wait(700);
    })

    it('Usibirities (User click ยืนยัน Soft Shutdow. User Resize succeed.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันการปรับขนาด Cloud ?')
            .contains('button', 'ยืนยันการปรับขนาด Cloud')
            .click();
        cy.wait(500);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันคำสั่ง Soft Shutdown ?')
            .contains('button', 'ยืนยัน Soft Shutdown ?')
            .click();
        cy.wait(700);

    })

    it('Action success (User try Resize and do want to resize the SSD Disk.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get('[type="number"]').type('40');
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันการปรับขนาด Cloud ?')
            .contains('button', 'ยืนยันการปรับขนาด Cloud')
            .click();
        cy.wait(500);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันคำสั่ง Soft Shutdown ?')
            .contains('button', 'ยืนยัน Soft Shutdown ?')
            .click();
        cy.wait(700);

    })

    it('Usibirities (User select ต้องการปรับขนาด SSD Disk radio. The system display field จำนวน Size เดิม , field  จำนวน Size ใหม่ที่คุณต้องการ และ alert note “กรุณาระบุตัวเลขมากกว่าค่าเดิมคือ 30”)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('.callout').contains('กรุณาระบุตัวเลขมากกว่าค่าเดิมคือ 30');
        cy.get('[type="number"]').type('40');


        cy.wait(700);

    })


    it('Validation (User do not specify จำนวน Size ใหม่ที่คุณต้องการ. The system display alert massage “Please input data”)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('.callout').contains('กรุณาระบุตัวเลขมากกว่าค่าเดิมคือ 30');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล')


        cy.wait(700);

    })

    it('Validation (User enters the number of Size less than 30. The system display alert massage “กรุณากรอกจำนวนมากกว่า 30 ขึ้นไป”)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('.callout').contains('กรุณาระบุตัวเลขมากกว่าค่าเดิมคือ 30');
        cy.get('[type="number"]').type('20');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า 30 ขึ้นไป')


        cy.wait(700);

    })

    it('Usibirities (User specify จำนวน Size ใหม่ที่คุณต้องการ and click Create and click ยกลิก. The system display modal “ยืนยันการปรับขนาด Cloud ?”.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('[type="number"]').type('40');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันการปรับขนาด Cloud ?')
            .contains('button', 'ยกเลิก')
            .click();

        cy.wait(700);

    })

    it('Usibirities (User click ยืนยันการปรับขนาด Cloud and click ยกเลิก. The system display modal “ยืนยันคำสั่ง Soft Shutdown ? “ and closed modal.)', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get('[data-toggle="dropdown"]').click({ force: true });
        cy.get('a.no-hover').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .ant-radio-input').check();
        cy.get(':nth-child(2) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#resize-disk').check();
        cy.get(':nth-child(2) > .input-group > .form-control').should('value', '30').and('be.disabled');
        cy.get('[type="number"]').type('40');
        cy.get('[type="submit"]').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันการปรับขนาด Cloud ?')
            .contains('button', 'ยกเลิก')
            .click();

        cy.wait(500);

        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'ยืนยันคำสั่ง Soft Shutdown ?')
            .contains('button', 'ยกเลิก')
            .click();

        cy.wait(700);

    })
})