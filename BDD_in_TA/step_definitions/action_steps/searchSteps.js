const { When } = require('cucumber');
const PageFactory = require('../../utils/pageFactory');
const logger = require('../../config/loggerConfig').logger;


When(/^I put "([^"]*)" to the search box and press enter$/, async (textForSearch) => {
	logger.info(`I put ${textForSearch} to the search line`);
	const page = await PageFactory.getPage('Home');
	await page.searchBox.search(textForSearch);
});

When(/^I wait while page is loaded and contain defined "([^"]*)"$/, async (title) => {
	logger.info(`Wait for the title like ${title}`);
	const page = await PageFactory.getPage('ParticularSearch');
	await page.waitForParticularSearchPageLoad();
});
