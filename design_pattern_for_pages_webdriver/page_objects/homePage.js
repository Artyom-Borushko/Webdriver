const BasePage = require('./basePage');

class HomePage extends BasePage {
	constructor() {
		super();
		this.url = '';
		this.backgroundImage = element(by.css('.u_g_b'));
		this.registrationButton = element(by.css("button[data-automation='SecondaryItems_sign-up_button']"));
	}
}

module.exports = HomePage;