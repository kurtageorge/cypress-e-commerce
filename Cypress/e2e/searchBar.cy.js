// search.spec.js

import { searchSelectors } from '../support/selectors/searchbar.js';

describe('Search Functionality Tests', () => {
    beforeEach(() => {
        cy.visit('/'); // Replace with the actual URL or path to the homepage
    });

    it('should display search results for "denim"', () => {
        cy.get(searchSelectors.searchButton).click(); //
        cy.get(searchSelectors.searchBar).type('denim{enter}');
        cy.get(searchSelectors.searchResultTitle).should('be.visible').and('contain.text', 'Search results for "denim"');
    });

    // it('should display no products found for "test"', () => {
    //     cy.get(searchSelectors.searchButton).click(); // Use XPath selector with cy.xpath()
    //     cy.get(searchSelectors.searchBar).clear().type('test{enter}');
    //     cy.get(searchSelectors.noProductCount).should('be.visible').and('contain.text', '0 products');
    // });
});
