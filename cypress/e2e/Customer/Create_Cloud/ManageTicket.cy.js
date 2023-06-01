describe('Manage Ticket', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()

    })



    it('Usabilities ( User click hyperlink Problematic item. The system leads to that service page.)', () => {

        cy.get('#ticket').click({ force: true });
        cy.wait(40000);
        cy.get(':nth-child(1) > :nth-child(4) > .underline-link').click();
        cy.wait(5000);
        cy.get('.underline-link').invoke('removeAttr','target');
        cy.wait(700);


    })

    it('Validation (User did not enter information. The system displays an alert message “ Please input data”', () => {

        cy.get('#ticket').click({ force: true });
        cy.wait(40000);
        cy.get(':nth-child(1) > :nth-child(4) > .underline-link').click();
        cy.wait(5000);
        cy.contains('Post Reply').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Validation (User uploads file size over 25 MiB.  The system display alert message “File must be smaller than 25.00 MiB”)', () => {

        cy.get('#ticket').click({ force: true });
        cy.wait(40000);
        cy.get(':nth-child(1) > :nth-child(4) > .underline-link').click();
        cy.wait(5000);
        cy.get('.pell-content').type('เกิดการผิดพลาดในการสร้าง cloud รบกวนตรวจสอบให้หน่อยค่ะ')
        cy.get('[for="file"]').selectFile('cypress/fixtures/Ex-error2.zip');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please upload a file less than 25 MB.');
        cy.contains('Post Reply').click();
       
        cy.wait(700);

    })

})