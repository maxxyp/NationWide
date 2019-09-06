var myStepDefinitionsWrapper = function () {

  this.Given(/^What type of mortgage are you looking for I select “I’m changing lender”$/, function (callback) {
    callback.pending();
  });

  this.Given(/^I open the url "https:\/\/www\.nationwide\.co\.uk"$/, function (arg1, callback) {
    callback.pending();
  });

  this.Given(/^I click on Mortgages$/, function (callback) {
    callback.pending();
  });

  this.Given(/^I click on New First time buyers$/, function (callback) {
    callback.pending();
  });

  this.Given(/^I click on our Mortgage Rates$/, function (callback) {
    callback.pending();
  });

  this.Given(/^Do you have a Nationwide mortgage	I select “No”$/, function (callback) {
    callback.pending();
  });

  this.Given(/^I enter property value “300000”$/, function (callback) {
    callback.pending();
  });

  this.Given(/^I enter deposit amount “150,000”$/, function (callback) {
    callback.pending();
  });

  this.Given(/^I enter term “30”$/, function (callback) {
    callback.pending();
  });

  this.When(/^I click Find a mortgage rate button$/, function (callback) {
    callback.pending();
  });

  this.Then(/^I see Mortgage type “Fixed rate” “Tracker rate”$/, function (callback) {
    callback.pending();
  });

  this.Then(/^I see Product fee “With fee” “Without fee”$/, function (callback) {
    callback.pending();
  });

  this.Then(/^I verify the results "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" details$/, function (arg1, arg2, arg3, arg4, arg5, callback) {
    callback.pending();
  });
};
module.exports = myStepDefinitionsWrapper;
