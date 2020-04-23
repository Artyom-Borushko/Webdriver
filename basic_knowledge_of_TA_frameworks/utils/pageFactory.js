const BasePage = require('../page_objects/basePage');
const HomePage = require('../page_objects/homePage');
const RegistrationPage = require('../page_objects/registrationPage');
const PeoplePage = require('../page_objects/peoplePage');

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