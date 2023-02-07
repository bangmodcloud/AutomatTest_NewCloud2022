describe('Create Cloud Normal Flow', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {

        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('[type="number"').clear().type(40);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('[name="hostname"]').clear().type('Wara-Test-Instance');
        cy.get('#instanceAmount').clear().type('2');
        cy.get('[type="submit"]').click();
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();

    })
    context('Step 1. Choose Operating System', () => {
        it('Usilibities (The system selects the OS and Version information for the User to choose as the first item of the OS and selects the first version of that OS.)', () => {

            cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get(' :nth-child(3) > .distro').should('class', 'selected')
            cy.get('.distro-version').should('class', 'selected')

        })

    })
    context('Step 2. Choose Size.', () => {
        it('Usilibities (The system will display the selected information. It will be selected as the first item of Size and display alert note “Private Network Speed ของ Data Transfer จะอยู่ที่ 1.500 Mbps”).', () => {

            cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('.callout').contains('Private Network Speed ของ Data Transfer จะอยู่ที่ 1.500 Mbps')
            cy.get('.ant-radio-input').should('be.checked')


        })

    })

    context('Step 3. Disk.', () => {
        it('Usilibities (The system will display Prefill as the minimum value that the user can specify.)', () => {

            cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('[type="number"]').should('value', '20');
            cy.wait(700);

        })

        it('Validation (User did not specify Size of SSD disks. The system display alert message “Please input data”)', () => {

            cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('[type="number"]').clear();
            cy.get('.text-danger').contains('กรุณาระบุข้อมูล');
            cy.wait(700);

        })

        it('Validation (User specify size disk less than 30. The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 30 ขึ้นไป”)', () => {

            cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('[type="number"]').clear().type('20');
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 30 ขึ้นไป');
            cy.wait(700);

        })

        it('Validation (User specify size disk less than 30. The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 30 ขึ้นไป”)', () => {

            cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('[type="number"]').clear().type('20');
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 30 ขึ้นไป');
            cy.wait(700);

        })

        it('Usilibities (User hover over the Advanced Network Setting button. The system display tooltip to tell the user the meaning of Advance Network Setting.”)', () => {

            cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').trigger('mouseover');
            cy.wait(200)
            cy.get('.ant-tooltip-inner').contains("Advance Network Setting is to set up Private Network and Security Group for additional instances. If you don't want it, you can press Next button to go to the next step.")
            cy.wait(700);

        })


    })

    context('Step 4. Choose autentication method.', () => {
        it('Usilibities (The system display alert note “Password จะถูกส่งไปที่ Email ของคุณหลังจากการสร้าง Cloud สำเร็จ: Link Email ””)', () => {

            cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('span').contains('Password จะถูกส่งไปที่ Email ของคุณหลังจากการสร้าง Cloud สำเร็จ: Wara@gmail.com')

        })


    })

    context('Step 5.Setting Instance and Number of instance to be built.', () => {
        it('Validation (User did not specify Hostname. The system display alert message “Please input data”)', () => {

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
            cy.get('[name="hostname"]').clear();
            cy.get('.text-danger').contains('กรุณาระบุข้อมูล');

        })

        it('Usibirities (User specify Display name (Optional). The card changes according to the Display name.)', () => {

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
            cy.get('.instance').contains('test-1');

        })

        it('Usibirities (User specify จำนวนเครื่องที่ต้องการสร้าง 1 เครื่อง. The card add according to the จำนวนเครื่องที่ต้องการสร้าง.)', () => {

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
            cy.get('#instanceAmount').clear().type('1')
            cy.get('.instance').should('be.visible');


        })

        it('Usibirities (User specify จำนวนเครื่องที่ต้องการสร้าง 1 เครื่อง. The card add according to the จำนวนเครื่องที่ต้องการสร้าง.)', () => {

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
            cy.get('#instanceAmount').clear().type('5')
            cy.get('.instance').should('be.visible');


        })

    })

    context('Step 6.Term and Condition.', () => {
        it('Validation (User click Create without clicking checkbox. The system display alert “กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ”.', () => {

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
            cy.get('[type="submit"]').click();
            cy.get('.callout').contains('กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ');


        })

        it('Validation (User click Create without clicking checkbox. The system display alert “กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ”.', () => {

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


})