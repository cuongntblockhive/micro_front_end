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
                productsFolder: 'remoteName@http://localhost:8081/remoteEntry.js',

            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}