const { When } = require('cucumber');
const PageFactory = require('../../utils/pageFactory');
const logger = require('../../config/loggerConfig').logger;


When(/^I click on Sign up button$/, async () => {
	logger.info('I click on Sign up button');
	await PageFactory.getPage('Home').registrationButton.click();
});

When(/^I enter "([^"]*)" email and "([^"]*)" password and click continue button$/, async (email, password) => {
	logger.info('Fill in registration form');
	await PageFactory.getPage('Registration').submitRegistration(email, password);
	await PageFactory.getPage('Registration').waitForHomePageAfterSignUp();
});
