describe('Edit Quota', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibirities ( The system displayed field labels : \
        General Information card : Name, Description (Optional), \
        Upload Certificate card : File Format, Upload, Attach Files : .p12 only, maximum file size 5 MB)', () => {

        cy.get('#quota').click();

        cy.contains('.card', 'Cloud Quota').within(() => {
            cy.contains('label', 'Number of Instance').should('have.text', 'Number of Instance');
            cy.contains('label', 'RAM').should('have.text', 'RAM');
            cy.contains('label', 'CPU').should('have.text', 'CPU');
        })

        cy.contains('.card', 'Volume Quota').within(() => {
            cy.contains('label', 'Volume / Disk').should('have.text', 'Volume / Disk');

        })

        cy.contains('.card', 'Volume Backup Quota').within(() => {
            cy.contains('label', 'Volume / Disk').should('have.text', 'Volume / Disk');

        })
        cy.contains('.card', 'Floating IP and Public IP Quota').within(() => {
            cy.contains('label', 'Number of Floating IP and Public IP').should('have.text', 'Number of Floating IP and Public IP');

        })
        cy.contains('.card', 'Router Quota').within(() => {
            cy.contains('label', 'Number of Router').should('have.text', 'Number of Router');

        })
        cy.contains('.card', 'Load Balancer Quota').within(() => {
            cy.contains('label', 'Number of Load Balancer').should('have.text', 'Number of Load Balancer');

        })
        cy.contains('.card', 'Security Groups Quota').within(() => {
            cy.contains('label', 'Number of Security Group').should('have.text', 'Number of Security Group');
            cy.contains('label', 'Number of Security Rule (Inbound + Outbound)').should('have.text', 'Number of Security Rule (Inbound + Outbound)');

        })
    })

    context('Cloud Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Cloud Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#cloud-instance-quota').clear();
            cy.get('#cloud-ram-quota').clear();
            cy.get('#cloud-cpu-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Cloud Quota').within(() => {
                cy.contains('Edit').click();
                cy.wait(300);
                cy.contains('Cancel').click()
            })
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(500)
                .contains('button', 'Yes')
                .click();
            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Cloud Quota').within(() => {
                cy.contains('Edit').click();
            })
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
            cy.contains('.card', 'Cloud Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#cloud-instance-quota').clear().type('30');
            cy.get('#cloud-ram-quota').clear().type('128');
            cy.get('#cloud-cpu-quota').clear().type('120');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button', 'Yes')
                .click();

            cy.wait(700);

        })


    })

    context('Volume Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Volume Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#volume-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })


        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Volume Quota').within(() => {
                cy.contains('Edit').click();
                cy.wait(300);
                cy.contains('Cancel').click();
            })
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(500)
                .contains('button', 'Yes')
                .click();

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Volume Quota').within(() => {
                cy.contains('Edit').click();
            })
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
            cy.contains('.card', 'Volume Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#volume-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button', 'Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Volume Backup Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Volume Backup Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#volume-backup-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Volume Backup Quota').within(() => {
                cy.contains('Edit').click();
                cy.wait(300);
                cy.contains('Cancel').click()
            })
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(500)
                .contains('button', 'Yes')
                .click();

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Volume Backup Quota').within(() => {
                cy.contains('Edit').click();
            })
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
            cy.contains('.card', 'Volume Backup Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#volume-backup-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button', 'Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Floating IP Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Floating IP Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#floating-ip-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Floating IP Quota').within(() => {
                cy.contains('Edit').click();
                cy.wait(300);
                cy.contains('Cancel').click()
            })
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(500)
                .contains('button', 'Yes')
                .click();

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Floating IP Quota').within(() => {
                cy.contains('Edit').click();
            })
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
            cy.contains('.card', 'Floating IP Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#floating-ip-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button', 'Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Router Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Router Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#router-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Router Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#router-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('กรุณากรอกจำนวนมากกว่า หรือเท่ากับ 3 ขึ้นไป');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Router Quota').within(() => {
                cy.contains('Edit').click();
                cy.wait(300);
                cy.contains('Cancel').click()
            })
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(500)
                .contains('button', 'Yes')
                .click();

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Router Quota').within(() => {
                cy.contains('Edit').click();
            })
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
            cy.contains('.card', 'Router Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#router-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button', 'Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Load Balancer Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Load Balancer Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#load-balancer-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Load Balancer Quota').within(() => {
                cy.contains('Edit').click();
                cy.wait(300);
                cy.contains('Cancel').click()
            })
                cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(500)
                .contains('button', 'Yes')
                .click();

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Load Balancer Quota').within(() => {
                cy.contains('Edit').click();
            })
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
            cy.contains('.card', 'Load Balancer Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#load-balancer-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button', 'Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Security Groups', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Security Groups Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#security-group-quota').clear();
            cy.get('#security-rule-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Security Groups Quota').within(() => {
                cy.contains('Edit').click();
                cy.wait(300);
                cy.contains('Cancel').click()
            })
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Are you sure to leave information updating?')
                .wait(500)
                .contains('button', 'Yes')
                .click();

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#quota').click();
            cy.contains('.card', 'Security Groups Quota').within(() => {
                cy.contains('Edit').click();
            })
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
            cy.contains('.card', 'Security Groups Quota').within(() => {
                cy.contains('Edit').click();
            })
            cy.get('#security-group-quota').clear().type('11');
            cy.get('#security-rule-quota').clear().type('150');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button', 'Yes')
                .wait(300)

            cy.wait(700);

        })

    })
})