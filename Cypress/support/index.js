// Import commands.js using ES2015 syntax:
import './commands';
require('cypress-xpath');

// Alternatively you can use CommonJS syntax:
// require('./commands');

// cypress/support/index.js or at the top of your spec file

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});
