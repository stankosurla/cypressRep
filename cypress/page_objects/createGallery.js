class CreateGallery {

    get titleInput() {
        return cy.get("#title")
    }

    get descriptionInput() {
        return cy.get("#description")
    }

    get imageInput() {
        return cy.get("input[type='url']")
    }

    get submitButton() {
        return cy.get("form > button:nth-of-type(1)")
    }

    get createGalBtn() {
        return cy.get("a[href='/create']")
    }

    clearFields() {
        this.titleInput.clear();
        this.descriptionInput.clear();
        this.imageInput.clear();
    }

    clickCreateGall() {
        this.createGalBtn.click()
    }

    fillTitleInput(title) {
        this.titleInput.type(title)
    }

    fillDescriptionInput(desc) {
        this.descriptionInput.type(desc)
    }

    fillImageInput(img) {
        this.imageInput.type(img)
    }

    clickSubmitButton() {
        this.submitButton.click()
    }
}
export const createGallery = new CreateGallery()