

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage {
    
    get emailInput () {
        return $('#email');
    }

    get passwordInput () {
        return $('#password');
    }

    get usernameInput()
    {
        return $('#username');
    }

    get btnSubmit () {
        return $('#submit_btn');
    }
    get successMessage()
    {
        return $('#success-message')
    }
    get errorMessage()
    {
        return $('#error-message')
    }



    

    /**
     * overwrite specific options to adapt it to page object
     */
    
}

module.exports = new SignupPage();
