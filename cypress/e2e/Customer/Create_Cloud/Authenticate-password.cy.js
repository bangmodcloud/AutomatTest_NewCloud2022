
describe('Create Cloud Authenticate with password', () => {
    beforeEach(() => {
        cy.login()
    })

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
        cy.wait(700);
    })

    //**** Test ไม่ได้ *****/

    // it('Usilibities (User Select authentication with password and create succeed. The system sends a link for viewing the password via email.)', () => {
    //     cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
    //     cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
    //     cy.get('[href="/cloud-server/new"]').click();
    //     cy.wait(500);
    //     cy.get('.distro').click();
    //     cy.get('[type="submit"]').click();
    //     cy.wait(500);
    //     cy.get('[type="submit"]').click();
    //     cy.get('[type="number"').clear().type(40);
    //     cy.get('[type="submit"]').click();
    //     cy.wait(500);
    //     cy.get('[type="submit"]').click();
    //     cy.get('[name="hostname"]').clear().type('Wara-Test-Instance');
    //     cy.get('#instanceAmount').clear().type('2');
    //     cy.get('[type="submit"]').click();
    //     cy.get('#terms').check();
    //     cy.get('[type="submit"]').click();

    //     cy.sendMail(mailOptions, function(err, info) { 
    //         if (!err) { 
    //            console.log('Mail success: ' + info.response); 
    //         } else { 
    //            console.log('Mail err', err); 
    //         } 
    //         });
    // })
})