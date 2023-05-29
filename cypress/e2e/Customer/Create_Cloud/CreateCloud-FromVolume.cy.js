describe('Create Cloud From Volume', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })
    it('Action success', () => {

       //Step.1
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.wait(38000);
        cy.get('.card > .row > :nth-child(1)').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        //Step.2
        cy.get('[type="submit"]').click();
        cy.wait(500);
        //Step.3
        cy.get('[type="submit"]').click();
        cy.wait(500);
        //Step.4
        cy.get('[type="submit"]').click();
        //Step.5
        cy.get('[name="hostname"]').clear().type('hostname-volume');
        cy.get('[type="submit"]').click();
        //Step.6
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();

    })
    context('Step 1. Choose Operating System', () => {
        it('Usilibities (User select volume on Choose Image Source card. The system select Default Volume on Select Version card.)', () => {

            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').should('class', 'selected')


        })

    })
    context('Step 2. Choose Size.', () => {
        it('Usilibities (User select volume and click Next button. The system will display the selected information. It will be selected as the first item of Size.).', () => {

            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').click();
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('.ant-radio-input').should('be.checked')


        })

    })

    context('Step 3. Disk.', () => {
        it('Usilibities (The system Disable Field Size of SSD disks and Card Volume Backup and display alert warnning “Volume backup will be charged at 50 THB / 1GB / 24 Hours”)', () => {

            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            //Step 1
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').click();
            cy.get('[type="submit"]').click();
            //Step 2
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 3
            cy.get('[type="number"]').should('value', '30').and('be.disabled');
            cy.get('.callout').contains('Volume backup will be charged at 50 THB / 1GB / 24 Hours');
            cy.wait(700);

        })

       
    })

    context('Step 4. Choose autentication method.', () => {
        it('Usilibities (The system select Authenticate with password radio and display alert note “Password will be sent to e-mail :……  after successful cloud creation”)', () => {


            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            //Step 1
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').click();
            cy.get('[type="submit"]').click();
            //Step 2
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 3
            cy.get('[type="submit"]').click();
            cy.wait(700);
            //Step 4
            cy.get('.callout').contains('Password will be sent to e-mail : vara@gmail.com after successful cloud creation');

        })


    })

    context('Step 5.Setting Instance and Number of instance to be built.', () => {
        it('Validation (User does not enter Hostname.. The system display alert message “Please input data”)', () => {


            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            //Step 1
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').click();
            cy.get('[type="submit"]').click();
            //Step 2
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 3
            cy.get('[type="submit"]').click();
            cy.wait(700);
            //Step 4
            cy.get('[type="submit"]').click();
            //Step 5
            cy.get('[name="hostname"]').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');

        })

        it('Usibirities (User specify Display name (Optional). The card changes according to the Display name.)', () => {


            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            //Step 1
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').click();
            cy.get('[type="submit"]').click();
            //Step 2
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 3
            cy.get('[type="submit"]').click();
            cy.wait(700);
            //Step 4
            cy.get('[type="submit"]').click();
            //Step 5
            cy.get('[name="displayName"]').type('test-cloud-volume');
            cy.get('.instance').contains('test-cloud-volume-1');

        })

        it('Usibirities (User select Boot OS from Default Volume in step 1. The system disable Number of instance to be built field and String Number field)', () => {


            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            //Step 1
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').click();
            cy.get('[type="submit"]').click();
            //Step 2
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 3
            cy.get('[type="submit"]').click();
            cy.wait(700);
            //Step 4
            cy.get('[type="submit"]').click();
            //Step 5
            cy.get('#instanceAmount').should('be.disabled');
            cy.get('#instanceNumber').should('be.disabled');

        })

        it('Usibirities (User specify จำนวนเครื่องที่ต้องการสร้าง 1 เครื่อง. The card add according to the จำนวนเครื่องที่ต้องการสร้าง.)', () => {


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


            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            //Step 1
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').click();
            cy.get('[type="submit"]').click();
            //Step 2
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 3
            cy.get('[type="submit"]').click();
            cy.wait(700);
            //Step 4
            cy.get('[type="submit"]').click();
            //Step 5
            cy.get('[name="displayName"]').type('test-cloud-volume');
            cy.get('[type="submit"]').click();
            //Step 6
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('.callout').contains('Please accept the terms and conditions of service.');


        })

        it('Usibirities (User click Top Up button. The system open new tab leads to Top Up page.', () => {


            cy.wait(38000);
            cy.get('[href="/cloud-server/new"]').click();
            //Step 1
            cy.wait(500);
            cy.get(':nth-child(4) > .distro').click();
            cy.get('.card > .row > :nth-child(1)').click();
            cy.get('[type="submit"]').click();
            //Step 2
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 3
            cy.get('[type="submit"]').click();
            cy.wait(700);
            //Step 4
            cy.get('[type="submit"]').click();
            //Step 5
            cy.get('[name="displayName"]').type('test-cloud-volume');
            cy.get('[type="submit"]').click();
            //Step 6
            cy.wait(500);
            cy.get('[href="/nt-topup"]').last().invoke('removeAttr','target').click({force: true});
            cy.wait(700);

        })

    })


})
