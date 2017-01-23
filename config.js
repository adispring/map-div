if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}
const basedir = __dirname;
const outputdir = `${__dirname}/dist`;
const rootdir = '/';
const publicPath = '';

module.exports = {
  basedir,
  outputdir,
  rootdir,
  publicPath,
};

if (require.main === module) {
  console.log(module.exports);
}
