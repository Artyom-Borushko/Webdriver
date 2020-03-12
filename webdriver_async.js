const { Builder, By, Key, until } = require("selenium-webdriver");
const createRandom = require("./create-random");

(async function githubAutomation() {
  let driver = await new Builder().forBrowser("chrome").build();
  // try {

  await driver
    .manage()
    .window()
    .maximize();
  await driver.get("https://github.com/");

  await driver
    .findElement(By.name("q"))
    .sendKeys("Artyom Borushko", Key.RETURN);

  await (
    await driver.findElement(
      By.xpath("//a[@href='/search?q=Artyom+Borushko&type=Users']")
    )
  ).click();

  await driver
    .wait(until.elementLocated(By.xpath("//a[@class='text-gray']"), 1000))
    .click();

  let getTitle = await driver.getTitle();
  console.log(getTitle);

  await driver
    .wait(
      until.elementLocated(
        By.xpath("//div[@class='position-relative']/child::a[text()='Sign up']")
      ),
      1000
    )
    .click();

  await driver
    .findElement(By.id("user_login"))
    .sendKeys(createRandom.createRandom() + "myName");

  await driver.sleep(500);

  await driver
    .findElement(By.xpath("//input[@name='user[email]']"))
    .sendKeys("myemailforgithubautomation@gmail.com");

  await driver.sleep(500);

  await driver.findElement(By.id("user_password")).click();

  let getPasswordStatus = await driver
    .findElement(By.id("user_password"))
    .isEnabled();

  console.log(getPasswordStatus);
  if (getPasswordStatus === true) {
    await driver
      .findElement(By.id("user_password"))
      .sendKeys("veryh12ardpdaDASkldsassword");
  }

  await driver.sleep(1000);
  await driver.executeScript("window.scrollBy(0, 300)");

  await driver
    .findElement(
      By.className("btn-mktg signup-btn  js-octocaptcha-form-submit width-full")
    )
    .click();

  //span[text()=’Folder name’]
})();
//  finally {
//   await driver.quit();
// }
//}
