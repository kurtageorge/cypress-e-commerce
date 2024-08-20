import { loginSelectors } from './selectors/loginSelectors'; // Make sure this path is correct

Cypress.Commands.add('login', () => {
    const email = Cypress.env('userEmail');
    const password = Cypress.env('userPassword');

    cy.session([email, password], () => {
        cy.visit(Cypress.env('loginUrl'));

        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();

        cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
    });
});

