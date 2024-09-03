// homepage.spec.js

import { productCatalogSelectors } from '../support/selectors/productCatalog';

// Test suite for Product Catalog elements
describe('Product Catalog Tests', () => {
    beforeEach(() => {
        cy.visit('/'); // Replace with the actual URL or path to the homepage
    });

    it('should display the carousel', () => {
        cy.get(productCatalogSelectors.carousel).should('be.visible');
    });

    it('should display the discount banner with coupon code', () => {
        cy.get(productCatalogSelectors.discountBanner).should('be.visible');
        cy.get(productCatalogSelectors.couponCode).should('contain.text', 'DISCOUNT20');
    });

    it('should display the "Shop Kids" link', () => {
        cy.get(productCatalogSelectors.shopKids).should('be.visible');
    });

    it('should display the "Shop Women" link', () => {
        cy.get(productCatalogSelectors.shopWomen).should('be.visible');
    });

    it('should display the "Shop Men" text', () => {
        cy.get(productCatalogSelectors.shopMen).should('be.visible');
    });

    it('should display the "Featured Products" section', () => {
        cy.get(productCatalogSelectors.featuredProducts).should('be.visible');
    });

    it('should display footer icons', () => {
        cy.get(productCatalogSelectors.footerIcons).should('be.visible');
    });
});

// Test suite for checking environment variables
describe('Environment Variable Test', () => {
    it('Should navigate to the base URL', () => {
        // Replace 'loginUrl' with the environment variable key that holds your base URL
        const baseUrl = Cypress.env('loginUrl');
        cy.visit(baseUrl); // Navigate to the base URL specified in your .env file
        cy.url().should('include', baseUrl); // Adjust the URL check to match your expected base URL
    });
});
