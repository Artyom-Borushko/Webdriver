// const { Alert } = require('selenium-webdriver');
const BasePage = require('./basePage');

const EC = protractor.ExpectedConditions;

class RegistrationPage extends BasePage {
	constructor() {
		super();
		this.emailInputField = $$("input[data-automation='SignUpForm_email_input']").get(2);
		this.passwordInputField = $$("input[data-automation='SignUpForm_password_input']").get(2);
		this.confirmRegistrationButton = $$("button[data-automation='SignUpForm_submit_button']").get(2);
		this.firstFeaturedArtist = $$('.oc_x_o');
	}


	async submitRegistration() {
		await this.highlight(this.emailInputField);
		await this.emailInputField.sendKeys('letmeenterpls21@gmail.com');
		await this.highlight(this.passwordInputField);
		await this.passwordInputField.sendKeys('iwanttoenterpls');
		await this.confirmRegistrationButton.click();
	}

	async waitForHomePageAfterSignUp() {
		return browser.wait(EC.elementToBeClickable(this.firstFeaturedArtist.get(4)), 15000, 'Waiting time has expired');
	}
}

module.exports = RegistrationPage;