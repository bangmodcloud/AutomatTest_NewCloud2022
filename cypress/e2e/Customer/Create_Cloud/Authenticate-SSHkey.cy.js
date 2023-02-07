describe('Create Cloud Authenticate with ssh key', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success )', () => {

        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('#authenWithSSH').check();
        cy.get('.ant-radio-input').check();
        cy.get('[type="submit"]').click();
        cy.get('[name="displayName"]').type('test-Interface')
        cy.get('[type="submit"]').click();
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);
    })

    it('Usilibities (User Select authentication with SSH by Key pair radio. The system will show a keypair to select.) )', () => {

        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('#authenWithSSH').check();
        cy.get('.ant-radio-input').check();
        cy.get('.card-body > .mt-4').should('be.visible');
         cy.wait(700);
    })

    it('Usilibities (User click Add icon. The system leads to Create Keypair page.) )', () => {

        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('#authenWithSSH').check();
        cy.get('.ant-radio-input').check();
        cy.get('[href="/cloud-server/keypair/new"]').invoke('removeAttr', 'target').click();
        cy.wait(700);
    })

    it('Usilibities (User searches for the Key pair entry by Name.) )', () => {

        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('#authenWithSSH').check();
        cy.get('.ant-radio-input').check();
        cy.get('#search').clear().type('test-1')
        cy.wait(700);
    })
})