const locators = require("../fixtures/locators.json");
const data = require("../fixtures/data.json");

describe('create gallery', () => {
    it('login', () => {
        cy.visit('/');
        cy.get(locators.login.login).click();
        cy.get(locators.login.email).clear().type(data.loginRegister.email);
        cy.get(locators.login.password).clear().type(data.loginRegister.password);
        cy.get(locators.login.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.wait(1500);
        cy.get(locators.login.email).should('not.exist');
        cy.get(locators.login.password).should('not.exist');
        cy.get(locators.login.submit).should('not.exist');
    });
    it('create', () => {
        cy.get(locators.create.createGalleryBtn).click();
        cy.wait(1500);
        cy.get(locators.create.title).click().type(data.create.title);
        cy.get(locators.create.description).click().type(data.create.description);
        cy.get(locators.create.input).click().type(data.create.imageUrl);
        cy.get(locators.create.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get(locators.create.title).should('not.exist');
        cy.get(locators.create.description).should('not.exist');
        cy.get(locators.create.input).click().should('not.exist');
    });
});