import { loginPage } from '../page_objects/loginPage.js'

describe('Login test', () => {

    beforeEach(() => {
        cy.visit('/');
        loginPage.visitLogin();
    });

    it('login without password', () => {
        loginPage.login("bla@gmail.com", " ")
    });
    it('login incorrect email', () => {
        loginPage.login("bla@gmail.com", "kjfhdshfak")
    });
    it('login incorrect email type', () => {
        loginPage.login("bla.gmail.com", "kjfhdshfak")
    });
    it('login password less than 8 characters', () => {
        loginPage.login("bla@gmail.com", "1234567")
    });
    it('login password without number', () => {
        loginPage.login("bla@gmail.com", "asdfghjkl")
    });
    it('Successful login', () => {
        loginPage.login("bla@gmail.com", "12345678")
    });
    /* it('logout', () => {
        cy.get(locators.logout.logout).click();
    }); */
});
