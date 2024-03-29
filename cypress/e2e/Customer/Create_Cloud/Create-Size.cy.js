describe('Create Size', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    it('Usabilities (The system setfield Price International Transfer In (Price / 1 GB) / \
        Price International Transfer OUT (Price / 1 GB) / Price Domestic Transfer In (Price / \
        1 GB) and Price Domestic Transfer OUT (Price / 1 GB) = Disabled.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Create Size').click();

        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .input-group > #amount').should('be.disabled'); // Price International Transfer In (Price / 1 GB)
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .input-group > #amount').should('be.disabled'); // Price International Transfer OUT (Price / 1 GB)
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .input-group > #amount').should('be.disabled'); // Price Domestic Transfer In (Price / 1 GB)
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > .input-group > #amount').should('be.disabled'); //Price Domestic Transfer OUT (Price / 1 GB)
        cy.wait(700);
        

    })

     it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Create Size').click();
        cy.get('[name="dataTransferPlanId"]').select('643e777ab3e65119f075d01e').should('have.value', '643e777ab3e65119f075d01e');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);
        

    })

     it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please select data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Create Size').click();
        cy.get('.card-body > :nth-child(2) > :nth-child(1) > .input-group > #amount').type('100'); // Price (THB/Month)
        cy.get(':nth-child(2) > .input-group > #amount').type('1024'); // Ram (MB)
        cy.get(':nth-child(3) > .input-group > #amount').type('3'); // CPU (Core)
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .input-group > #amount').type('10'); // International Transfer IN
        cy.get(':nth-child(4) > :nth-child(4) > .form-group > .input-group > #amount').type('10'); // International Transfer OUT
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > .input-group > #amount').type('10'); // Domestic Transfer IN
        cy.get(':nth-child(5) > :nth-child(4) > .form-group > .input-group > #amount').type('10'); // Domestic Transfer OUT
        cy.get(':nth-child(6) > .input-group > #amount').type('1.500') // Private Network Speed (Mbps)
        cy.get('.px-0 > .form-control').type('aee4784f-2c1b-475d-afaa-1c8406e5419a') // Flavor ID
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);
        

    })

    it('Usabilities (Admin Select Data Transfer Price Plan.  The system display value The system setfield Price International Transfer In (Price / 1 GB) \
        / Price International Transfer OUT (Price / 1 GB) / Price Domestic Transfer In (Price / 1 GB) and Price Domestic Transfer OUT (Price / 1 GB.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Create Size').click();
        cy.get('.card-body > :nth-child(2) > :nth-child(1) > .input-group > #amount').type('100'); // Price (THB/Month)
        cy.get(':nth-child(2) > .input-group > #amount').type('1024'); // Ram (MB)
        cy.get(':nth-child(3) > .input-group > #amount').type('3'); // CPU (Core)
        cy.get('[name="dataTransferPlanId"]').select('643e777ab3e65119f075d01e').should('have.value', '643e777ab3e65119f075d01e');
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .input-group > #amount').should('have.value','10'); // Price International Transfer In (Price / 1 GB)
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .input-group > #amount').should('have.value','10'); // Price International Transfer OUT (Price / 1 GB)
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .input-group > #amount').should('have.value','10'); // Price Domestic Transfer In (Price / 1 GB)
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > .input-group > #amount').should('have.value','10'); //Price Domestic Transfer OUT (Price / 1 GB)
        cy.wait(700);
        

    })

     it('Validation (Admin entered the Flavor ID incorrectly according to the format.  The system display alert messsage “กรุณากรอกข้อมูลให้ถูกต้อง” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Create Size').click();
        cy.get('.card-body > :nth-child(2) > :nth-child(1) > .input-group > #amount').type('100'); // Price (THB/Month)
        cy.get(':nth-child(2) > .input-group > #amount').type('1024'); // Ram (MB)
        cy.get(':nth-child(3) > .input-group > #amount').type('3'); // CPU (Core)
        cy.get('[name="dataTransferPlanId"]').select('643e777ab3e65119f075d01e').should('have.value', '643e777ab3e65119f075d01e');
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .input-group > #amount').type('10'); // International Transfer IN
        cy.get(':nth-child(4) > :nth-child(4) > .form-group > .input-group > #amount').type('10'); // International Transfer OUT
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > .input-group > #amount').type('10'); // Domestic Transfer IN
        cy.get(':nth-child(5) > :nth-child(4) > .form-group > .input-group > #amount').type('10'); // Domestic Transfer OUT
        cy.get(':nth-child(6) > .input-group > #amount').type('1.500') // Private Network Speed (Mbps)
        cy.get('.px-0 > .form-control').type('a') // Flavor ID
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('กรุณากรอกข้อมูลให้ถูกต้อง');
        cy.wait(700);
        

    })

    it('Validation (Admin click Cancel button. The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Create Size').click();
        cy.wait(300);
        cy.contains('Cancel').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);
        

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.contains('Create Size').click();
        cy.get('.card-body > :nth-child(2) > :nth-child(1) > .input-group > #amount').type('100'); // Price (THB/Month)
        cy.get(':nth-child(2) > .input-group > #amount').type('1024'); // Ram (MB)
        cy.get(':nth-child(3) > .input-group > #amount').type('3'); // CPU (Core)
        cy.get('[name="dataTransferPlanId"]').select('643e777ab3e65119f075d01e').should('have.value', '643e777ab3e65119f075d01e');
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .input-group > #amount').type('10'); // International Transfer IN
        cy.get(':nth-child(4) > :nth-child(4) > .form-group > .input-group > #amount').type('10'); // International Transfer OUT
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > .input-group > #amount').type('10'); // Domestic Transfer IN
        cy.get(':nth-child(5) > :nth-child(4) > .form-group > .input-group > #amount').type('10'); // Domestic Transfer OUT
        cy.get(':nth-child(6) > .input-group > #amount').type('1.500') // Private Network Speed (Mbps)
        cy.get('.px-0 > .form-control').type('aee4784f-2c1b-475d-afaa-1c8406e5419a') // Flavor ID
        cy.get('[type="submit"]').click();
        cy.wait(700);
        

    })
})