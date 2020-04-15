/* eslint-disable protractor/no-shadowing */
const Footer = require('./common/footerComponent');
const Header = require('./common/headerComponent');
const SearchBox = require('./common/searchBoxComponent');

const EC = protractor.ExpectedConditions;

class BasePage {
	constructor() {
		this.header = new Header();
		this.footer = new Footer();
		this.searchBox = new SearchBox();
	}

	async getCurrentUrl() {
		return browser.getCurrentUrl();
	}

	async switchToTheFirstNewWindow() {
		browser.sleep(200);
		const handles = await browser.getAllWindowHandles();
		browser.switchTo().window(handles[1]);
	}

	async highlight(element) {
		const oldBackgroundColor = await element.getCssValue('backgroundColor');
		await browser.executeScript("arguments[0].style.backgroundColor = 'red'", element);
		await browser.sleep(500);
		await browser.executeScript(`arguments[0].style.backgroundColor = '${oldBackgroundColor}'`, element);
		return browser.sleep(500);
	}

	async open() {
		browser.get(`https://www.shutterstock.com/en/${this.url}`);
		return browser.wait(EC.visibilityOf(this.header.logo), 5000, 'Waiting time has expired');
	}

	getPageTitle() {
		return browser.getTitle();
	}

	checkPageTitle(pageTitle) {
		return this.getPageTitle().then((title) => title === pageTitle);
	}
}

module.exports = BasePage;