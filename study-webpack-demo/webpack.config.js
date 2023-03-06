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
          {
            loader:'fry-loader',
            options:{
              modules: {
                mode: "local",
                auto: true,
                exportGlobals: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
                localIdentHashSalt: "my-custom-hash",
                namedExport: true,
                exportLocalsConvention: "camelCase",
                exportOnlyLocals: false,
              },
            }
          }
        ],
      },
    ],
  },
};