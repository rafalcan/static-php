const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const frontend = __dirname + `/../`;
const common = {
  context: path.join(frontend, 'src'),
  entry: {
    main: [`../src/index.js`]
  },
  output: {
    path: path.join(frontend, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attrs: [':data-src'],
          minimize: (env === 'staging' || env === 'production')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: frontend
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

module.exports = common;
