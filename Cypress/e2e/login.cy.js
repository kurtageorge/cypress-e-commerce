describe('E-commerce Tests with Reused Login Session', () => {

    // Helper function to construct URLs properly
    function visitUrl(path) {
        // Ensure no double slashes in the final URL
        const baseUrl = Cypress.config('baseUrl').replace(/\/+$/, '');
        const finalPath = path.replace(/^\/+/, '');
        cy.visit(`${baseUrl}/${finalPath}`);
    }

    // Helper function to normalize URLs for comparison
    function normalizeUrl(url) {
        return url.replace(/\/+$/, ''); // Remove trailing slashes
    }

    // Before each test, ensure the user is logged in
    beforeEach(() => {
        // Use the credentials from environment variables
        cy.login(Cypress.env('CYPRESS_USER_EMAIL'), Cypress.env('CYPRESS_USER_PASSWORD'));
    });

    it('Verifies login and redirects to the homepage', () => {
        // Manually visit the homepage after session restoration
        visitUrl('/');

        // Normalize both URLs before comparing
        cy.url().then((currentUrl) => {
            expect(normalizeUrl(currentUrl)).to.eq(normalizeUrl(`${Cypress.config('baseUrl')}/`));
        });
    });

    it('Navigates to the women\'s section', () => {
        // Use the helper function to navigate to the women's section
        visitUrl('/women');

        // Normalize both URLs before comparing
        cy.url().then((currentUrl) => {
            expect(normalizeUrl(currentUrl)).to.eq(normalizeUrl(`${Cypress.config('baseUrl')}/women`));
        });
    });

    // Additional tests can go here, all reusing the session
});
