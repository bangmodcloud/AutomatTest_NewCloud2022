
describe('Manage Cloud / Retrieve Password', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
    })

    it('Usibilities (User click action button and select Retrieve Password. The system display modal “Retrieve Instance Password” and the system Disable Field Encrypted Password.)', () => {

        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Action').click()
        cy.contains('Retrieve Password').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Retrieve Instance Password');

        cy.get('#encrypted-password').should('have.attr', 'readonly', 'readonly')


        cy.wait(700);



    })

    it('Usibilities (User upload file that is not accepted. The system display alert Message “This file extension is not supported. Please upload a new file and try again.”)', () => {

        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Action').click()
        cy.contains('Retrieve Password').click();
        //Upload file to the input field
        cy.get('[for="file"]').click().selectFile('cypress/fixtures/ex-error.png');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('This file extension is not supported. Please upload a new file and try again.')
        cy.wait(700);



    })

    it('Usibilities (User enter private key code does not match keypair. The system display alert Message “The Private Key you uploaded is invalid. Please upload a new file and try again.)', () => {

        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Action').click()
        cy.contains('Retrieve Password').click();
        //Upload file to the input field
        cy.get('[for="file"]').click().selectFile('cypress/fixtures/privatekey2.txt');
        cy.get('[type="submit"]').click();
        cy.get('#decrypted-password').should('have.value', 'The Private Key you uploaded is invalid. Please upload a new file and try again.')
        cy.wait(700);



    })

    it('Usibilities (User does not enter Copy / Paste your Private Key field. The system display alert message “Please input data”)', () => {

        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Action').click()
        cy.contains('Retrieve Password').click();

        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data')
        cy.wait(700);



    })

    it('Usibilities (User User upload file private key  and click Decrypt password button. The system display field Password.)', () => {

        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Action').click()
        cy.contains('Retrieve Password').click();
        //Change file for test
        cy.get('[for="file"]').click().selectFile('cypress/fixtures/testprivatekey2.txt');
        cy.get('[type="submit"]').click();
        cy.wait(700);



    })

    it('Usibilities (User click Cancel button. The system clossed modal.)', () => {

        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Action').click()
        cy.contains('Retrieve Password').click();
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Retrieve Instance Password')
            .contains('button', 'Cancel')
            .click();
        cy.wait(700);



    })


})