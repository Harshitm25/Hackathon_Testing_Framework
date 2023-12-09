const signup=require('../pageobjects/signup.page')

describe('Webpage Test Suite', () => {
    it('should create an account successfully', async () => {
        await browser.url('https://65742d2560517d40bec1210e--steady-boba-f77e2d.netlify.app/');

        const emailInput = await signup.emailInput;
        const passwordInput = await signup.passwordInput ;
        const usernameInput = await signup.usernameInput;
        const createAccountButton = await signup.btnSubmit;

        await emailInput.setValue('test@example.com');
        await passwordInput.setValue('password123');
        await usernameInput.setValue('testuser');
        await createAccountButton.click();
        await browser.pause(5000)
        const successMessage = await signup.successMessage;
        await successMessage.waitForExist();
        await expect(successMessage).toHaveText('Account created for testuser with email: test@example.com');
    });

    it('should show error message for empty fields', async () => {
        await browser.url('https://65742d2560517d40bec1210e--steady-boba-f77e2d.netlify.app/');

        const createAccountButton = await $('button');
        await createAccountButton.click();

        const errorMessage = await signup.errorMessage;
        errorMessage.waitForExist();

        const errorText = await errorMessage.getText();
        await expect(errorMessage).toHaveText('Please fill in all the fields.');
    });
});
