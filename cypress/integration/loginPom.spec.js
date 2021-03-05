import { loginPage } from '../page_objects/loginPage.js';
const data = require("../fixtures/data.json");
const errors = require("../fixtures/errors.json");

describe('Login test', () => {

    beforeEach(() => {
        cy.visit('/');
        loginPage.visitLogin();
    });

    it('login without password', () => {
        loginPage.fillEmailInput(data.loginRegister.email);
        cy.get('.btn').should('contain', 'Submit');
    });
    it('login incorrect email', () => {
        loginPage.login(data.loginRegister.emailIncorrect, data.loginRegister.password);
        cy.get('.alert').should('contain', errors.login.incorrectMail);
    });
    it('login incorrect email type', () => {
        loginPage.login(data.loginRegister.emailIncorrectType, data.loginRegister.password);
        loginPage.emailInput.should('exist');
        loginPage.passwordInput.should('exist');
        loginPage.submitButton.should('exist');
    });
    it('login password less than 8 characters', () => {
        loginPage.login(data.loginRegister.email, data.loginRegister.passwordShort);
        cy.get('.alert').should('contain', errors.login.passwordShort);
    });
    it('login password without number', () => {
        loginPage.login(data.loginRegister.email, data.loginRegister.passwordWithoutNumber);
        cy.get('.alert').should('contain', errors.login.passwordNoNumber);
    });
    it('Successful login', () => {
        loginPage.login(data.loginRegister.email, data.loginRegister.password);
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.wait(1500);
        loginPage.emailInput.should('not.exist');
        loginPage.passwordInput.should('not.exist');
        loginPage.submitButton.should('not.exist');
    });
    /* it('logout', () => {
        cy.get(locators.logout.logout).click();
    }); */
});
