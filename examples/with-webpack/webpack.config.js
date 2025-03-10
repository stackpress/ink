const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/client.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ink$/,
        use: {
          loader: '@stackpress/ink-loader',
          options: { minify: false }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.ink'],
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ink',
      template: "index.html",
    })
  ]
};
