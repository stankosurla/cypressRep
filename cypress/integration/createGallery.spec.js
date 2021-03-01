const locators = require("../fixtures/locators.json");

describe('create gallery', () => {
    it('login', () => {
        cy.visit('/');
        cy.get(locators.login.login).click();
        cy.get(locators.login.email).clear().type('test12345678@gmail.com');
        cy.get(locators.login.password).clear().type('12345678');
        cy.get(locators.login.submit).click();
    });
    it('create', () => {
        cy.get(locators.create.createGalleryBtn).click();
        cy.get(locators.create.title).click().type('new cat');
        cy.get(locators.create.description).click().type('new desc');
        cy.get(locators.create.input).click().type('https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg');
        cy.get(locators.create.submit).click();
    });
});