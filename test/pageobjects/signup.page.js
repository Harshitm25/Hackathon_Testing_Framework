class SignupPage {

    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get usernameInput() {
        return $('#username');
    }

    get btnSubmit() {
        return $('#submit_btn');
    }
    get successMessage() {
        return $('#success-message')
    }
    get errorMessage() {
        return $('#error-message')
    }

}

module.exports = new SignupPage();
