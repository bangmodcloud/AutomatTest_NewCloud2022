describe('Create Ticket', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()

    })



    it('Validation (User did not enter Textfield.  The system display alert message “Please input data”)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get('[href="/nt-ticket/new"]').click(); //Create SSL
        cy.wait(700);
        cy.get('[for="TECHNICAL_SUPPORT"]').click();
        cy.wait(700);
        cy.get('[for="VOLUME"]').click();
        cy.get('[for="CLOUD"]').click();
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
       
        cy.get('[for="file"]').selectFile('cypress/fixtures/ex-error.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })

    it('Validation (User did not enter selectfield.  The system display alert message “Please select data”)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get('[href="/nt-ticket/new"]').click(); //Create SSL
        cy.wait(700);
        cy.get('[for="TECHNICAL_SUPPORT"]').click();
        cy.wait(700);
        cy.get('[for="VOLUME"]').click();
        cy.get('[for="CLOUD"]').click();
        cy.get('.pell-content').type('เกิดการผิดพลาดในการสร้าง cloud รบกวนตรวจสอบให้หน่อยค่ะ')
        cy.get('[for="file"]').selectFile('cypress/fixtures/ex-error.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);


    })

    it('Validation (User uploads file size over 25 MiB.  The system display alert message “File must be smaller than 25.00 MiB”)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get('[href="/nt-ticket/new"]').click(); //Create SSL
        cy.wait(1000);
        cy.get('[for="TECHNICAL_SUPPORT"]').click();
        cy.wait(500);
        cy.get('[for="VOLUME"]').click();
        cy.get('[for="CLOUD"]').click();
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('.pell-content').type('เกิดการผิดพลาดในการสร้าง cloud รบกวนตรวจสอบให้หน่อยค่ะ')
        cy.get('[for="file"]').selectFile('cypress/fixtures/Ex-error2.zip');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please upload a file less than 25 MB.');
        cy.wait(700);


    })
    it('Action success (User try Create Ticket by Internal on-site support.)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get('[href="/nt-ticket/new"]').click(); //Create SSL
        cy.wait(700);
        cy.get('[for="INTERNAL_ONSITE_SUPPORT"]').click();
        cy.wait(700);
        cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > :nth-child(1) > .choice').click();
        cy.wait(700);
        cy.get('.pell-content').type('เกิดการผิดพลาดรบกวนตรวจสอบให้หน่อยค่ะ')
        cy.get('[for="file"]').selectFile('cypress/fixtures/ex-error.png');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

    it('Action success (User try Create Ticket by Internal on-site support.)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get('[href="/nt-ticket/new"]').click(); //Create SSL
        cy.wait(500);
        cy.get('[for="RMA"]').click();
        cy.wait(700);
        cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > :nth-child(1) > .choice').click();
        cy.wait(500);
        cy.get('.pell-content').type('เกิดการผิดพลาดรบกวนตรวจสอบให้หน่อยค่ะ')
        cy.get('[for="file"]').selectFile('cypress/fixtures/ex-error.png');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })

     it('Action success (User try Create Ticket by Technical support.)', () => {

        cy.get('#ticket').click({ force: true });
        cy.get('[href="/nt-ticket/new"]').click(); //Create SSL
        cy.wait(500);
        cy.get('[for="TECHNICAL_SUPPORT"]').click();
        cy.wait(500);
        cy.get('[for="VOLUME"]').click();
        cy.get('[for="CLOUD"]').click();
        cy.get('.ant-select-selector').click();
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('.pell-content').type('เกิดการผิดพลาดในการสร้าง cloud รบกวนตรวจสอบให้หน่อยค่ะ')
        cy.get('[for="file"]').selectFile('cypress/fixtures/ex-error.png');
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })
})