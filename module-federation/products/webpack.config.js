const HtmlWebpackPlugin = require("html-webpack-plugin")
const {ModuleFederationPlugin} = require("webpack").container;

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
        new ModuleFederationPlugin({
            name: 'remoteProducts',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/boostrap'
            },
            shared: ['@faker-js/faker']
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}