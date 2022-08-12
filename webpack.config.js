const path = require('path');

const distDirectory = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/pages/index.ts'),
  output: {
    path: distDirectory,
    filename: 'main.js',
    publicPath: '',
  },
  devServer: {
    static: distDirectory,
    compress: true,
    port: 8080,
    open: true,
  },
};
