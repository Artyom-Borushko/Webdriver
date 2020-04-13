
class Header {
	constructor() {
		this.headerLinks = element.all(by.css('.r_o_e r_o_g'));
		this.logo = element(by.css("a[data-automation='SiteHeader_Logo_link']"));
	}
}

module.exports = Header;