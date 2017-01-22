const path = require('path');
const config = require('./config');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: require.resolve('./src/examples/index'),
    createMap: require.resolve('./src/map/createMap'),
  },
  output: {
    path: config.outputdir,
    publicPath: config.publicPath,
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlwebpackPlugin(),
  ],
  watch: true,
};

if (require.main === module) {
  console.info(module.exports);
}
