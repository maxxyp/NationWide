Webdriver.io + CucumberJS automation test
====================

Implement the Feature file "src/features/find-mortgage-rate.feature" according to the following:

- Navitage to https://nationwide.co.uk
- Using the Menu navigatge to "Mortgages" > "New mortgage customer: Mortgage rates"
- Find mortgage rate for the following case:
  - Nationwide mortgage = No
  - Type of mortgage = Changing lender
  - Property value = £300,000
  - Mortgage amount = £150,000
  - Term = 30 years
- Filter the results:
  - Mortgage type = Fixed
  - Product fee = With Fee
- Then check the results return the following products:
  - 2 yr Fixed
  - 3 yr Fixed
  - 5 yr Fixed
  - 10 yr Fixed
- Click "More info and apply" and "Apply" button for the "5 yr Fixed" product
- Verify the next page's heading is "Start your remortgage application"

## Download dependencies
Do `npm install

## Quick start
run `npm test`

## Generate Allure Reports
navigate to the root folder and type the command below 
allure generate /Users/xxxxx/Documents/Softwares/automation-test/reports/allure-results

You should get - "Report successfully generated to allure-report"

Then type - allure open

Reports should open in a browser

## Notes
Please Note, test runs using webdriverio mocha, I have exclude webdriverio cucumber in the wdio file.
Also note, that this framework can be improved by intoducing helper js file that will have functions to wait for elements to 
appear, exist, load etc.


## Notes
The project is setup with babel to support ES6 / ES2016.
Feel free to update and change the setup & configs as you require.
