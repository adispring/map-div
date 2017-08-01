/* eslint no-console: 0 */
// http://jamesknelson.com/webpack-made-simple-build-es6-less-with-autorefresh-in-26-lines/

const R = require('ramda');
const path = require('path');
const config = require('./config');
const libify = require.resolve('webpack-libify');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const commonPart = {
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
  },
};

const productionPart = {
  entry: {
    createMap: ['babel-polyfill', require.resolve('./src/map/createMap')],
  },
  module: {
    postLoaders: [
      {
        loader: libify,
      },
    ],
  },
};

const developPart = {
  entry: {
    index: ['babel-polyfill', require.resolve('./src/examples/index')],
  },
  plugins: [
    new HtmlwebpackPlugin(),
  ],
  watch: true,
};

const finalConfig = R.compose(
  R.mergeDeepRight(commonPart),
  R.ifElse(R.equals('production'), R.always(productionPart), R.always(developPart))
)(process.env.NODE_ENV);

module.exports = finalConfig;

if (require.main === module) {
  console.info(module.exports);
}
