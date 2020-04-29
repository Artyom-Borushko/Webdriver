const { After, Status } = require('cucumber');

const { setDefaultTimeout } = require('cucumber');

setDefaultTimeout(60 * 1000);

After((testCase) => {
	if (testCase.result.status === Status.FAILED) {
		return browser.takeScreenshot().then((screenShot) => {
			const decodedImage = Buffer.from(screenShot, 'base64');
			return this.attach(decodedImage, 'image/png');
		});
	}
	return console.log('Test case pass without errors');
});