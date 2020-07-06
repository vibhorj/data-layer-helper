const BROWSERS_TO_TEST = ['Chrome'];

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      // closure library
      {pattern: 'node_modules/google-closure-library/closure/goog/base.js'},
      // source files
      // dependencies must be listed before the file they are used in for
      // the googmodule preprocessor to function properly
      {pattern: 'src/**/is_plain_object.js'},
      {pattern: 'src/**/helper.js'},
      // jquery
      {pattern: 'test/lib/jquery*'},
      // tests
      {pattern: 'test/*_test.js'},
    ],
    preprocessors: {'**/*.js': ['googmodule']},
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-googmodule-preprocessor'),
    ],
    reporters: ['spec', 'kjhtml'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: BROWSERS_TO_TEST,
    client: {
      clearContext: false,
    },
    singleRun: false,
    concurrency: Infinity,
  });
};
