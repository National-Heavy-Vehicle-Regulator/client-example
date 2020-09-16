/* eslint-disable @typescript-eslint/no-var-requires */
const R = require('ramda');
const webpackConfig = require('./webpack.config');
const path = require('path');


module.exports = R.merge(
  webpackConfig,
  {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      disableHostCheck: true,
      hot: true,
      open: true,
    }
  }
);
