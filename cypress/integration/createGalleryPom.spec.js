import { loginPage } from '../page_objects/loginPage.js'
import { createGallery } from '../page_objects/createGallery.js'

describe('create gallery', () => {
    it('login', () => {
        cy.visit('/');
        loginPage.visitLogin();
        loginPage.login("test12345678@gmail.com", "12345678")
    });
    it('title one char, too short', () => {
        createGallery.clickCreateGall();
        createGallery.fillTitleInput('C');
        createGallery.fillDescriptionInput('Nice cat');
        createGallery.fillImageInput('https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg');
        createGallery.clickSubmitButton();
    });
    it('title 256 chars, too long', () => {
        createGallery.clearFields();
        createGallery.fillTitleInput('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget volutpat ante. Donec augue augue, bibendum eu est semper, mattis venenatis velit. Nulla accumsan metus ex, sit amet pretium eros sollicitudin quis. Nam nisi arcu, porttitor at purus sed est.');
        createGallery.fillDescriptionInput('Nice cat');
        createGallery.fillImageInput('https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg');
        createGallery.clickSubmitButton();
    });
    it('without title', () => {
        createGallery.clearFields();
        createGallery.fillDescriptionInput('Nice cat');
        createGallery.fillImageInput('https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg');
        createGallery.clickSubmitButton();
    });
    it('without image', () => {
        createGallery.clearFields();
        createGallery.fillTitleInput('Cat');
        createGallery.fillDescriptionInput('Nice cat');
        createGallery.clickSubmitButton();
    });
    it('bad image extension', () => {
        createGallery.clearFields();
        createGallery.fillTitleInput('Cat');
        createGallery.fillDescriptionInput('Nice cat');
        createGallery.fillImageInput('https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jp');
        createGallery.clickSubmitButton();
    });
    it('successful create', () => {
        createGallery.clearFields();
        createGallery.fillTitleInput('Cat');
        createGallery.fillDescriptionInput('Nice cat');
        createGallery.fillImageInput('https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg');
        createGallery.clickSubmitButton();
    });
});