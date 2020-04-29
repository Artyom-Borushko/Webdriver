const { After, Status } = require('cucumber');

const { setDefaultTimeout } = require('cucumber');
const logger = require('../config/loggerConfig');

setDefaultTimeout(60 * 1000);

After((testCase) => {
	if (testCase.result.status === Status.FAILED) {
		return browser.takeScreenshot().then((screenShot) => {
			const decodedImage = Buffer.from(screenShot, 'base64');
			return this.attach(decodedImage, 'image/png');
		});
	}
	return logger.info('Test pass without errors');
});