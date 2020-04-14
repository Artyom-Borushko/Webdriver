const BasePage = require('./basePage');
const HomePage = require('./homePage');
const RegistrationPage = require('./registrationPage');

class PageFactory {
	static getPage(pageName) {
		switch (pageName) {
		case 'Home':
			return new HomePage();
		case 'Registration':
			return new RegistrationPage();
		default:
			return new BasePage();
		}
	}
}

module.exports = PageFactory;