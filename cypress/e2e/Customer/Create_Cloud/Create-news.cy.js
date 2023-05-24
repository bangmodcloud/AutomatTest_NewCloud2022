describe('Create News', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Action success', () => {

        cy.get('#news').click();
        cy.contains('Create News').click()
        cy.get('#title').type('ส่งความสุขปีใหม่ 2566 กับ NT');
        cy.wait(300);
        cy.get('#description').type('พันเอก สรรพชัยย์ หุวะนันทน์ กรรมการผู้จัดการใหญ่ บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน) หรือ NT \
                พร้อมด้วย ดร.วงกต วิจักขณ์สังสิทธิ์ รองกรรมการผู้จัดการใหญ่ สายงานดิจิทัล นายรังสรรค์ จันทร์นฤกุล รองกรรมการผู้จัดการใหญ่ สายงานธุรกิจลูกค้าองค์กร ...');
        cy.get('[for="imagePath"]').click().selectFile('cypress/fixtures/News.png');
        cy.get('[type="submit"]').click();
        cy.wait(300);


    })

    it('Validation (Admin does not enter Textfield. The system display alert message “Please input data”)', () => {

        cy.get('#news').click();
        cy.contains('Create News').click()
        cy.get('[for="imagePath"]').click().selectFile('cypress/fixtures/News.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(300);


    })

    it('Validation (Admin does enter File size over 5 MB.. The system display alert message “File must be smaller than 5 MB”)', () => {

        cy.get('#news').click();
        cy.contains('Create News').click()
        cy.get('[for="imagePath"]').click().selectFile('cypress/fixtures/News 7 MB.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('File must be smaller than 5 MB')
        cy.wait(300);


    })

    it('Usibirities (Admin click Cancel button. The system leads to News page.)', () => {

        cy.get('#news').click();
        cy.contains('Create News').click()
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.wait(300);


    })
})