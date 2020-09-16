/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.tsx'],
  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/',
    ecmaVersion: 5,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: ['boot.js'],
      }),
    ],
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app'),
      common: path.resolve(__dirname, 'src/common'),
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      utils: path.resolve(__dirname, 'src/utils'),
      typeDefs: path.resolve(__dirname, 'src/typeDefs'),
      assets: path.resolve(__dirname, 'assets/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      exclude: ['boot.js'],
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/boot.js', to: './' },
        { from: './public/noscript.html', to: './' },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Client Example',
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};
