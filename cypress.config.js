const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Set the base URL from environment variables or fallback to a default
      config.baseUrl = process.env.CYPRESS_BASE_URL || 'http://localhost:3000';

      // Load additional environment variables for login
      config.env = {
        loginUrl: process.env.CYPRESS_LOGIN_URL,
        userEmail: process.env.CYPRESS_USER_EMAIL,
        userPassword: process.env.CYPRESS_USER_PASSWORD,
      };

      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/index.js',  // Ensure this points to your support file
  },
});
