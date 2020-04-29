const BasePage = require('./basePage');

const EC = protractor.ExpectedConditions;

class ParticularSearchPage extends BasePage {
	constructor() {
		super();
		this.url = '';
	}

	async waitForParticularSearchPageLoad() {
		return browser.wait(EC.titleContains('Images, Stock Photos & Vectors | Shutterstock'), 15000, 'Waiting time has expired');
	}
}

module.exports = ParticularSearchPage;