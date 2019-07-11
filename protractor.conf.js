exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),


  specs: [
    'features/virgin.feature'
  ],

  
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'


  }



  
}


