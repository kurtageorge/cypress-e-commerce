// Import the selectors from the selectors file
import { loginSelectors } from '../support/selectors/loginSelectors';

describe('E-commerce Password Recovery Tests', () => {
    it('Allows users to recover their password', () => {
        // Retrieve the login URL from environment variables
        const loginUrl = Cypress.env('loginUrl');

        // Ensure login URL is defined
        if (!loginUrl) {
            throw new Error('loginUrl is not defined. Please check your environment variables.');
        }

        // Visit the login page using the URL from environment variables
        cy.visit(loginUrl);

        // Click on the "Forgot your password?" link
        cy.get(loginSelectors.forgotPasswordLink).click();

        // Enter any email into the email input field
        cy.get(loginSelectors.emailInput).type('test@example.com');

        // Click on the "RESET PASSWORD" button
        cy.get(loginSelectors.resetPasswordButton).click();

        // Verify the success message is displayed
        cy.get(loginSelectors.successMessage)
            .should('be.visible')
            .and('contain', 'We have sent you an email with a link to reset your password. Please check your inbox.');
    });
});
