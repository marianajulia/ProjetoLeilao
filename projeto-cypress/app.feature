Feature: Test automated bids

  Scenario: Bid lower than the minimum
    Given the user is on the bids page
    When the user enters a value of 500 in the input field
    And the user clicks the bid button
    Then an alert message "The minimum bid is R$1000" should be displayed

  Scenario: Bid equal to or higher than the minimum
    Given the user is on the bids page
    When the user enters a value of 1500 in the input field
    And the user clicks the bid button
    Then an alert message "Bid submitted successfully!" should be displayed
