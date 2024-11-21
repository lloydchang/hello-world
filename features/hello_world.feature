Feature: Hello World

  Scenario: Display Hello World
    Given I am on the home page
    When I click the "Hello World" button
    Then I should see "Hello, World!"
