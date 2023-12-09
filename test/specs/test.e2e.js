const signup = require('../pageobjects/signup.page')

describe('Webpage Test Suite', () => {
    before(() => {
        browser.url('https://65742d2560517d40bec1210e--steady-boba-f77e2d.netlify.app/');
    });

    it('should show error message for empty fields', async () => {
        const createAccountButton = await signup.btnSubmit;
        await createAccountButton.click();
        await browser.pause(3000)
        const errorMessage = await signup.errorMessage;
        errorMessage.waitForExist();
        await expect(errorMessage).toHaveText('Please fill in all the fields.');
    });

    it('should create an account successfully', async () => {
        const emailInput = await signup.emailInput;
        const passwordInput = await signup.passwordInput;
        const usernameInput = await signup.usernameInput;
        const createAccountButton = await signup.btnSubmit;

        await emailInput.setValue('test@example.com');
        await passwordInput.setValue('password123');
        await usernameInput.setValue('testuser');
        await createAccountButton.click();
        await browser.pause(2000)
        const successMessage = await signup.successMessage;
        await successMessage.waitForExist();
        await expect(successMessage).toHaveText('Account created for testuser with email: test@example.com');
    });


});
