describe(' Create Keypair', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {

        //Step 1.
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.get('[href="/cloud-server/volume/new"]').click(); //Create button
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('#amount').type('50');
        cy.get('[type="submit"]').click();
         //Step 2.
        cy.get('[name="name"]').type('test-volume');
        cy.get('[type="submit"]').click();
        cy.get('#term-and-condition').check();
        cy.get('[type="submit"]').click();

        cy.wait(700);


    })


    it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {

        //Step 1.
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.get('[href="/cloud-server/volume/new"]').click(); //Create button
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');
        cy.get('#amount').type('50'); 
        cy.get('[type="submit"]').click();

         //Step 2.
        cy.get('[name="name"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณาระบุข้อมูล');


        cy.wait(700);


    })

    it('validation (User did not select Volume. The system displays alert warnning “ กรุณาเลือก Volume”', () => {

        //Step 1.
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume').first().click({force: true});
        cy.get('[href="/cloud-server/volume/new"]').click(); //Create button

        cy.get('#amount').type('50'); 
        cy.get('[type="submit"]').click();
        cy.get('.justify-content-center > .card > .card-body').contains('กรุณาเลือก Volume')

        cy.wait(700);


    })

    it('validation (User did not check term and condition check box. \
            The system displays alert warnning “ Please review your volume detail and accept term of service Click Launch to start the launch process.\
            and Create Volume button = disable”', () => {

        //Step 1.
        cy.get('#cloud-server-collapse').click({ force: true });
        cy.get('#volume-collapse').first().click({ force: true });
        cy.get('#volume').first().click({ force: true });
        cy.get('[href="/cloud-server/volume/new"]').click(); //Create button
        cy.get(':nth-child(1) > .ant-table-selection-column > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check();
        cy.get('#amount').type('50');
        cy.get('[type="submit"]').click();
        //Step 2.
        cy.get('[name="name"]').type('test-volume');
        cy.get('[type="submit"]').click();
        //Step 3.
        cy.get('.app_renderer_lib_style__warning-style > .card > .card-body').contains('Please review your volume detail and accept term of service Click Launch to start the launch process.')
        cy.get('[type="submit"]').should('be.disabled');

        cy.wait(700);


    })

    it('Validation (User does not have enough credits. The system display alert “การสร้าง Cloud คุณจะต้องมี Credit ที่สามารถใช้ได้ เพียงพอต่อการใช้งาน Instance ตั้งแต่ 7 วันจึงสามารถดำเนินการได้ กรุณาเติมเงินโดยคุณต้องเติมเงินมากกว่า 0000.00 บาท ”.', () => {

        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('[name="displayName"]').type('test');
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('การสร้าง Cloud คุณจะต้องมี Credit ที่สามารถใช้ได้ เพียงพอต่อการใช้งาน Instance ตั้งแต่ 7 วันจึงสามารถดำเนินการได้ กรุณาเติมเงินโดยคุณต้องเติมเงินมากกว่า 525.00 บาท');
        cy.wait(700);

    })

    it('Usibirities (User click เติมเงิน button. The system open new tab leads to PAYMENT CONFIRMATION page.', () => {

        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('[name="displayName"]').type('test');
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('.align-self-center > :nth-child(1) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.wait(700);

    })
})