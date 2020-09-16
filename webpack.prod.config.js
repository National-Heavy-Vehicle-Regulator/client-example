/* eslint-disable @typescript-eslint/no-var-requires */
const R = require('ramda');
const webpackConfig = require('./webpack.config');

module.exports = R.merge(
  webpackConfig,
  {
    mode: 'production'
  }
);
