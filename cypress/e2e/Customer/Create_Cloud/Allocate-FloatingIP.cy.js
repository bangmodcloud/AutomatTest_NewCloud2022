describe('Allocate Floating IP', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.wait(2000)
        // cy.get('.app_renderer_nt_consent_term-and-condition-modal__scroll-to-bottom-style > .d-flex > .btn').click();
        // cy.get('.mx-3 > :nth-child(2) > .d-flex > .btn').click();
    })


    it('Action success', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.get(':nth-child(4) > .form-control').type('Test Allocate Floating IP');//Description (Optional)
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.wait(3000);
    })

    it(' validation (Allocate Floating IP Exceeded Limit. The system display alert “ไม่สามารถ Allocate Floating IP ได้อีก เพราะคุณได้ Allocate Floating IP ครบจำนวนแล้ว”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.get('[placeholder="Enter Number of IPs"]').type('4')
        cy.get('[placeholder="Enter Description"]').type('Test Allocate Floating IP');//Description (Optional)
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('ไม่สามารถ Allocate Floating IP ได้อีก เพราะคุณได้ Allocate Floating IP ครบจำนวนแล้ว');
        cy.wait(700);
    })

    it(' validation (User click Create without clicking checkbox. The system display alert "กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ”)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('กรุณายอมรับข้อกำหนดและเงื่อนไขการใช้บริการ');
        cy.wait(700);
    })

    it(' validation (User does not have enough credits. The system display alert “การสร้าง Cloud คุณจะต้องมี Credit ที่สามารถใช้ได้ เพียงพอต่อการใช้งาน Instance ตั้งแต่ 7 วันจึงสามารถดำเนินการได้ กรุณาเติมเงินโดยคุณต้องเติมเงินมากกว่า 0000.00 บาท “)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout').contains('การสร้าง Cloud คุณจะต้องมี Credit ที่สามารถใช้ได้ เพียงพอต่อการใช้งาน Instance ตั้งแต่ 7 วันจึงสามารถดำเนินการได้ กรุณาเติมเงินโดยคุณต้องเติมเงินมากกว่า 0000.00 บาท ');
        cy.wait(700);
    })

    it(' validation ( User click เติมเงิน button. The system open new tab leads to PAYMENT CONFIRMATION page.)', () => {

        cy.get('#cloud-collapse').click({ force: true });
        cy.get('#network-collapse').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip"]').first().click({ force: true });
        cy.get('[href="/cloud-server/floating-ip/new"]').click();
        cy.wait(300);
        cy.get('[href="/billing/confirm-payment"]').invoke('removeAttr','target').first().click({force: true});
        cy.wait(700);
    })
})