class LoginPage {
    get emailInput() {
        return cy.get('#email')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get submitButton() {
        return cy.get('button[type="submit"]')
    }

    get navigationLogin() {
        return cy.get("a[href='/login']");
    }

    fillEmailInput(email) {
        this.emailInput.type(email)
    }

    fillPasswordInput(password) {
        this.passwordInput.type(password)
    }

    clickSubmitButton() {
        this.submitButton.click()
    }

    visitLogin() {
        this.navigationLogin.click()
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
}

export const loginPage = new LoginPage()