const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function(isDev) {
  return {
    entry: {
      app: path.resolve(__dirname, '../src/index.tsx')
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'static/js/[name].[fullhash:8].js',
      clean: true,
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts|jsx|js)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          oneOf: [
            {
              test: /\.module\.(less|css)$/,
              include: [path.resolve(__dirname, '../src')],
              use: [
                // isDev?'style-loader' : MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[path][name]_[local]--[hash:base64:5]'
                    }
                  }
                },
                'postcss-loader',
                'less-loader'
              ]
            },
            {
              test: /\.less$/,
              use: [
                isDev?'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
              ]
            },
            {
              test: /\.css$/,
              use: [
                isDev?'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
              ]
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html')
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? 'static/css/[name].css' : 'static/css/[name].[fullhash:8].css',
      })
    ]
  }
}