const BasePage = require('./basePage');

const EC = protractor.ExpectedConditions;

class PeoplePage extends BasePage {
	constructor() {
		super();
		this.childrenContainer = $$('.o_card_theme_content.oc_w_p').get(4);
		this.peoplePageBackground = $('.oc_M_b.b_N_b');
		this.seePricingButton = $("a[data-track-label='showPricing']");
	}

	async openPricingInNewWindow() {
		browser.actions().keyDown(protractor.Key.CONTROL).click(this.seePricingButton).keyUp(protractor.Key.CONTROL)
			.perform();
	}

	async waitForPeoplePhotoPageLoad() {
		return browser.wait(EC.titleIs('People Images, Pictures, Photos - People Photographs | Shutterstock'), 15000, 'Waiting time has expired');
	}

	async waitForPhotoPricingPageLoad() {
		return browser.wait(EC.titleIs('Stock Photo, Royalty-Free Image Prices and Plans - Shutterstock'), 15000, 'Waiting time has expired');
	}
}


module.exports = PeoplePage;