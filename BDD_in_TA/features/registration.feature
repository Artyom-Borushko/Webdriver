Feature: Registration on Shutterstock

    @registration
    Scenario: Should be able to create shutterstock account
        Given I open "Home" page
            Then Page title should be "Stock Images, Photos, Vectors, Video, and Music | Shutterstock"
        When I click on Sign up button
            Then I wait while Sign up form appears on the page
        When I enter "letmeenterpls30@gmail.com" email and "iwanttoenterpls" password and click continue button
            Then Page title should be "Stock Photos, Royalty-Free Images and Vectors - Shutterstock"