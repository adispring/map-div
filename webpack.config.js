/* eslint no-console: 0 */
// http://jamesknelson.com/webpack-made-simple-build-es6-less-with-autorefresh-in-26-lines/

const path = require('path');
const config = require('./config');
const libify = require.resolve('webpack-libify');
// const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
//    index: ['babel-polyfill', require.resolve('./src/examples/index')],
    createMap: ['babel-polyfill', require.resolve('./src/map/createMap')],
  },
  output: {
    path: config.outputdir,
    publicPath: config.publicPath,
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(config.basedir, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: [
            'transform-runtime',
            'transform-async-to-generator',
          ],
        },
      },
    ],
    postLoaders: [
      {
        loader: libify,
      },
    ],
  },
//  plugins: [
//    new HtmlwebpackPlugin(),
//  ],
  watch: true,
};

if (require.main === module) {
  console.info(module.exports);
}
