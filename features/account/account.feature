Feature: User account dashboard

Background: 
    Given The user is in the account page

    @smoke @sanity @happy-path
    Scenario: User wants to check his Favorite
        When The user clicks Favorite CTA
        Then User is redirected to "/account/favorites"

    @smoke @sanity @happy-path
    Scenario: User wants to check his Profile
        When The user clicks Profile CTA
        Then User is redirected to "/account/profile"

    @smoke @sanity @happy-path
    Scenario: User wants to check his Invoices
        When The user clicks Invoices CTA
        Then User is redirected to "/account/invoices"

    @smoke @sanity @happy-path
    Scenario: User wants to check his Messages
        When The user clicks Messages CTA
        Then User is redirected to "/account/messages"