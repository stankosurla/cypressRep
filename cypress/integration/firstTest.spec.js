/// <reference types="Cypress" />

describe('Login test', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
        cy.wait(10000);
    });
    it('Click on login button', () => {
        cy.get("a[href='/login']").click();
    });
    it('Login with valid credentials', () => {
        cy.get('#email').type('test12345678@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('button').click()
    });
    it('Logout', () => {
        cy.get("a[role = 'button ']").click();
    });
});
