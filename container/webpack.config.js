const HtmlWebpackPlugin = require("html-webpack-plugin")
const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
    mode: "development",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'remoteProducts@http://localhost:8081/remoteEntry.js',
                cart: "remoteCart@http://localhost:8082/remoteEntry.js"

            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}