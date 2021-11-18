css压缩 
    使用optimize-css-assets-webpack-plugin

    同时使用 cssnano


    ````javascript
     plugins: [
        new  OptimizeCssAssetsPlugin(
            {
                assetNameRegExp:/\.css$/g,
                // cssProcessor: require('cssnano'), // （使用版本"webpack": "^4.31.0"）,如果是5的话就不用了。使用会报错
            }
        ),
    ],

    ````


    ````json

 "devDependencies": {
    "@babel/core": "^7.4.4",
    "@babel/preset-env": "^7.4.4",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "css-loader": "^2.1.1",
    "cssnano": "^4.1.10",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.6.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "postcss-loader": "^3.0.0",
    "postcss-preset-env": "^6.6.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "style-loader": "^0.23.1",
    "uglifyjs-webpack-plugin": "^2.1.2",
    "url-loader": "^1.1.2",
    "webpack": "^4.31.0",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.3.1"
  }
    ````