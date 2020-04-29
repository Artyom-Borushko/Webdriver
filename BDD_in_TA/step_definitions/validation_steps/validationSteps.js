const { Then } = require('cucumber');
const expect = require('chai').expect;
const PageFactory = require('../../utils/pageFactory');
const logger = require('../../config/loggerConfig').logger;

Then(/^Page with defined photo category should appear with "([^"]*)"$/, async (url) => {
	logger.info('I check page url');
	await PageFactory.getPage('ParticularSearch');
	const pageUrl = await browser.getCurrentUrl();
	return expect(pageUrl).to.be.equal(url);
});