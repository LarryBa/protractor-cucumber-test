var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;


var VirginSteps = function() {

  var VirginPage = require("../pages/virgin_page.js");

  this.World = function MyWorld() {
    this.page = new VirginPage();
  };

  this.Given('I am on virgin holidays homepage', function (callback) {
    this.page.get();
    callback();
  }); 

  this.When('I select Dallas Texas USA in Destination dropdown list', function (callback) {
    this.page.setDestinationValue();
    callback();
  });


  this.When('I select London in Flying From dropdown list', function (callback) {
    this.page.setFlyFromValue();
    callback();
  });
 
  this.When('I click Find Holidays button', function (callback) {
    this.page.clickFindHolidays();
    callback();
  });

  this.Then('I should see $result', function (result, callback) {
    expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
    browser.takeScreenshot().then(function (png) {
      writeScreenshot(png, 'exception.png');
    });
  });
};

module.exports = VirginSteps;