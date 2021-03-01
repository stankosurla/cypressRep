import { loginPage } from '../page_objects/loginPage.js'
import { allGalleries } from '../page_objects/allGalleries.js'

describe('all galleries', () => {

    it('login', () => {
        cy.visit('/');
        loginPage.visitLogin();
        loginPage.login("test12345678@gmail.com", "12345678")
    });
    it('get all galleries', () => {
        allGalleries.visitAllGalleries();
    });
    it('empty search field', () => {
        allGalleries.clickFilterButton();
    });
    it('search for non existing word', () => {
        allGalleries.fillSearchInput('asdasdasdasd');
        allGalleries.clickFilterButton();
    });
    it('search for existing word', () => {
        allGalleries.fillSearchInput('cat');
        allGalleries.clickFilterButton();
    });
});