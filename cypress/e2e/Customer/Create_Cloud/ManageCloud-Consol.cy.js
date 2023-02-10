describe('Manage Cloud / Consol', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Action success', () => {
        cy.get('#cloud-collapse').click({ force: true });
        cy.get('[href="/cloud-server/instance"]').first().click({ force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click();
        cy.visit('https://novnc.ant.openstack.bangmod.cloud/vnc_auto.html?path=%3Ftoken%3Ddd698d6f-da9b-4284-a871-032908ad9499');


    })

    //***Case 2-3 ยังไม่สามารถTest ได้ */
})