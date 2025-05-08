const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { ProvidePlugin } = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/client/index.tsx'),
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/client'),
    },
    port: 3000,
  },
  output: {
    path: path.join(__dirname, 'dist/client'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    fallback: {
      util: require.resolve('util/'),
    },
  },
  module: {
    rules: [
      {
        test: /bootstrap\.js$/,
        loader: 'bundle-loader',
        options: { lazy: true },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: { loader: 'jsx', target: 'es2018' },
      },
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2018',
          tsconfigRaw: require('./tsconfig.client.json'),
        },
      },
      {
        test: /\.m?js/,
        resolve: { fullySpecified: false },
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimizer: [new ESBuildMinifyPlugin({ target: 'es2018' })],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
