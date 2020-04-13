/* eslint-disable no-undef */
const HomePage = require('../page_objects/homePage');
const RegistrationPage = require('../page_objects/registrationPage');


describe('Registration on the site', () => {
	let homePage;
	let registrationPage;
	beforeAll(() => {
		homePage = new HomePage();
		registrationPage = new RegistrationPage();
		return homePage.open();
	});

	it('should check page title of home page with no logged in user', () => expect(homePage
		.checkPageTitle('Stock Images, Photos, Vectors, Video, and Music | Shutterstock')).toBe(true));

	it('should click Sign up button', () => {
		homePage.registrationButton.click();
	});

	it('should check if registration form appears', () => expect(registrationPage.emailInputField.isPresent()).toBeTruthy());

	it('should be able to create account and navigate to Home page', () => {
		registrationPage.submitRegistration();
		registrationPage.waitForHomePageAfterSignUp();
		return expect(homePage.checkPageTitle('Stock Photos, Royalty-Free Images and Vectors - Shutterstock')).toBe(true);
	});
});
