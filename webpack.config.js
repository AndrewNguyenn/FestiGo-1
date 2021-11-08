const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html'
      })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test:/\.s[ac]ss$/i,
                use:['style-loader','css-loader', 'sass-loader']
             },
             {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader"
             },
             {
                test: /\.(mov|mp4)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'festival.mp4'
                    }  
                  }
                ]
              },
        ]
    },
    devServer: {
        static: {
            publicPath: '/build',    
            directory: path.resolve(__dirname, 'build'),
        },
        historyApiFallback: true,
        proxy: {
          '/api':{
            target: 'http://localhost:3000/',
            secure: false,
          }
        }
    },
};
