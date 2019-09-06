Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  @mortgage
  Scenario Outline: Find mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    And I click on Mortgages
    And I click on New First time buyers
    And I click on our Mortgage Rates
    And Do you have a Nationwide mortgage	I select “No”
    And What type of mortgage are you looking for I select “I’m changing lender”
    And I enter property value “300000”
    And I enter deposit amount “150,000”
    And I enter term “30”
    When I click Find a mortgage rate button
    Then I see Mortgage type “Fixed rate” “Tracker rate”
    And I see Product fee “With fee” “Without fee”
    And I verify the results "fixed_monthly", "Initial_rate", "product_fee", "overall_cost", "total_paid" details

    Examples:
      |fixed_monthly |monthly_payment |Initial_rate |product_fee |overall_cost |total_paid |
      |2             |£524.18         |1.59%        |£999        |3.8% APRC    |£12,580.32 |
      |3             |£535.13         |1.74%        |£999        |3.6% APRC    |£19,264.68 |
      |5             |£542.50         |1.84%        |£999        |3.3% APRC    |32,550.00  |

