const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './www'
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({ // inject ES5 modules as global vars
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Tether: 'tether'
      })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
              'file-loader'
          ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
      },
      {
          test:/\.less$/,
          exclude:'/node_modules',
          loader:"style-loader!css-loader!less-loader"
      }
    ],
  },
};
