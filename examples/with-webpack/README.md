# 💧 Ink - Webpack Example

Boilerplate using Webpack and Ink as a frontend framework.

## Integration Example

```js
// webpack.config.js
module.exports = {
  entry: './src/app.ink',
  output: { filename: 'app.js' },
  module: {
    rules: [
      {
        test: /\.ink$/,
        use: '@stackpress/ink-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: { extensions: ['.ink'] }
};
```