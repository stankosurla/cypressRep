const locators = require("../fixtures/locators.json");
const data = require("../fixtures/data.json");
const errors = require("../fixtures/errors.json");

describe('Login test', () => {

    before(() => {
        cy.visit('/');
        cy.get(locators.login.login).click();
    });

    it('login without password', () => {
        cy.get(locators.login.email).click().type(data.loginRegister.email);
        cy.get(locators.login.submit).click();
        cy.get('.btn').should('contain', 'Submit');
    });
    it('login incorrect email', () => {
        cy.get(locators.login.email).clear().type(data.loginRegister.emailIncorrect);
        cy.get(locators.login.password).click().type(data.loginRegister.password);
        cy.get(locators.login.submit).click();
        cy.get('.alert').should('contain', errors.login.incorrectMail);
    });
    it('login incorrect email type', () => {
        cy.get(locators.login.email).clear().type(data.loginRegister.emailIncorrectType);
        cy.get(locators.login.password).clear().type(data.loginRegister.password);
        cy.get(locators.login.submit).click();
        cy.get(locators.login.email).should('exist');
        cy.get(locators.login.password).should('exist');
        cy.get(locators.login.submit).should('exist');
    });
    it('login password less than 8 characters', () => {
        cy.get(locators.login.email).clear().type(data.loginRegister.email);
        cy.get(locators.login.password).clear().type(data.loginRegister.passwordShort);
        cy.get(locators.login.submit).click();
        cy.get('.alert').should('contain', errors.login.passwordShort);
    });
    it('login password without number', () => {
        cy.get(locators.login.email).clear().type(data.loginRegister.email);
        cy.get(locators.login.password).clear().type(data.loginRegister.passwordWithoutNumber);
        cy.get(locators.login.submit).click();
        cy.get('.alert').should('contain', errors.login.passwordNoNumber);
    });
    it('Successful login', () => {
        cy.get(locators.login.email).clear().type(data.loginRegister.email);
        cy.get(locators.login.password).clear().type(data.loginRegister.password);
        cy.get(locators.login.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.wait(1500);
        cy.get(locators.login.email).should('not.exist');
        cy.get(locators.login.password).should('not.exist');
        cy.get(locators.login.submit).should('not.exist');
    });
    /* it('logout', () => {
        cy.get(locators.logout.logout).click();
    }); */
});
