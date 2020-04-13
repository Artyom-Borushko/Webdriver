// const { Alert } = require('selenium-webdriver');
const BasePage = require('./basePage');

const EC = protractor.ExpectedConditions;

class RegistrationPage extends BasePage {
	constructor() {
		super();
		this.emailInputField = $$("input[data-automation='SignUpForm_email_input']");
		this.passwordInputField = $$("input[data-automation='SignUpForm_password_input']");
		this.confirmRegistrationButton = $$("button[data-automation='SignUpForm_submit_button']");
		this.firstFeaturedArtist = $$('.oc_x_o');
	}


	async submitRegistration() {
		await this.emailInputField.get(2).sendKeys('letmeenterpls14@gmail.com');
		await this.passwordInputField.get(2).sendKeys('iwanttoenterpls');
		await this.confirmRegistrationButton.get(2).click();
	}

	async waitForHomePageAfterSignUp() {
		return browser.wait(EC.visibilityOf(this.firstFeaturedArtist.get(4)), 15000, 'Waiting time has expired');
	}
}

module.exports = RegistrationPage;