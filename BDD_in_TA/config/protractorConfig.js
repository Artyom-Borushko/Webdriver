const path = require('path');

const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');
const logger = require('./loggerConfig').logger;


const reporterOptions = {
	theme: 'bootstrap',
	jsonFile: path.join(__dirname, '../../reports/report.json'),
	output: path.join(__dirname, '../../reports/cucumber_report.html'),
	reportSuiteAsScenarios: true,
	launchReport: true,
};

exports.config = {
	allScriptsTimeout: 60000,
	getPageTimeout: 60000,
	specs: [path.resolve('./BDD_in_TA/features/**/*.feature')],
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),

	capabilities: {
		browserName: yargs.browser || 'chrome',
		shardTestFiles: yargs.instances > 1,
		maxInstances: yargs.instances || 1,
		chromeOptions: {
			args: ['--no-sandbox'],
		},
	},

	disableChecks: true,
	seleniumAddress: 'http://localhost:4444/wd/hub',

	cucumberOpts: {
		require: [path.resolve('./BDD_in_TA/step_definitions/**/*.js')],
		ignoreUncaughtExceptions: true,
		format: ['json:./reports/report.json', './node_modules/cucumber-pretty'],
		tags: yargs.tag || '',
	},

	onPrepare: () => {
		logger.info('Maximizing browser window');
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
	},
	afterLaunch: () => {
		reporter.generate(reporterOptions);
	},
};