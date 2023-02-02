describe('Create Cloud Advance Flow', () => {
    const email = "Wara@gmail.com";
    const password = "1234567";

    beforeEach(() => {

        cy.intercept({
            method: 'GET',
            url: 'https://graphql-test.bangmod.cloud/oauth/oauth/token'
        }).as("User")

        cy.visit('https://web-test.bangmod.cloud/auth/login');
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('.btn').click();
    });

    it('Action success', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('[name="hostname"]').clear().type('Wara-Test-Instance');
        cy.get('#instanceAmount').clear().type('2');
        cy.get('[type="submit"]').click();
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        
    })

    context('Step 4. Attach Network.', () => {

    it('Action success', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('[name="hostname"]').clear().type('Wara-Test-Instance');
        cy.get('#instanceAmount').clear().type('2');
        cy.get('[type="submit"]').click();
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        
    })

    it('Usibirities (User click icon add button in the Name column. The system display subnet)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').click();
        
    })

    it('Usibirities (User did not select subnet and click Next. Then : The system display alert warning “กรุณาเลือก Network อย่างน้อยหนึ่งรายการ คุณสามารถเลือก Network ได้จากรายการ Private Network, Network Interface หรือ Public IP ใน Card ด้านล่าง”)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').click();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('กรุณาเลือก Network อย่างน้อยหนึ่งรายการ คุณสามารถเลือก Network ได้จากรายการ Private Network, Network Interface หรือ Public IP ใน Card ด้านล่าง');
        
    })

    it('Usibirities (User click hyper link Private Network name. “The system Open new tab leads to Manage your Private Network page.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').click();
        cy.get('[href="/cloud-server/private-network/63d738baf4c8222eef2ea99c"]').invoke('removeAttr','target').click();
    })

    it('Usibirities (User click hyper link subnet name. “The system Open new tab leads to Manage  your Subnet page.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').click();
        cy.get('[href="/cloud-server/subnet/63d738baf4c8222eef2ea99d?privateNetworkId=63d738baf4c8222eef2ea99c"]').invoke('removeAttr','target').click();
        cy.wait(700);
    })

    it('Usibirities (User click Add button. “The system Open new tab leads to Create Private Network page.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').click();
        cy.get('href="/cloud-server/private-network/new"').invoke('removeAttr','target').click();
        cy.wait(700);
    })

    it('Usibirities (User searches for Private Network entry by Private Network Name / CIDR / Description. The system displays the searched list.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('#search').type('WaraNet')
        cy.wait(700);
        cy.get('#search').clear().type('192.168.0.0/16')
        cy.wait(700);
        cy.get('#search').clear().type('Wara Test')
        cy.wait(700);
    })

    it('Usibirities (User click Attach From Network Interface radio. The system changes to the Network Interface table.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('#attach-network-interface').check();
        cy.get('.card-body > :nth-child(4)').should('be.visible')
        cy.wait(700);

    })

    it('Usibirities (User click hyper link Network Interface name. The system Open new tab leads to Manage your Network Interface page.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('#attach-network-interface').check();
        cy.get('href="/cloud-server/network-interface/63d738e3f4c8222eef2ea9c1"').invoke('removeAttr','target').click();
        cy.wait(700);
    })

    it('Usibirities (User click hyper link Network. The system Open new tab leads to Manage  your Subnet page.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('#attach-network-interface').check();
        cy.get('href="/cloud-server/subnet/63d738baf4c8222eef2ea99d?privateNetworkId=63d738baf4c8222eef2ea99c"').invoke('removeAttr','target').click();
        cy.wait(700);
    })

    it('Usibirities (UUser click Add button. The system Open new tab leads to Create Network Interfacepage.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('#attach-network-interface').check();
        cy.get('href="/cloud-server/network-interface/new"').invoke('removeAttr','target').click();
        cy.wait(700);
    })

    it('Usibirities (UUser searches for Network Interface entry by  Name / Network / Fixed IP / MAC Address.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('#attach-network-interface').check();
        cy.get('#search').type('Wara')
        cy.wait(700);
        cy.get('#search').clear().type('Warasubnet')
        cy.wait(700);
        cy.get('#search').clear().type('192.168.0.1')
        cy.wait(700);
        cy.get('#search').clear().type('fa:16:3e:83:ec:76')
        cy.wait(700);
    })
})

context('Step 5. Select security group.', () => {

    it('Usibirities (The system display alert note “You can assign a maximum of 5 security groups to a network.”)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('คุณสามารถกำหนด Security Group ให้กับ Instance ได้สูงสุดได้ 5 รายการ');
        cy.wait(700);
    })

    it('Usibirities (User hover the mouse over the Icon warning. "The system will be displayed as a tooltip”A security group acts a virtual firewall for your instance to control inbound and outbound traffic. you can assign up to five security groups to the instance.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get('#popover-attach-security').trigger('mouseover');
        cy.wait(200)
        cy.get('.popover-body').contains("A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. you can assign up to five security groups to the instance.")
        cy.wait(700);
    })

    it('Usibirities (User adds a Security Group which is added from the Button select button. Contents / Table of Associate Security Group to Subnet card will display the list of Networks that User selected earlier in Step 4. Attach Private Network.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.get('.app_renderer_lib_style__nav-styles').should('be.visible');
        cy.wait(700);
    })

    it('Usibirities (User click Button Close x. The Security Group entry will return to its original place, in the Available Security Group table below.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get('.text-center > .app_renderer_common_button__common-button-style > .btn > .fas').click();
        cy.wait(500);
        cy.get('.fa-xmark').click();
        cy.wait(700);
    })

    it('Usibirities (User Search Security Group. The system displays the Security Group information table that the User has in the system.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get('#search').type('test-1')
        cy.wait(700);
    })

    it('Usibirities (User click Button Add Icon. The system will  Open Link New Tab leads to Create Security Group page.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get('[href="/cloud-server/security-group/new"]').invoke('removeAttr', 'target')
        cy.wait(700);
    })

    it('Usibirities (User clicks Security Group Name which is HyperLink. The system will  Open Link New Tab leads to Manage Security Group page.)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(1) > .underline-link').invoke('removeAttr', 'target').first().click();
        cy.wait(700);
    })

    it('Usibirities (User did not select a Security Group. The system displayed alert  “Please select Security Group at least 1 Security Group.“)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('Please select Security Group at least 1 Security Group.');

        cy.wait(700);
    })

    it('Usibirities (User select more than 5 Security Groups. The system displayed alert  “You can assign a maximum of 5 security groups to a network.“)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('You can assign a maximum of 5 security groups to an network.');


        cy.wait(700);
    })

    it('Usibirities (User select more than 5 Security Groups. The system displayed alert  “You can assign a maximum of 5 security groups to a network.“)', () => {
        cy.get('.nav > :nth-child(6) > :nth-child(1) > #cloud-collapse').click();
        cy.get('[href="/cloud-server/instance"]').first().click({force: true});
        cy.get('[href="/cloud-server/new"]').click();
        cy.wait(500);
        cy.get(':nth-child(4) > .distro').click();
        cy.get('[type="submit"]').click();
        cy.wait(500);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(2) > .app_renderer_common_button__common-button-style > .btn').click({force: true});
        cy.get('.ant-table-row-expand-icon').first().click();
        cy.get('.mr-2 > #subnet').check();
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get(':nth-child(1) > :nth-child(3) > .text-center > .app_renderer_common_button__common-button-style > .btn').click();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('You can assign a maximum of 5 security groups to an network.');


        cy.wait(700);
    })

})
})