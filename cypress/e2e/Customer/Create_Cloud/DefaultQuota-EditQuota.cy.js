describe('Edit Quota', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Cloud Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#cloud-instance-quota').clear();
            cy.get('#cloud-ram-quota').clear();
            cy.get('#cloud-cpu-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');

            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#cloud-instance-quota').clear().type(1);
            cy.get('#cloud-ram-quota').clear().type(1);
            cy.get('#cloud-cpu-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 20 ขึ้นไป');
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 64 ขึ้นไป');
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 32 ขึ้นไป');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#cloud-instance-quota').clear().type('30');
            cy.get('#cloud-ram-quota').clear().type('128');
            cy.get('#cloud-cpu-quota').clear().type('120');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(1) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#cloud-instance-quota').clear().type('30');
            cy.get('#cloud-ram-quota').clear().type('128');
            cy.get('#cloud-cpu-quota').clear().type('120');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Volume Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(2) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#volume-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(2) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#volume-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 1024 ขึ้นไป');
    
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(2) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(2) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#volume-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(2) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#volume-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })

        
    })

    context('Volume Backup Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(3) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#volume-backup-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(3) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#volume-backup-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 1024 ขึ้นไป');
    
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(3) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(3) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#volume-backup-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(3) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#volume-backup-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })

        
    })

    context('Floating IP Quota', () => {

            it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {
    
                cy.get('#quota').click();
                cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
                cy.get('#floating-ip-quota').clear();
                cy.get('[type="submit"]').click();
                cy.get('.text-danger').contains('Please input data');
                cy.wait(700);
    
            })
    
            it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {
    
                cy.get('#quota').click();
                cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
                cy.get('#floating-ip-quota').clear().type(1);
                cy.get('[type="submit"]').click();
                cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 3 ขึ้นไป');
        
                cy.wait(700);
    
            })
    
            it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {
    
                cy.get('#quota').click();
                cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
                cy.wait(300);
                cy.contains('Cancel').click()
    
                cy.wait(700);
    
            })
    
            it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {
    
                cy.get('#quota').click();
                cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
                cy.get('#floating-ip-quota').clear().type('4');
                cy.get('[type="submit"]').click();
                cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Change Default Quota?')
                    .wait(300)
    
                cy.wait(700);
    
            })
    
            it('Action success', () => {
    
                cy.get('#quota').click();
                cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
                cy.get('#floating-ip-quota').clear().type('4');
                cy.get('[type="submit"]').click();
                cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Change Default Quota?')
                    .contains('button','Yes')
                    .wait(300)
    
                cy.wait(700);
    
            })
    
            
        })

    context('Router Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(5) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#router-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(5) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#router-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 3 ขึ้นไป');
    
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(5) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(5) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#router-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(5) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#router-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })

        
    })

    context('Load Balancer Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(6) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#load-balancer-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(6) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#load-balancer-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 3 ขึ้นไป');
    
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(6) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(6) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#load-balancer-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(6) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#load-balancer-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })

        
    })

    context('Security Groups', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(7) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#security-group-quota').clear();
            cy.get('#security-rule-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(7) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#security-group-quota').clear().type('1');
            cy.get('#security-rule-quota').clear().type('1');
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 10 ขึ้นไป');
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 100 ขึ้นไป');
    
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(7) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(7) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#security-group-quota').clear().type('11');
            cy.get('#security-rule-quota').clear().type('150');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#quota').click();
            cy.get(':nth-child(7) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Cloud Quota card
            cy.get('#security-group-quota').clear().type('11');
            cy.get('#security-rule-quota').clear().type('150');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })

    })
})