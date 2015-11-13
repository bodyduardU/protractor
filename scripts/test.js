#!/usr/bin/env node

var Executor = require('./test/test_util').Executor;

var passingTests = [
  'node lib/cli.js spec/basicConf.js',
  'node lib/cli.js spec/multiConf.js',
  'node lib/cli.js spec/altRootConf.js',
  'node lib/cli.js spec/onCleanUpAsyncReturnValueConf.js',
  'node lib/cli.js spec/onCleanUpNoReturnValueConf.js',
  'node lib/cli.js spec/onCleanUpSyncReturnValueConf.js',
  'node lib/cli.js spec/onPrepareConf.js',
  'node lib/cli.js spec/onPrepareFileConf.js',
  'node lib/cli.js spec/onPreparePromiseConf.js',
  'node lib/cli.js spec/onPreparePromiseFileConf.js',
  'node lib/cli.js spec/mochaConf.js',
  'node lib/cli.js spec/withLoginConf.js',
  'node lib/cli.js spec/suitesConf.js --suite okmany',
  'node lib/cli.js spec/suitesConf.js --suite okspec',
  'node lib/cli.js spec/suitesConf.js --suite okmany,okspec',
  'node lib/cli.js spec/plugins/smokeConf.js',
  'node lib/cli.js spec/plugins/multiPluginConf.js',
  'node lib/cli.js spec/plugins/jasminePostTestConf.js',
  'node lib/cli.js spec/plugins/mochaPostTestConf.js',
  'node lib/cli.js spec/plugins/browserGetSyncedConf.js',
  'node lib/cli.js spec/plugins/browserGetUnsyncedConf.js',
  'node lib/cli.js spec/plugins/waitForAngularConf.js',
  'node lib/cli.js spec/interactionConf.js',
  'node lib/cli.js spec/directConnectConf.js',
  'node lib/cli.js spec/restartBrowserBetweenTestsConf.js',
  'node lib/cli.js spec/getCapabilitiesConf.js',
  'node lib/cli.js spec/controlLockConf.js',
  'node lib/cli.js spec/customFramework.js',
  'node scripts/interactive_tests/interactive_test.js',
  'node scripts/interactive_tests/with_base_url.js',
  // Unit tests
  'node node_modules/.bin/jasmine JASMINE_CONFIG_PATH=scripts/unit_test.json',
];

var executor = new Executor();

passingTests.forEach(function(passing_test) {
  executor.addCommandlineTest(passing_test)
      .assertExitCodeOnly();
});

/*************************
 *Below are failure tests*
 *************************/

// assert stacktrace shows line of failure
executor.addCommandlineTest('node lib/cli.js spec/errorTest/singleFailureConf.js')
    .expectExitCode(1)
    .expectErrors({
      stackTrace: 'single_failure_spec1.js:5:32'
    });

// assert timeout works
executor.addCommandlineTest('node lib/cli.js spec/errorTest/timeoutConf.js')
    .expectExitCode(1)
    .expectErrors({
      message: 'Timeout - Async callback was not invoked within timeout ' +
          'specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.'
    })
    .expectTestDuration(0, 100);

executor.addCommandlineTest('node lib/cli.js spec/errorTest/afterLaunchChangesExitCodeConf.js')
    .expectExitCode(11)
    .expectErrors({
      message: 'Expected \'Hiya\' to equal \'INTENTIONALLY INCORRECT\'.'
    });

executor.addCommandlineTest('node lib/cli.js spec/errorTest/multiFailureConf.js')
    .expectExitCode(1)
    .expectErrors([{
      message: 'Expected \'Hiya\' to equal \'INTENTIONALLY INCORRECT\'.',
      stacktrace: 'single_failure_spec1.js:5:32'
    }, {
      message: 'Expected \'Hiya\' to equal \'INTENTIONALLY INCORRECT\'.',
      stacktrace: 'single_failure_spec2.js:5:32'
    }]);

executor.addCommandlineTest('node lib/cli.js spec/errorTest/shardedFailureConf.js')
    .expectExitCode(1)
    .expectErrors([{
      message: 'Expected \'Hiya\' to equal \'INTENTIONALLY INCORRECT\'.',
      stacktrace: 'single_failure_spec1.js:5:32'
    }, {
      message: 'Expected \'Hiya\' to equal \'INTENTIONALLY INCORRECT\'.',
      stacktrace: 'single_failure_spec2.js:5:32'
    }]);

executor.addCommandlineTest('node lib/cli.js spec/errorTest/mochaFailureConf.js')
    .expectExitCode(1)
    .expectErrors([{
      message: 'expected \'My AngularJS App\' to equal \'INTENTIONALLY INCORRECT\'',
      stacktrace: 'mocha_failure_spec.js:11:20'
    }]);

executor.addCommandlineTest('node lib/cli.js spec/errorTest/pluginsFailingConf.js')
    .expectExitCode(1)
    .expectErrors([
      {message: 'Expected true to be false'},
      {message: 'from setup'},
      {message: 'from postTest passing'},
      {message: 'from postTest failing'},
      {message: 'from teardown'}
    ]);

executor.addCommandlineTest('node lib/cli.js spec/errorTest/slowHttpAndTimeoutConf.js')
    .expectExitCode(1)
    .expectErrors([
      {message: 'The following tasks were pending[\\s\\S]*\\$http: \/slowcall'},
      {message: 'The following tasks were pending[\\s\\S]*' +
                '\\$timeout: function \\(\\) {[\\s\\S]*' +
                  '\\$scope\\.slowAngularTimeoutStatus = \'done\';[\\s\\S]' +
                '*}'}
    ]);

executor.addCommandlineTest('node lib/cli.js spec/errorTest/slowHttpAndTimeoutConf.js ' +
                            '--untrackOutstandingTimeouts true')
    .expectExitCode(1)
    .expectErrors([
      {message: 'The following tasks were pending[\\s\\S]*\\$http: \/slowcall'},
      {message: '^((?!The following tasks were pending).)*$'}
    ]);

executor.execute();
