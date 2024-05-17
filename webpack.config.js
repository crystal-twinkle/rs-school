const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

const baseConfig = {
  entry: path.resolve(__dirname, './src/ts/index'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/i,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['raw-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      writeToDisk: true,
    },
  },
  output: {
    filename: 'indexFull.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new EslintPlugin({extensions: ['ts']}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin({}),
  ],
};


module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode
      ? require('./webpack.prod.config')
      : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
