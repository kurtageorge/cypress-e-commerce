// ../support/selectors/cartSelectors.js

export const cartSelectors = {
    productItem: '.listing-tem .product-thumbnail-listing a[href="/striped-cotton-sweater"]', // Selector for the first product item
    secondProductItem: '.listing-tem .product-thumbnail-listing a[href="/denim-skinny-jeans"]', // Selector for the second product item
    addToCartButton: 'button.button.primary.outline', // Selector for the "ADD TO CART" button
    cartConfirmation: 'div.Toastify__toast-body div.toast-mini-cart div.top-head', // Selector for the cart confirmation message
    qtyOne: 'div.item-info div:contains("QTY: 1")', // Selector to check that QTY: 1 is visible
    viewCartLink: 'a.add-cart-popup-button', // Selector for "VIEW CART" button in the popup
    homeRedirect: 'a.text-interactive[href="/"]', // Selector for the home redirect link
    removeItemLink: 'div.mt-05 a.text-textSubdued.underline:has(span:contains("Remove"))',
    cartEmptyMessage: 'span:contains("Your cart is empty!")',
    checkoutButton: 'a.button.primary[href="/checkout"]',
    checkoutPageVisible: 'selector-for-checkout-page-element',
};
