const BasePage = require('./basePage');

class HomePage extends BasePage {
	constructor() {
		super();
		this.url = '';
		this.backgroundImage = $('.u_g_b');
		this.registrationButton = $("button[data-automation='SecondaryItems_sign-up_button']");
		this.acceptCookieButton = $('.Eu_acceptCookies_link');
	}


	async openPeoplePhotoCategory() {
		const imageLink = this.header.imagesLink;
		const photoCategories = await this.header.imagesLinkDropdownMenu.get(5);
		const peoplePhotoCategory = await this.header.imagesLinkDropdownMenu.get(26);
		browser.actions().mouseMove(imageLink).mouseMove(photoCategories).mouseMove(peoplePhotoCategory)
			.click()
			.perform();
	}
}


module.exports = HomePage;