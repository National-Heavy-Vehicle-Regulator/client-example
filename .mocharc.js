module.exports = {
    spec: 'src/**/*.test.ts',
    recursive: true,
    require: ['ts-node/register', 'source-map-support/register'],
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: './coverage/test-results.xml',
    },
  };
  