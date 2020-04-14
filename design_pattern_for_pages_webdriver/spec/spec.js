/* eslint-disable no-undef */

const PageFactory = require('../page_objects/pageFactory');

describe('Registration on the site', () => {
	it('should check page title of home page with no logged in user', async () => {
		await PageFactory.getPage('Home').open();
		const homePageTitleWithNoLoggedInUser = await PageFactory.getPage('Home')
			.checkPageTitle('Stock Images, Photos, Vectors, Video, and Music | Shutterstock');
		return expect(homePageTitleWithNoLoggedInUser).toBe(true);
	});

	it('should click Sign up button', async () => {
		await PageFactory.getPage('Home').registrationButton.click();
	});

	it('should check if registration form appears', async () => {
		const RegistrationForm = await PageFactory.getPage('Registration').emailInputField.isPresent();
		return expect(RegistrationForm).toBeTruthy();
	});

	it('should be able to create account and navigate to Home page', async () => {
		await PageFactory.getPage('Registration').submitRegistration();
		await PageFactory.getPage('Registration').waitForHomePageAfterSignUp();
		const homePageTitleWithLoggedInUser = await PageFactory.getPage('Home')
			.checkPageTitle('Stock Photos, Royalty-Free Images and Vectors - Shutterstock');
		return expect(homePageTitleWithLoggedInUser).toBe(true);
	});
});
