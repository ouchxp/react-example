const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const resolve = p => path.resolve(ROOT_PATH, p);
const BUNDLE_NAME = 'react-example-bundle';
const PORT = 3001;

module.exports = () => ({
  mode: 'development',
  context: resolve('src'),
  entry: ['babel-polyfill', './index.js'],
  devServer: {
    stats: 'minimal',
    hot: true,
    publicPath: '/',
    port: PORT,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    proxy: {
      '/greetings/*': {
        target: 'http://localhost:9001',
        secure: false,
      },
    },
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
    path: resolve('build/backend'),
    filename: `${BUNDLE_NAME}.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/fonts/[name].[hash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [resolve('src'), resolve('public'), resolve('node_modules')],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
      inject: false,
    }),
  ],
});
