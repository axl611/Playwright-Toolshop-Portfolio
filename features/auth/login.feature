Feature: User Authentication

    @smoke @sanity @happy-path
    Scenario: User tries to login with valid credentials
        Given The user is in the login page
        When They input valid credentials
        Then User is logged and redirected to the dashboard

    @smoke @sanity @negative
    Scenario: User tries to login with empty fields
        Given The user is in the login page
        When They dont input any credentials
        Then The system displays an error message

    @smoke @sanity @negative
    Scenario: User tries to login with invalid credentials
        Given The user is in the login page
        When They input invalid credentials
        Then The system displays an error message