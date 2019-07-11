
var VirginPage = function() {

    this.get = function() {
      browser.get('https://virginholidays.co.uk');
    };
  
    this.setDestinationValue = function() {
      element(by.css('#holiday-typeahead-typeahead')).clear();
      element(by.css('#holiday-typeahead-typeahead')).sendKeys('Dall');
      element(by.css('#-typeahead-option-0')).click();
    };
  
    this.setFlyFromValue = function() {
      element(by.css('#holiday-gatways')).sendKeys();
    };

    this.clickFindHolidays = function() {
        element(by.buttonText("Find Holidays")).click();
        browser.pause();
      };
  
    this.getResult = function(result) {
    //  return element(by.xpath('//section/div/h1')).getText();
      //element(by.xpath('//section/div/h1')).getText().then(function(result))
      //console.log(result);
      var result = "Sorry, there is no availability for the dates you have selected.";
      expext().toEqual(result);
    }
  
   
  };
  
  module.exports = VirginPage;