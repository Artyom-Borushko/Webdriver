const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 5000;

describe("Protractor Demo App", () => {
  it("should have a title", () => {
    browser.driver.get(
      "https://video.blender.org/videos/trending?sort=-trending&page=1"
    );
    expect(browser.getTitle()).toEqual("Trending videos - PeerTube");
  });

  it("should have an overview title", () => {
    element(by.xpath("//a[@href='/videos/overview']")).click();
    expect(browser.getTitle()).toEqual("Videos overview - video.blender.org");
  });

  it("check search options", () => {
    browser.sleep(1000);
    element(by.id("search-video")).sendKeys("blender");
    browser.explore();
    element(by.xpath("//span[@class='icon icon-search']")).click();
  });

  it("check dark mode", () => {
    element(by.xpath("//span[@class='icon icon-moonsun']")).click();
    expect(element(by.id("custom-css")).getCssValue("background-color")).toBe(
      "rgba(255, 255, 255, 1)"
    );
  });

  it("check if filter button is visible", () => {
    let filterButton = element(
      by.xpath("//div[@class='results-filter-button ml-auto']")
    ).click();
    browser.wait(EC.visibilityOf(filterButton), DEFAULT_TIMEOUT_IN_MS);
    expect(filterButton.isDisplayed()).toBe(true);
  });

  it("check if sort button is clickable", () => {
    let categoryMenu = element(
      by.xpath("//div[@class='peertube-select-container']")
    );
    expect(
      browser.wait(EC.elementToBeClickable(categoryMenu), DEFAULT_TIMEOUT_IN_MS)
    ).toBe(true);
  });

  it('check if the default sort parameter "Relevance" is selected', () => {
    let relevanceSortParameter = element(by.id("-match"));
    expect(relevanceSortParameter.isSelected()).toBe(true);
  });

  it("switch to nasdaq home page", () => {
    browser.driver.get("https://www.nasdaq.com/");
    browser.driver.wait(
      EC.titleContains("Daily Stock Market Overview"),
      DEFAULT_TIMEOUT_IN_MS
    );
  });
});
