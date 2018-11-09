var env = require('./environment.js');

// The main suite of Protractor tests to be run on CI servers.
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  SELENIUM_PROMISE_MANAGER: false,

  framework: 'jasmine',

  // Spec patterns are relative to this directory.
  // TODO(selenium4): revert back to basic/*_spec.js
  specs: [
    'basic/lib_spec.js',
    'basic/locators_spec.js'
    // 'basic/elements_spec.js',
    // 'basic/expected_conditions_spec.js',
    // 'basic/handling_spec.js'
    // 'basic/mockmodule_spec.js',
    // 'basic/navigation_spec.js',
    // 'basic/polling_spec.js',
    // 'basic/restart_spec.js',
  ],

  // Exclude patterns are relative to this directory.
  exclude: [
    'basic/exclude*.js'
  ],

  multiCapabilities: [{
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Protractor suite tests',
    'version': '54',
    'selenium-version': '2.53.1',
    'chromedriver-version': '2.26',
    'platform': 'OS X 10.11'
  }, {
    'browserName': 'firefox',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Protractor suite tests',
    'version': '47',
  }],

  baseUrl: env.baseUrl + '/ng1/',

  allScriptsTimeout: 120000,
  getPageTimeout: 120000,

  jasmineNodeOpts: {
    showTiming: true,
    defaultTimeoutInterval: 120000
  },

  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  }
};
