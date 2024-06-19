describe(' Create Keypair', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    context('create a keypair by Import Keypair', () => {

        it('Action success', () => {
            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.contains('Create Keypair').click(); //Create button
            cy.get('[name="name"]').type('test');
            cy.get('[for="keypair-file"]').click().selectFile('cypress/fixtures/privatekey.txt');

            cy.get('.form-group > .form-control').clear()
                .type('ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCeTP5IwuRzk1ATjgIK1Lq8t3iA5/\
                        RBSxjmAVrGPq6Grxp0JPgdGdOK7RtHMAVrYBNRHHznylUD8nn2vxbrMcUdwEBZVgk0oC6+C0dBc\
                        01NjvUQ2VEwaxfVYnUep6r5kDucxIBfk2UYMPFSPIdFO5WYskqDiH2ElsZX5e5Px3LV9LQEvGB96\
                        0T4hPVeOvAdIpbk6oy7PMhHiNJLxvp/BSh1CNJ2+uroqCuHujckbgIpgGvaXPCOHYl5ePchw1c/Vh\
                        4B+mjfcgvX6bUWqa/PBpK9gHXLv8zSraPq4YdEblnZTuYG/WIjZCDaB4e58pJBTzgyn8Bn22SoT+jsnRCsX9bL')
            cy.get('.file > .fas').click();
            cy.get('[type="submit"]').click();

            cy.wait(700);


        })

        it('validation (The system displayed field labels)', () => {

            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.contains('Create Keypair').click(); //Create button
            cy.contains('label', 'Keypair Name (Specity in English)').should('have.text', 'Keypair Name (Specity in English)')
            cy.contains('label', 'Upload File').should('have.text', 'Upload File')
            cy.contains('label', 'Attach file : Only 1 file .txt or .pub').should('have.text', 'Attach file : Only 1 file .txt or .pub')

            cy.wait(700);


        })

        it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {

            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.contains('Create Keypair').click(); //Create button
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');

            cy.wait(700);


        })

        

        it('validation (User import Keypair a file that is not an irrelevant file. The system displays modal “สร้าง Keypair ไม่สำเร็จ”', () => {

            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.contains('Create Keypair').click(); //Create button
            cy.get('[name="name"]').type('test');

            cy.get('[for="keypair-file"]').click().selectFile('cypress/fixtures/privatekey.txt');

            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Error');

            cy.wait(700);


        })

    })

    context('create a keypair by Generate Keypair', () => {

        it('Action success', () => {

            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.contains('Create Keypair').click(); //Create button
            cy.get('[name="name"]').type('test');
            cy.get('#generateKeypair').check();
            cy.contains('button','Generate keypair').click(); 
            cy.wait(700);
            cy.get('[type="submit"]').click();

            cy.wait(700);


        })

    })
})