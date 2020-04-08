const {
	Builder, By, Key, until,
} = require('selenium-webdriver');
const createRandom = require('./create-random');

(async function githubAutomation() {
	const driver = await new Builder().forBrowser('chrome').build();
	try {
		await driver.manage().window().maximize();
		await driver.get('https://github.com/');

		await driver.findElement(By.name('q')).sendKeys('Artyom Borushko', Key.RETURN);

		await (
			await driver.findElement(
				By.xpath("//a[@href='/search?q=Artyom+Borushko&type=Users']"),
			)
		).click();

		await driver.wait(until.elementLocated(By.xpath("//a[@class='text-gray']"), 1000)).click();

		await driver.wait(until.elementLocated(By.xpath("//div[@class='position-relative']/child::a[text()='Sign up']"),	5000)).click();

		await driver.findElement(By.id('user_login')).sendKeys(`${createRandom.createRandom()}myName`);

		await driver.findElement(By.xpath("//input[@name='user[email]']")).sendKeys('myemailforgithubautomation@gmail.com');

		const getPasswordStatus = await driver.findElement(By.id('user_password')).isEnabled();
		if (getPasswordStatus === true) {
			await driver.findElement(By.id('user_password')).sendKeys('veryh12ardpdaDASkldsassword');
		}

		await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');

		await (await driver.findElement(By.className('btn-mktg signup-btn  js-octocaptcha-form-submit width-full'))).click();
		await driver.wait(until.titleIs('Join GitHub · GitHub'), 5000);

		const registrationPage = await driver.getWindowHandle();

		await driver.switchTo().newWindow();

		await driver.get('https://www.google.com/');
		await driver.findElement(By.name('q')).sendKeys('stack overflow', Key.RETURN);

		await driver.navigate().to('https://stackoverflow.com/');
		await driver.navigate().back();

		await driver.wait(until.titleIs('stack overflow - Google Search'), 5000);

		await driver.switchTo().window(registrationPage);
	} finally {
		await driver.quit();
	}
}());
