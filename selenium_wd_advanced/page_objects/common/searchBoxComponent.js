class SearchBox {
	constructor() {
		this.searchBox = element(by.css('input[data-automation="Searchbar_searchInput_input"]'));
	}
}

module.exports = SearchBox;