Feature: Search for different photo categories

    @outline
    Scenario Outline: Search different photo in <Category> category
        Given I open "Home" page
        When I put "<Category>" to the search box and press enter
        And I wait while page is loaded and contain defined "Title"
        Then Page with defined photo category should appear with "<Page url>"

        Examples:
        | Category   | Page url                                       |
        | people     | https://www.shutterstock.com/search/people     |
        | technology | https://www.shutterstock.com/search/technology |
        | food       | https://www.shutterstock.com/search/food       |