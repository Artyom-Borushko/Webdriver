const { Then } = require('cucumber');
const expect = require('chai').expect;
const PageFactory = require('../../utils/pageFactory');
const waitForElement = require('../../utils/waitFunction');
const logger = require('../../config/loggerConfig').logger;


Then(/^Page with defined photo category should appear with "([^"]*)"$/, async (url) => {
	logger.info('I check page url');
	await PageFactory.getPage('ParticularSearch');
	const pageUrl = await browser.getCurrentUrl();
	return expect(pageUrl).to.be.equal(url);
});

Then(/^Page title should be "([^"]*)"$/, async (title) => {
	const pageLoadingChecker = await PageFactory.getPage('Home').header.logo;
	await waitForElement(pageLoadingChecker, 'present');
	const pageTitle = await browser.getTitle();
	return expect(pageTitle).to.be.equal(title);
});

Then(/^I wait while Sign up form appears on the page$/, async () => {
	const RegistrationForm = await PageFactory.getPage('Registration').emailInputField.isPresent();
	return expect(RegistrationForm).to.be.true;
});
