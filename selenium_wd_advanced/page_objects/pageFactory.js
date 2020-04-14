const BasePage = require('./basePage');
const HomePage = require('./homePage');
const RegistrationPage = require('./registrationPage');
const PeoplePage = require('./peoplePage');

class PageFactory {
	static getPage(pageName) {
		switch (pageName) {
		case 'Home':
			return new HomePage();
		case 'Registration':
			return new RegistrationPage();
		case 'People':
			return new PeoplePage();
		default:
			return new BasePage();
		}
	}
}

module.exports = PageFactory;