const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build.[contenthash].js'),
    clean: true,
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore:['**/index.html'],
          },
        },
      ],
    }),
    new HtmlPlugin({
      template:'public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
};
