describe('Environment Variable Test', () => {
    it('Should navigate to the base URL', () => {
        cy.visit('loginUrl'); // This should navigate to the base URL specified in your .env file
        cy.url().should('include', 'http://localhost:3000/'); // Adjust the URL check accordingly
    });
});
