// webpack.config.js

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: './client.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'client.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    // ...
    new webpack.NormalModuleReplacementPlugin(
      /Bundles.js/,
      './AsyncBundles.js'
    ),
  ]
};

const serverConfig = {
  entry: './server.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: [nodeExternals()],
  // Server build configuration
};

module.exports = [
  clientConfig,
  serverConfig
];
