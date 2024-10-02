# 💧 Ink Loader

This package is designed for [Ink](https://github.com/stackpress/ink),
the reactive web component template engine. See [docs](https://github.com/stackpress/ink)
for more information.

Webpack support for the Ink markup language.

## Install

```bash
$ npm -i @stackpress/ink-loader
```

## Usage

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
