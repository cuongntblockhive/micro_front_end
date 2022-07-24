const HtmlWebpackPlugin = require("html-webpack-plugin")
const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
    mode: "development",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'remoteCart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartIndex': './src/index'
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}