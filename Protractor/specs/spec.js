/* eslint-disable no-undef */
const EC = protractor.ExpectedConditions;


describe('Protractor Demo App', () => {
	it('should have a title', () => {
		browser.driver.get('https://video.blender.org/videos/trending?sort=-trending&page=1');
		expect(browser.getTitle()).toEqual('Trending videos - PeerTube');
	});

	it('should have an overview title', () => {
		element(by.xpath("//a[@href='/videos/overview']")).click();
		expect(browser.getTitle()).toEqual('Videos overview - video.blender.org');
	});

	it('check search options', () => {
		const menu = element(by.id('search-video'));
		browser.driver.wait(EC.visibilityOf(menu), 5000, 'Time has expired');
		menu.sendKeys('blender');
		element(by.xpath("//span[@class='icon icon-search']")).click();
		expect(browser.getTitle()).toEqual('Search blender - video.blender.org');
	});

	it('check dark mode', () => {
		element(by.xpath("//span[@class='icon icon-moonsun']")).click();
		expect(element(by.id('custom-css')).getCssValue('background-color')).toBe('rgba(255, 255, 255, 1)');
	});

	it('check if filter button is visible', () => {
		const filterButton = element(by.xpath("//div[@class='results-filter-button ml-auto']")).click();
		browser.wait(EC.visibilityOf(filterButton), 5000, 'Time has expired');
		expect(filterButton.isDisplayed()).toBe(true);
	});

	it('check if sort button is clickable', () => {
		const categoryMenu = element(by.xpath("//div[@class='peertube-select-container']"));
		expect(browser.wait(EC.elementToBeClickable(categoryMenu), 5000, 'Time has expired')).toBe(true);
	});

	it('check if the default sort parameter "Relevance" is selected', () => {
		const relevanceSortParameter = element(by.id('-match'));
		expect(relevanceSortParameter.isSelected()).toBe(true);
	});

	it('switch to nasdaq home page', () => {
		browser.ignoreSynchronization = true;
		browser.get('https://www.nasdaq.com/');
		browser.wait(EC.titleContains('Daily Stock Market Overview'), 5000, 'Time has expired');
		expect(browser.getTitle()).toEqual('Daily Stock Market Overview, Data Updates, Reports & News | Nasdaq');
	});
});
