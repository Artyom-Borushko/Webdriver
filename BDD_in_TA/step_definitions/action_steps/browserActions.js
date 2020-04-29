const { When } = require('cucumber');
const { setDefaultTimeout } = require('cucumber');
const PageFactory = require('../../utils/pageFactory');
const logger = require('../../config/loggerConfig').logger;

setDefaultTimeout(60 * 1000);

When(/^I open "([^"]*)" page$/, async (pageName) => {
	logger.info(`I open ${pageName} page`);
	await PageFactory.getPage(pageName).open();
});
