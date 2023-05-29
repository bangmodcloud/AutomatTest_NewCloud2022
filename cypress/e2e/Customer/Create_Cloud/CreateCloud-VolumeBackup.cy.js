describe('Create Cloud Card Volume Backup', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })
    it('Action success', () => {

       //step 1
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        //step 2
        cy.get('[type="submit"]').click();
        //step 3
        cy.get('.ant-switch').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        //step 4
        cy.get('[type="submit"]').click();
        //step 5
        cy.get('[name="hostname"]').clear().type('cloud-volume-BackUp');
        cy.get('[type="submit"]').click();
        //step 6
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();

    })
    context('Step 1. Choose Operating System', () => {
        it('Usilibities (The system selects the OS and Version information for the User to choose as the first item of the OS and selects the first version of that OS.)', () => {

           
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get(' :nth-child(3) > .distro').should('class', 'selected')
            cy.get('.distro-version').should('class', 'selected')

        })

    })
    context('Step 2. Choose Size.', () => {
        it('Usilibities (The system will display the selected information.  It will be selected as the first item of Size.”).', () => {

           
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('.ant-radio-input').should('be.checked')


        })

    })

    context('Step 3. Disk.', () => {
        it('Usilibities (The system will display minimum value that the user can specify and\
            display alert warrning “Os of your choice Required test-1 Minimum at 30 GB” on Specify the number of disks card.\
            alert warrning “Volume backup will be charged at 50 THB / 1GB / 24 Hours.” on Do you want this volume automatically backed up? card.)', () => {

           
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('.callout').first().contains('Os of your choice Required SSD Minimum at 30 GB')
            cy.get('[type="number"]').should('value', '30');
            cy.get('.callout').last().contains('Volume backup will be charged at 50 THB / 1GB / 24 Hours')
            cy.wait(700);

        })

        it('Validation (User select Boot OS from Default Volume in step 1. The system disable textfield and toggle setting volume backup.)', () => {

           
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
            cy.get('.ant-switch').should('be.disabled');
            cy.wait(700);

        })

        it('Validation (User click toggle on Do you want this volume automatically backed up? card. The system change  toggle  to Enable.)', () => {

           
            cy.get('[href="/cloud-server/new"]').click();
            //Step 1
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 2
            cy.wait(500);
            cy.get('[type="submit"]').click();
            //Step 3
            cy.get('[type="number"]').should('value', '30').and('be.disabled');
            cy.get('.ant-switch').click();
            cy.get('.form-group > .ml-2').contains('Enable')
            cy.wait(700);

        })


    })

    context('Step 4. Choose autentication method.', () => {
        it('Usilibities (The system display alert note “Password will be sent to e-mail : vara@gmail.com after successful cloud creation”)', () => {

           
            cy.get('[href="/cloud-server/new"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.wait(500);
            cy.get('[type="submit"]').click();
            cy.get('span').contains('Password will be sent to e-mail : vara@gmail.com after successful cloud creation')

        })


    })

    context('Step 5.Setting Instance and Number of instance to be built.', () => {
        it('Validation (User did not specify Hostname. The system display alert message “Please input data”)', () => {

           
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
            cy.get('.text-danger').contains('Please input data');

        })

        it('Usibirities (User specify Display name (Optional). The card changes according to the Display name.)', () => {

           
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

    })

    context('Step 6.Term and Condition.', () => {
        it('Validation (User click Create without clicking checkbox. The system display alert “Please accept the terms and conditions of service.”.', () => {

           
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
            cy.get('.callout').contains('Please accept the terms and conditions of service.');


        })

        it('Usibirities (User click เติมเงิน button. The system open new tab leads to Top Up page.', () => {

           
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
            cy.get('[href="/nt-topup"]').last().invoke('removeAttr','target').click({force: true});
            cy.wait(700);

        })

    })


})
