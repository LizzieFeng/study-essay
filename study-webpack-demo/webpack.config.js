const path = require('path');
// const  fry_sprite_loader = require( "../study-webpack-loader-sprit/loaders/sprite-loader");
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          'css-loader',
          'fry-sprite-loader',
        ],
      },
    ],
  },
};