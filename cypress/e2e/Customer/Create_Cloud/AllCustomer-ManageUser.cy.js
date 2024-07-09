describe('Office Manage User', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('User Account Thai Nationality = No', () => {

        context('Tab General Information', () => {

            it('Usibirities ( The system displayed field labels : >>"View Test Plan")', () => {

                cy.get('[data-row-key="8"] > :nth-child(2) > a').click(); // เลือก User ที่เป็นชาวต่างชาติ
                cy.contains('.card', 'Account Information').within(() => {
                    cy.contains('label', 'ID').should('have.text', 'ID');
                    cy.contains('label', 'Email').should('have.text', 'Email');
                    cy.contains('label', 'Username').should('have.text', 'Username');
                })

                cy.contains('.card', 'e-Tax Information').within(() => {
                    cy.contains('label', 'Juristic Name').should('include.text', 'Juristic Name');
                    cy.contains('label', 'Juristic ID').should('include.text', 'Juristic ID');
                    cy.contains('label', 'Branch ID').should('have.text', 'Branch ID');
                    cy.contains('label', 'Country').should('have.text', 'Country');
                    cy.contains('label', 'Postal Code').should('have.text', 'Postal Code');
                    cy.contains('label', 'Province').should('have.text', 'Province');
                    cy.contains('label', 'District / Area').should('have.text', 'District / Area');
                    cy.contains('label', 'Sub-district / Sub-area').should('have.text', 'Sub-district / Sub-area');
                    cy.contains('label', 'Road').should('have.text', 'Road');
                    cy.contains('label', 'Address').should('have.text', 'Address');
                })

                cy.contains('.card', 'e-Tax address information for foreigners').within(() => {
                    cy.contains('label', 'Country').should('have.text', 'Country');
                    cy.contains('label', 'Postal Code').should('have.text', 'Postal Code');
                    cy.contains('label', 'Province').should('have.text', 'Province');
                    cy.contains('label', 'District / Area').should('have.text', 'District / Area');
                    cy.contains('label', 'Sub-district / Sub-area').should('have.text', 'Sub-district / Sub-area');
                    cy.contains('label', 'Road').should('have.text', 'Road');
                    cy.contains('label', 'Address').should('have.text', 'Address');
                })

                cy.contains('.card', 'Workspace').within(() => {
                    cy.contains('label', 'Workspace ID').should('have.text', 'Workspace ID');

                })

                cy.contains('.card', 'Status').within(() => {
                    cy.contains('label', 'Join Us').should('have.text', 'Join Us');
                    cy.contains('label', 'Last Login').should('have.text', 'Last Login');

                })
                cy.wait(700);

            })

        })

        context('Tab Personal / KYC Information', () => {
            it('Usibirities ( The system displayed field labels : >>"View Test Plan")', () => {


                cy.get('[data-row-key="8"] > :nth-child(2) > a').click();
                cy.contains('a', 'Personal / KYC Information').click();

                cy.contains('.card', 'Step 1 and 2', 'Specify phone number').within(() => {
                    cy.contains('label', 'Phone Number').should('have.text', 'Phone Number');

                })
                cy.contains('.card', 'Step 4', 'Specify personal information').within(() => {
                    cy.contains('label', 'Thai Nationality').should('have.text', 'Thai Nationality');
                    cy.contains('label', 'First Name').should('have.text', 'First Name');
                    cy.contains('label', 'Last Name').should('have.text', 'Last Name');
                    cy.contains('label', 'Passport Number').should('have.text', 'Passport Number');
                    cy.contains('label', 'Date of birth').should('have.text', 'Date of birth');
                    cy.contains('label', 'Place of Birth').should('have.text', 'Place of Birth');

                })
                cy.contains('.card', 'Step 5', 'Upload documents to verify identity').within(() => {
                    cy.contains('div', 'Passport').should('have.text', 'Passport');
                    cy.contains('div', 'Selfie with Passport').should('have.text', 'Selfie with Passport');

                })
                cy.contains('.card', 'Status').within(() => {
                    cy.contains('label', 'Join Us').should('have.text', 'Join Us');
                    cy.contains('label', 'Last Login').should('have.text', 'Last Login');

                })
                cy.wait(700);
            })


        })
    })

    context('User Account Thai Nationality = Yes', () => {

        context('Tab General Information', () => {

            it('Usibirities ( The system displayed field labels : >>"View Test Plan")', () => {

                cy.get('[data-row-key="8"] > :nth-child(2) > a').click(); // เลือก User ที่เป็นคนไทย
                cy.contains('.card', 'Account Information').within(() => {
                    cy.contains('label', 'ID').should('have.text', 'ID');
                    cy.contains('label', 'Email').should('have.text', 'Email');
                    cy.contains('label', 'Username').should('have.text', 'Username');
                })

                cy.contains('.card', 'e-Tax Information').within(() => {
                    cy.contains('label', 'Juristic Name').should('include.text', 'Juristic Name');
                    cy.contains('label', 'Juristic ID').should('include.text', 'Juristic ID');
                    cy.contains('label', 'Branch ID').should('have.text', 'Branch ID');
                    cy.contains('label', 'Country').should('have.text', 'Country');
                    cy.contains('label', 'Postal Code').should('have.text', 'Postal Code');
                    cy.contains('label', 'Province').should('have.text', 'Province');
                    cy.contains('label', 'District / Area').should('have.text', 'District / Area');
                    cy.contains('label', 'Sub-district / Sub-area').should('have.text', 'Sub-district / Sub-area');
                    cy.contains('label', 'Road').should('have.text', 'Road');
                    cy.contains('label', 'Address').should('have.text', 'Address');
                })

                cy.contains('.card', 'Workspace').within(() => {
                    cy.contains('label', 'Workspace ID').should('have.text', 'Workspace ID');

                })

                cy.contains('.card', 'Status').within(() => {
                    cy.contains('label', 'Join Us').should('have.text', 'Join Us');
                    cy.contains('label', 'Last Login').should('have.text', 'Last Login');

                })
                cy.wait(700);

            })

        })

        context('Tab Personal / KYC Information', () => {
            it('Usibirities ( The system displayed field labels : >>"View Test Plan")', () => {


                cy.get('[data-row-key="8"] > :nth-child(2) > a').click();
                cy.contains('a', 'Personal / KYC Information').click();

                cy.contains('.card', 'Step 1 and 2', 'Specify phone number').within(() => {
                    cy.contains('label', 'Phone Number').should('have.text', 'Phone Number');

                })
                cy.contains('.card', 'Step 4', 'Specify personal information').within(() => {
                    cy.contains('label', 'Thai Nationality').should('have.text', 'Thai Nationality');
                    cy.contains('label', 'First Name').should('have.text', 'First Name');
                    cy.contains('label', 'Last Name').should('have.text', 'Last Name');
                    cy.contains('label', 'National ID').should('have.text', 'National ID');
                    cy.contains('label', 'Country').should('have.text', 'Country');
                    cy.contains('label', 'Postal Code').should('have.text', 'Postal Code');
                    cy.contains('label', 'Province').should('have.text', 'Province');
                    cy.contains('label', 'District / Area').should('have.text', 'District / Area');
                    cy.contains('label', 'Sub-district / Sub-area').should('have.text', 'Sub-district / Sub-area');
                    cy.contains('label', 'Road').should('have.text', 'Road');
                    cy.contains('label', 'Address').should('have.text', 'Address');
                })
                cy.contains('.card', 'Step 5', 'Upload documents to verify identity').within(() => {
                    cy.contains('div', 'Thai National ID Card (Front side only)').should('have.text', 'Thai National ID Card (Front side only)');
                    cy.contains('div', 'Selfie with Thai National ID Card').should('have.text', 'Selfie with Thai National ID Card');

                })
                cy.contains('.card', 'KYC Approved').within(() => {
                    cy.contains('div', 'KYC is the verification of documents at the customer to verify their identity. and should be approved when the document has already been reviewed.')
                    cy.contains('span', 'Approver: ').should('have.text', 'Approver: ');
                    cy.contains('span', 'Last Update: ').should('have.text', 'Last Update: ');

                })
                cy.wait(700);
            })

        })

        context('Tab Quota', () => {
            it('Usibirities ( The system displayed field labels : \
                Cloud Quota card : Number of Instance, RAM, CPU \
                Volume Quota card : Volume / Disk \
                Volume Backup Quota card : Volume / Disk \
                Floating IP and Public IP Quota card : Number of Floating IP and Public IP \
                Router Quota card : Number of Router \
                Load Balancer Quota card : Number of Load Balancer \
                Security Groups Quota card : Number of Security Group, Number of Security Rule (Inbound + Outbound))', () => {

                cy.get('[data-row-key="1"] > :nth-child(2) > a').click();
                cy.wait(700);
                cy.contains('a', 'Quota').click();
                cy.wait(700);

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
        })
    })
})