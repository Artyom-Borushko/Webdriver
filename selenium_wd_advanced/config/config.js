exports.config = {

	directConnect: true,

	framework: 'jasmine',

	specs: [
		'../spec/*.js',
	],

	capabilities: {
		browserName: 'chrome',
	},

	seleniumAddress: 'http://localhost:4444/wd/hub',

	onPrepare: () => {
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
	},
};