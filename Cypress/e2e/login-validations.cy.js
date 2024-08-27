describe('E-commerce Login Validation Tests', () => {
    // Test for invalid email format
    it('Displays error for wrong email format', () => {
        // Retrieve the login URL from environment variables
        const loginUrl = Cypress.env('loginUrl');

        // Debugging: Ensure loginUrl is correctly fetched
        cy.log(`Login URL: ${loginUrl}`);

        // Ensure login URL is defined
        if (!loginUrl) {
            throw new Error('loginUrl is not defined. Please check your environment variables.');
        }

        // Visit the login page using the URL from environment variables
        cy.visit(loginUrl);

        // Enter an invalid email and a valid password
        cy.get('input[name="email"]').type('invalid-email-format');
        cy.get('input[name="password"]').type('SomePassword123');
        cy.get('button[type="submit"]').click();

        // Check for the error message
        cy.get('span.pl025.text-critical').should('be.visible').and('contain', 'Invalid email');
    });

    // Test for correct email but wrong password
    it('Displays error for correct email and wrong password', () => {
        // Retrieve the login URL from environment variables
        const loginUrl = Cypress.env('loginUrl');

        // Debugging: Ensure loginUrl is correctly fetched
        cy.log(`Login URL: ${loginUrl}`);

        // Ensure login URL is defined
        if (!loginUrl) {
            throw new Error('loginUrl is not defined. Please check your environment variables.');
        }

        // Visit the login page using the URL from environment variables
        cy.visit(loginUrl);

        // Enter a valid email but an incorrect password
        cy.get('input[name="email"]').type(Cypress.env('userEmail')); // Use valid email from env
        cy.get('input[name="password"]').type('WrongPassword123');
        cy.get('button[type="submit"]').click();

        // Check for the error message
        cy.get('div.text-critical.mb-1').should('be.visible').and('contain', 'Invalid email or password');
    });

    // Test for both email and password fields being empty
    it('Displays error when both email and password fields are empty', () => {
        // Retrieve the login URL from environment variables
        const loginUrl = Cypress.env('loginUrl');

        // Ensure login URL is defined
        if (!loginUrl) {
            throw new Error('loginUrl is not defined. Please check your environment variables.');
        }

        // Visit the login page using the URL from environment variables
        cy.visit(loginUrl);

        // Directly click the login button without entering any credentials
        cy.get('button[type="submit"]').click();

        // Check for the error message indicating both fields are empty
        cy.get('span.text-critical')  // Target the span with class 'text-critical'
            .should('be.visible')
            .and('contain', 'This field can not be empty');
    });

});
