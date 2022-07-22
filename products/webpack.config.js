const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "development",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}