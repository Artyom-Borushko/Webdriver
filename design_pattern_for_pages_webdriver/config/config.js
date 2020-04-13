exports.config = {

	directConnect: true,

	framework: 'jasmine',

	specs: [
		'../Spec/*.js',
	],

	capabilities: {
		browserName: 'chrome',
	},

	baseUrl: 'localhost',

	onPrepare: () => {
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
	},
};