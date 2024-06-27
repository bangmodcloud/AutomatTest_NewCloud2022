describe('Create Cloud Normal Flow', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Action success', () => {

        cy.contains('Create Cloud Server').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
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

            cy.contains('Create Cloud Server').click();
            cy.wait(500);
            cy.get(' :nth-child(3) > .distro').should('class', 'selected')
            cy.get('.distro-version').should('class', 'selected')

        })

    })

    context('Step 2. Choose Size.', () => {


        it('Usilibities (The system will display the selected information. It will be selected as the first item of Size and display alert note “Private Network Speed ของ Data Transfer จะอยู่ที่ 1.500 Mbps”).', () => {

            cy.contains('Create Cloud Server').click();

            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('.ant-radio-input').should('be.checked')


        })

    })

    context('Step 3. Disk.', () => {

        it('Usibirities ( The system displayed field labels ))', () => {

            cy.contains('Create Cloud Server').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.contains('label', 'Size of SSD Disks').should('have.text', 'Size of SSD Disks')
            cy.wait(700);

        })


        it('Usilibities (The system will display Prefill as the minimum value that the user can specify.)', () => {

            cy.contains('Create Cloud Server').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('[type="number"]').should('value', '10');
            cy.wait(700);

        })

        it('Validation (User did not specify Size of SSD disks. The system display alert message “Please input data”)', () => {

            cy.contains('Create Cloud Server').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('[type="number"]').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (User specify size disk less than 30. The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 30 ขึ้นไป”)', () => {

            cy.contains('Create Cloud Server').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('[type="number"]').clear().type('1');
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please enter a number greater than or equal to 10');
            cy.wait(700);

        })

        it('Usilibities (User hover over the Advanced Network Setting button. The system display tooltip to tell the user the meaning of Advance Network Setting.”)', () => {

            cy.contains('Create Cloud Server').click();
            cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.contains('Advance Network Setting').trigger('mouseover');
            cy.wait(200)
            cy.get('.ant-tooltip-inner').contains("Advance Network Setting is to set up Private Network and Security Group for additional instances. If you don't want it, you can press Next button to go to the next step.")
            cy.wait(700);

        })


    })

    context('Step 4. Choose autentication method.', () => {
        it('Usilibities (The system display alert note “Password จะถูกส่งไปที่ Email ของคุณหลังจากการสร้าง Cloud สำเร็จ: Link Email ””)', () => {

            cy.contains('Create Cloud Server').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('span').contains('Password will be sent to Email : vavara06@gmail.com after successful cloud creation') // เปลี่ยนอีเมลทุกครั้งที่เทส

        })


    })

    context('Step 5.Setting Instance and Number of instance to be built.', () => {


        it('Usibirities ( The system displayed field labels )', () => {

            cy.contains('Create Cloud Server').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.contains('label', 'Hostname').should('have.text', 'Hostname')
            cy.contains('label', 'Display name (Optional)').should('have.text', 'Display name (Optional)')
            cy.contains('label', 'Number of instance to be built').should('have.text', 'Number of instance to be built')
            cy.contains('label', 'Starting Number').should('have.text', 'Starting Number')

        })

        it('Validation (User did not specify Hostname. The system display alert message “Please input data”)', () => {

            cy.contains('Create Cloud Server').click();
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
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');

        })

        it('Usibirities (User specify Display name (Optional). The card changes according to the Display name.)', () => {

            cy.contains('Create Cloud Server').click();
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
            cy.get('.instance').contains('test');

        })

        it('Usibirities (User specify จำนวนเครื่องที่ต้องการสร้าง 1 เครื่อง. The card add according to the จำนวนเครื่องที่ต้องการสร้าง.)', () => {

            cy.contains('Create Cloud Server').click();
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

            cy.contains('Create Cloud Server').click();
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
        it('Validation (User click Create without clicking checkbox. The system display alert “Please accept the terms and conditions of service.”.', () => {

            cy.contains('Create Cloud Server').click();
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
            cy.get('.callout').contains('Please accept the terms and conditions of service.');


        })

        it('Validation (User click Create without clicking checkbox. The system display alert “กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ”.', () => {

            cy.contains('Create Cloud Server').click();
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
            cy.get('.callout').contains('To create you must have available credit—enough for 1 hour of use to be able to build. Please top up. You must top up more than 775.00 baht.');
            cy.wait(700);

        })

        it('Usibirities (User click Top Up button. The system open new tab leads to Top Up page.', () => {

            cy.contains('Create Cloud Server').click();
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

    context('Managr Your Cloud page.', () => {

        it('Usibirities ( The system displayed field labels : \
            Instance Information card : ID,Hostname,Display Name,OS,Version,Ram (GB),CPU (Core),Login with User,Authentication Method,Create Date\
            Network Information card : Public IPv4 Address\
            Security Group card : Security Group )', () => {

            cy.get('.underline-link').click();

            cy.wait(500);
            cy.contains('label', 'ID').should('have.text', 'ID')
            cy.contains('label', 'Hostname').should('have.text', 'Hostname')
            cy.contains('label', 'Display Name').should('have.text', 'Display Name')
            cy.contains('label', 'OS').should('have.text', 'OS')
            cy.contains('label', 'Version').should('have.text', 'Version')
            cy.contains('label', 'Ram (GB)').should('have.text', 'Ram (GB)')
            cy.contains('label', 'CPU (Core)').should('have.text', 'CPU (Core)')
            cy.contains('label', 'Login with User').should('have.text', 'Login with User')
            cy.contains('label', 'Authentication Method').should('have.text', 'Authentication Method')
            cy.contains('label', 'Create Date').should('have.text', 'Create Date')
            cy.contains('label', 'Public IPv4 Address').should('have.text', 'Public IPv4 Address')
            cy.contains('label', 'Security Group').should('have.text', 'Security Group')
            cy.wait(700);

        })

})

})
