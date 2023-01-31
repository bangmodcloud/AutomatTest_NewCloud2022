
 describe('Create Cloud Normal Flow', () => {
    const email = "Wara@gmail.com";
    const password = "1234567";
    
        beforeEach(() => {
            
            cy.intercept({
                method : 'GET',
                url : 'https://graphql-test.bangmod.cloud/oauth/oauth/token'
            }).as("User")

        cy.visit('https://web-test.bangmod.cloud/auth/login');
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get('.btn').click();
        });
    
        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance').click();
            cy.get('[href="/cloud-server/new"]').click();
        })
})