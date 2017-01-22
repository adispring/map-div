// http://jamesknelson.com/webpack-made-simple-build-es6-less-with-autorefresh-in-26-lines/

const path = require('path');
const config = require('./config');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    {
      index: require.resolve('./src/examples/index'),
      createMap: require.resolve('./src/map/createMap'),
    },
  ],
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
        },
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin(),
  ],
  watch: true,
};

if (require.main === module) {
  console.info(module.exports);
}
