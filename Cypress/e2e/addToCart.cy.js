// addToCart.spec.js

import { cartSelectors } from '../support/selectors/cartSelectors.js';

describe('Add to Cart Tests', () => {
    beforeEach(() => {
        cy.visit('/'); // Replace with the actual URL or path to the homepage
    });

    it('add one item in cart', () => {
        // Click on the product item to view details
        cy.get(cartSelectors.productItem).click();

        // Click on the "ADD TO CART" button
        cy.get(cartSelectors.addToCartButton).click();

        // Verify the cart confirmation message is visible
        cy.get(cartSelectors.cartConfirmation)
            .should('be.visible')
            .and('contain.text', 'JUST ADDED TO YOUR CART');

        // Verify that QTY: 1 is visible
        cy.get(cartSelectors.qtyOne)
            .should('be.visible')
            .and('contain.text', 'QTY: 1');
    });

    it('add multiple items to cart', () => {
        // Function to generate a random number between 1 and 10
        const getRandomQty = () => Math.floor(Math.random() * 10) + 1;

        // Generate a random quantity
        const randomQty = getRandomQty();

        // Click on the product item to view details
        cy.get(cartSelectors.productItem).click();

        // Set the quantity to the random value
        cy.get('input[name="qty"]').clear().type(randomQty);

        // Click on the "ADD TO CART" button
        cy.get(cartSelectors.addToCartButton).click();

        // Verify the cart confirmation message is visible
        cy.get(cartSelectors.cartConfirmation)
            .should('be.visible')
            .and('contain.text', 'JUST ADDED TO YOUR CART');

        // Verify that the correct random quantity is displayed
        cy.get(`div.item-info div:contains("QTY: ${randomQty}")`)
            .should('be.visible')
            .and('contain.text', `QTY: ${randomQty}`);
    });

    it('add two different items to cart', () => {
        // Click on the first product item to view details
        cy.get(cartSelectors.productItem).click();

        // Click on the "ADD TO CART" button for the first item
        cy.get(cartSelectors.addToCartButton).click();

        // Verify the cart confirmation message is visible
        cy.get(cartSelectors.cartConfirmation)
            .should('be.visible')
            .and('contain.text', 'JUST ADDED TO YOUR CART');

        // Click on the "Home" redirect to go back to the product listing page
        cy.get(cartSelectors.homeRedirect).click();

        // Click on the second product item to view details
        cy.get(cartSelectors.secondProductItem).click();

        // Click on the "ADD TO CART" button for the second item
        cy.get(cartSelectors.addToCartButton).click();

        // Verify that the "VIEW CART (2)" link is visible
        cy.get(cartSelectors.viewCartLink)
            .should('be.visible')
            .and('contain.text', 'VIEW CART (2)');
    });
    it('add and remove a single item from cart', () => {
        // Click on the product item to view details
        cy.get(cartSelectors.productItem).click();

        // Click on the "ADD TO CART" button for the item
        cy.get(cartSelectors.addToCartButton).click();

        // Verify the cart confirmation message is visible
        cy.get(cartSelectors.cartConfirmation)
            .should('be.visible')
            .and('contain.text', 'JUST ADDED TO YOUR CART');

        // Click on "VIEW CART (1)" to navigate to the cart page
        cy.get(cartSelectors.viewCartLink)
            .should('be.visible')
            .and('contain.text', 'VIEW CART (1)')
            .click();

        // Click on the "Remove" link to remove the item from the cart
        cy.get(cartSelectors.removeItemLink).click();

        // Verify that the cart is empty by checking for the "Your cart is empty!" message
        cy.get(cartSelectors.cartEmptyMessage)
            .should('be.visible')
            .and('contain.text', 'Your cart is empty!');
    });

    it('continue to checkout', () => {
        // Step 1: Add a single item to the cart using the steps from the previous test
        cy.get(cartSelectors.productItem).click(); // Click on the product item to view details
        cy.get(cartSelectors.addToCartButton).click(); // Click on the "ADD TO CART" button for the item

        // Verify the cart confirmation message is visible
        cy.get(cartSelectors.cartConfirmation)
            .should('be.visible')
            .and('contain.text', 'JUST ADDED TO YOUR CART');

        // Click on "VIEW CART (1)" to navigate to the cart page
        cy.get(cartSelectors.viewCartLink)
            .should('be.visible')
            .and('contain.text', 'VIEW CART (1)')
            .click();

        // Step 2: Click the "CHECKOUT" button
        cy.get(cartSelectors.checkoutButton).click();

        // Step 3: Verify that the checkout page or specific element is visible
        cy.get(cartSelectors.checkoutPageVisible).should('be.visible');
    });



});
