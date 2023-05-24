describe('Manage News / Edit News', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Action success', () => {

        cy.get('#news').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('#title').type('NT ร่วมงานสัมมนา “PDPA Going Forward”และลงนามความร่วมมือว่า ด้วยการส่งเสริมความร่วมมือ กับสำนั...');
        cy.wait(300);
        cy.get('#description').type('พันเอก สรรพชัยย์ หุวะนันทน์ กรรมการผู้จัดการใหญ่ บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน) หรือ NT \
                พร้อมด้วย ดร.วงกต วิจักขณ์สังสิทธิ์ รองกรรมการผู้จัดการใหญ่ สายงานดิจิทัล นายรังสรรค์ จันทร์นฤกุล รองกรรมการผู้จัดการใหญ่ สายงานธุรกิจลูกค้าองค์กร ...');
        cy.get('[for="imagePath"]').click().selectFile('cypress/fixtures/News.png');
        cy.get('[type="submit"]').click();
        cy.wait(300);


    })

    it('Validation (Admin does not enter Textfield. The system display alert message “Please input data”)', () => {

        cy.get('#news').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('#title').clear();
        cy.wait(300);
        cy.get('#description').clear()
        cy.get('[for="imagePath"]').click().selectFile('cypress/fixtures/News.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(300);


    })

    it('Validation (Admin does enter File size over 5 MB.. The system display alert message “File must be smaller than 5 MB”)', () => {

        cy.get('#news').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('Edit').click();
        cy.get('#title').type('NT ร่วมงานสัมมนา “PDPA Going Forward”และลงนามความร่วมมือว่า ด้วยการส่งเสริมความร่วมมือ กับสำนั...');
        cy.wait(300);
        cy.get('#description').type('พันเอก สรรพชัยย์ หุวะนันทน์ กรรมการผู้จัดการใหญ่ บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน) หรือ NT \
                พร้อมด้วย ดร.วงกต วิจักขณ์สังสิทธิ์ รองกรรมการผู้จัดการใหญ่ สายงานดิจิทัล นายรังสรรค์ จันทร์นฤกุล รองกรรมการผู้จัดการใหญ่ สายงานธุรกิจลูกค้าองค์กร ...');
        cy.get('[for="imagePath"]').click().selectFile('cypress/fixtures/News 7 MB.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('File must be smaller than 5 MB')
        cy.wait(300);


    })

    it('Usibirities (Admin click Cancel button. The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('#news').click();
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.contains('Edit').click();
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(500)
                .contains('button', 'Yes')
                .click()
        cy.wait(300);


    })
})