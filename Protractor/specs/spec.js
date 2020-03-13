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
    element(by.id("search-video")).sendKeys("blender");
    browser.explore();
    // browser.driver.findElement(by.xpath("//button[contains(text()=' Filters ')]")).click();
//    browser.driver.findElement()
    // element(by.xpath("//label[@class='radio']")).click();
  });
});

// class panel-block
