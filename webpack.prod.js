const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  entry: {
    vendor: ['react', 'react-dom', '@material-ui/core', '@material-ui/icons', 'redux', 'react-redux', 'redux-saga',
      'redux-saga-effects', 'axios'],
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
        },
      },
    },
    runtimeChunk: true,
  },
});
