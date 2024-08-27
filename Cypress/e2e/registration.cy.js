// Import the selectors from the selectors file
import { loginSelectors } from '../support/selectors/loginSelectors';

describe('E-commerce Registration Tests', () => {
    it('Displays error when mandatory fields are empty', () => {
        // Retrieve the login URL from environment variables
        const loginUrl = Cypress.env('loginUrl');

        // Ensure login URL is defined
        if (!loginUrl) {
            throw new Error('loginUrl is not defined. Please check your environment variables.');
        }

        // Visit the login page using the URL from environment variables
        cy.visit(loginUrl);

        // Click on the "Create an account" link
        cy.get(loginSelectors.createAccountLink).click();

        // Directly click the "SIGN UP" button without entering any credentials
        cy.get(loginSelectors.signUpButton).click();

        // Check for the error message indicating that fields are empty
        cy.get(loginSelectors.emptyFieldErrorMessage)
            .should('be.visible')
            .and('contain', 'This field can not be empty');
    });

    it('Displays error for invalid email format', () => {
        // Retrieve the login URL from environment variables
        const loginUrl = Cypress.env('loginUrl');

        // Ensure login URL is defined
        if (!loginUrl) {
            throw new Error('loginUrl is not defined. Please check your environment variables.');
        }

        // Visit the login page using the URL from environment variables
        cy.visit(loginUrl);

        // Click on the "Create an account" link
        cy.get(loginSelectors.createAccountLink).click();

        // Enter a valid name into the "Full Name" input field
        cy.get(loginSelectors.fullNameInput).type('Test Name');

        // Enter an invalid email format into the email input field
        cy.get(loginSelectors.emailInput).type('test');

        // Click the "SIGN UP" button to trigger validation
        cy.get(loginSelectors.signUpButton).click();

        // Check for the error message indicating an invalid email format
        cy.get(loginSelectors.emptyFieldErrorMessage)
            .should('be.visible')
            .and('contain', 'Invalid email');
    });

    // New test case to check for invalid password format
    it('Displays error for invalid password format', () => {
        // Retrieve the login URL from environment variables
        const loginUrl = Cypress.env('loginUrl');

        // Ensure login URL is defined
        if (!loginUrl) {
            throw new Error('loginUrl is not defined. Please check your environment variables.');
        }

        // Visit the login page using the URL from environment variables
        cy.visit(loginUrl);

        // Click on the "Create an account" link
        cy.get(loginSelectors.createAccountLink).click();

        // Enter a valid name into the "Full Name" input field
        cy.get(loginSelectors.fullNameInput).type('Test Name');

        // Enter a valid email into the email input field
        cy.get(loginSelectors.emailInput).type('test@gmail.com');

        // Enter an invalid password format into the password input field
        cy.get('input[name="password"]').type('test');  // Use the selector from your new file

        // Click the "SIGN UP" button to trigger validation
        cy.get(loginSelectors.signUpButton).click();

        // Check for the error message indicating an invalid password format
        cy.get('div.text-critical.mb-1')
            .should('be.visible')
            .and('contain', 'Password is invalid: Password must be at least 6 characters');
    });
    // New test case for the happy flow of user registration
    it('Successfully registers a new account with valid details', () => {
        // Retrieve the login URL from environment variables
        const loginUrl = Cypress.env('loginUrl');

        // Ensure login URL is defined
        if (!loginUrl) {
            throw new Error('loginUrl is not defined. Please check your environment variables.');
        }

        // Visit the login page using the URL from environment variables
        cy.visit(loginUrl);

        // Click on the "Create an account" link
        cy.get(loginSelectors.createAccountLink).click();

        // Enter a valid name into the "Full Name" input field
        cy.get(loginSelectors.fullNameInput).type('Test Name');

        // Generate a unique email address
        const randomEmail = `test${Math.random().toString(36).substring(2, 8)}@gmail.com`;

        // Enter the generated email into the email input field
        cy.get(loginSelectors.emailInput).type(randomEmail);

        // Enter a valid password into the password input field
        cy.get('input[name="password"]').type('test1234');  // Use the selector from your new file

        // Click the "SIGN UP" button to submit the registration form
        cy.get(loginSelectors.signUpButton).click();

        // Verify the URL has changed to the homepage after successful registration
        cy.url().should('eq', 'http://localhost:3000/');
    });

});
