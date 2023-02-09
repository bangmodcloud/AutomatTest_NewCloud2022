describe(' Create Keypair', () => {
    beforeEach(() => {
        cy.login()
    })

    context('create a keypair by Import Keypair', () => {

        it('Action success', () => {
            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.get('.app_renderer_common_button__common-button-style > .btn').first().click(); //Create button
            cy.get('[name="name"]').type('test');
            //Upload file to the input field
            cy.get("input[type=file]").attachFile("privatekey.txt")

            // click on the upload button
            cy.get('.mt-2 > .fas').click();

            cy.get('.form-group > .form-control').clear()
                .type('ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCeTP5IwuRzk1ATjgIK1Lq8t3iA5/\
                        RBSxjmAVrGPq6Grxp0JPgdGdOK7RtHMAVrYBNRHHznylUD8nn2vxbrMcUdwEBZVgk0oC6+C0dBc\
                        01NjvUQ2VEwaxfVYnUep6r5kDucxIBfk2UYMPFSPIdFO5WYskqDiH2ElsZX5e5Px3LV9LQEvGB96\
                        0T4hPVeOvAdIpbk6oy7PMhHiNJLxvp/BSh1CNJ2+uroqCuHujckbgIpgGvaXPCOHYl5ePchw1c/Vh\
                        4B+mjfcgvX6bUWqa/PBpK9gHXLv8zSraPq4YdEblnZTuYG/WIjZCDaB4e58pJBTzgyn8Bn22SoT+jsnRCsX9bL')
            cy.get('.app_renderer_common_button__common-button-style > .btn').click();
            cy.get('[type="submit"]').click();

            cy.wait(700);


        })

        it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.get('.app_renderer_common_button__common-button-style > .btn').first().click(); //Create button
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณาระบุข้อมูล');

            cy.wait(700);


        })

        it('validation (User did not specify information. The system displays alert message “ Please input data”', () => {

            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.get('.app_renderer_common_button__common-button-style > .btn').first().click(); //Create button
            cy.get('[name="name"]').type('test');

            //Upload file to the input field
            cy.get("input[type=file]").attachFile("privatekey.txt")

            // click on the upload button
            cy.get('.mt-2 > .fas').click();

            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'สร้าง Keypair ไม่สำเร็จ');

            cy.wait(700);


        })

    })

    context('create a keypair by Generate Keypair', () => {

        it('Action success', () => {
            cy.get('#cloud-server-collapse').click({ force: true });
            cy.get('[href="/cloud-server/keypair"]').first().click({ force: true });
            cy.get('.app_renderer_common_button__common-button-style > .btn').first().click(); //Create button
            cy.get('[name="name"]').type('test');
            cy.get('#generateKeypair').check();
            cy.get('.app_renderer_lib_style__button-alt-style > .btn').click(); //Generate Keypair button
            cy.get('[type="submit"]').click();

            cy.wait(700);


        })

    })
})