const { afterEach } = require('jasmine');

afterEach((testCase) => {
	if (testCase.result.status === 'failed') {
		return browser.takeScreenshot().then((screenShot) => {
			const decodedImage = Buffer.from(screenShot, 'base64');
			return this.attach(decodedImage, 'image/png');
		});
	}
	return console.log('Test case pass without errors');
});