const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'), // Replaces `contentBase`
    },
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }, plugins: [new MiniCssExtractPlugin({
    filename: 'index.css'
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html'
  })
  ]
}
