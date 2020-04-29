class SearchBox {
	constructor() {
		this.searchBox = element(by.css('input[data-automation="Searchbar_searchInput_input"]'));
	}

	search(searchQuery) {
		this.searchBox
			.sendKeys(searchQuery)
			.sendKeys(protractor.Key.ENTER);
	}
}

module.exports = SearchBox;