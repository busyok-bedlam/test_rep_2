const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextWebpackPlugin('[name].css');
const config = {
  mode: 'development',
  entry: path.resolve(__dirname,'src','main.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.scss$/i,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "user`s posts`",
      template: path.resolve(__dirname,'src','template.ejs')
    }),
    new ExtractTextWebpackPlugin("style.css")
  ],
  devtool: 'source-map'
}

module.exports = config;
