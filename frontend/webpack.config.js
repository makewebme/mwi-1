const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, '../public')
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],

  mode: 'development',
  watch: true,
}
