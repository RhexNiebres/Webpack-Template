const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Look for JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for transforming modern JS
            plugins: [
              '@babel/plugin-transform-modules-commonjs', // Ensure modules are properly transformed
            ],
            sourceType: 'module', // Explicitly set the source type to module
          },
        },
      },
      {
        test: /\.css$/, // CSS loader 
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Adjust this if your HTML file is in a different location
      filename: 'index.html',
    }),
  ],
  mode: 'development',
};