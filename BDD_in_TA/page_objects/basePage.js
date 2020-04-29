/* eslint-disable protractor/no-shadowing */
const Footer = require('./common/footerComponent');
const Header = require('./common/headerComponent');
const SearchBox = require('./common/searchBoxComponent');

const waitForElement = require('../utils/waitFunction');

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

	async scrollToElement(element) {
		await browser.executeScript('arguments[0].scrollIntoView(true);', element);
	}

	async open() {
		browser.get(`https://www.shutterstock.com/en/${this.url}`);
		return waitForElement(this.header.logo, 'visible');
	}

	getPageTitle() {
		return browser.getTitle();
	}

	checkPageTitle(pageTitle) {
		return this.getPageTitle().then((title) => title === pageTitle);
	}
}

module.exports = BasePage;