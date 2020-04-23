const logger = require('./loggerConfig').logger;

exports.config = {

	directConnect: true,
	ignoreUncaughtExceptions: true,
	framework: 'jasmine',
	allScriptsTimeout: 200000,
	getPageTimeout: 200000,
	specs: [
		'../spec/*.js',
	],

	capabilities: {
		browserName: 'chrome',
	},

	seleniumAddress: 'http://localhost:4444/wd/hub',

	onPrepare: () => {
		logger.info('Maximizing browser window');
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
	},
};