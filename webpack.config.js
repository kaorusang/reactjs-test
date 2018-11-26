const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports ={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname, "./dist"),
        filename: "app.bundle.js"
    },
    devServer:{
        port:9000,
        open:true,
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename: 'index.html'
        })
    ],
    module:{
        rules:[
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//排除
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
        ]
    }
}