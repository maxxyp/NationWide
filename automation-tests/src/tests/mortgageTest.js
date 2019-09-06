var Mortgage_Page = require("./pages/Mortgage_Page.js");

beforeEach(function () {
  browser.setViewportSize({
    width: 1200,
    height: 800
  })
    browser.url('/');
});

describe("Nationwide Mortgage Rates", function() {

  it("It should get homepage title", function(done) {
    var title = browser.getTitle();
    expect(title).to.equal('Nationwide Building Society | building society, nationwide');
    console.log('Title is: ' + title);
  });


    it("Evaluating Mortgate rate for first time buyers", function(done) {
        Mortgage_Page.clickMortgageButton();
        Mortgage_Page.clickFirstTimeBuyersButton();
        Mortgage_Page.clickMortgageRatesButton();
        //Mortgage_Page.clickNationWideMortgageNoButton();  //This is already selected by default
        this.timeout(50000);
        Mortgage_Page.setPropertyValue('£300,000');
        Mortgage_Page.setDepositAmount('£150,000');
        this.timeout(50000);  //This will be replaced by wait for element to be visible
        Mortgage_Page.setTerm('30');
        this.timeout(50000);  //This will be replaced by wait for element to be visible
        Mortgage_Page.clickFindMortgageRatesButton();

        //This verifies 2 years fixed rate
        var Fixed2YearmonthlyPayment = '#NewMortgageRateTables > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > div.keyData > strong';
        browser.waitForVisible(Fixed2YearmonthlyPayment, 8000, false);
        var monthlyPayment2years = browser.getText(Fixed2YearmonthlyPayment);
        console.log('2 years fixed is ' + monthlyPayment2years);
        expect(monthlyPayment2years).to.equal('£516.96');

        //This verifies 2 years initial rate
        var Fixed2YearInitiaRate = '#NewMortgageRateTables > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td.initialRateCell > div.keyData > strong';
        browser.waitForVisible(Fixed2YearInitiaRate, 8000, false);
        var rate2yrs = browser.getText(Fixed2YearInitiaRate);
        console.log('2 years fixed is ' + rate2yrs);
        expect(rate2yrs).to.equal('1.49%');

        //This verifies 2 years Product Fee
        var Fixed2YearProductFee = '#NewMortgageRateTables > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > div.keyData';
        browser.waitForVisible(Fixed2YearProductFee, 8000, false);
        var productFee2yrs = browser.getText(Fixed2YearProductFee);
        console.log('2 years fixed is ' + productFee2yrs);
        expect(productFee2yrs).to.equal('£999');

        //This verifies 2 Overall Cost For Comparison
        var OverallCostForComparison = '#NewMortgageRateTables > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div.keyData > strong';
        browser.waitForVisible(OverallCostForComparison, 8000, false);
        var overallCostComparison = browser.getText(OverallCostForComparison);
        console.log('2 years fixed is ' + overallCostComparison);
        expect(overallCostComparison).to.equal('3.9% APRC');

        //This verifies 2 Overall Cost For Comparison
        var TotalPaidOver2Years = '#NewMortgageRateTables > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td.penultimate > div.keyData';
        browser.waitForVisible(TotalPaidOver2Years, 8000, false);
        var totalPaidOver2years = browser.getText(TotalPaidOver2Years);
        console.log('2 years fixed is ' + totalPaidOver2years);
        expect(totalPaidOver2years).to.equal('£12,407.04');


    });


});
