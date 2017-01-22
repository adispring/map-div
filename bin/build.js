/* eslint no-var:0, vars-on-top:0, func-names:0, no-console:0 */
if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}
const webpack = require('webpack');

const webpackConfig = require('../webpack.config');
const statsOptions = {
  colors: { level: 1, hasBasic: true, has256: false, has16m: false },
  cached: false,
  cachedAssets: false,
  modules: false,
  chunks: false,
  reasons: false,
  errorDetails: true,
  chunkOrigins: false,
  publicPath: true,
};

const onStats = (err, stats) => {
  if (err) {
    throw err;
  }
  console.info(stats.toString(statsOptions));
  if (stats.hasErrors()) {
    process.exit(1);
  }
};

webpack(webpackConfig[0]).run((err, stats) => {
  onStats(err, stats);
  webpack(webpackConfig[1]).run(onStats);
});
