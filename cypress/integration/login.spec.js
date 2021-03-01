const locators = require("../fixtures/locators.json");

describe('Login test', () => {

    before(() => {
        cy.visit('/');
        cy.get(locators.login.login).click();
    });

    it('login without password', () => {
        cy.get(locators.login.email).click().type('test12345678@gmail.com');
        cy.get(locators.login.submit).click();
    });
    it('login incorrect email', () => {
        cy.get(locators.login.email).clear().type('test246897531@gmail.com');
        cy.get(locators.login.password).click().type('12345678');
        cy.get(locators.login.submit).click();
    });
    it('login incorrect email type', () => {
        cy.get(locators.login.email).clear().type('pera.gmail.com');
        cy.get(locators.login.password).clear().type('12345678');
        cy.get(locators.login.submit).click();
    });
    it('login password less than 8 characters', () => {
        cy.get(locators.login.email).clear().type('test12345678@gmail.com');
        cy.get(locators.login.password).clear().type('1234567');
        cy.get(locators.login.submit).click();
    });
    it('login password without number', () => {
        cy.get(locators.login.email).clear().type('test12345678@gmail.com');
        cy.get(locators.login.password).clear().type('asdfghjkl');
        cy.get(locators.login.submit).click();
    });
    it('Successful login', () => {
        cy.get(locators.login.email).clear().type('test12345678@gmail.com');
        cy.get(locators.login.password).clear().type('12345678');
        cy.get(locators.login.submit).click();
    });
    it('logout', () => {
        cy.get(locators.logout.logout).click();
    });
});
