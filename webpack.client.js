const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new LoadablePlugin(),
  ],
}; 