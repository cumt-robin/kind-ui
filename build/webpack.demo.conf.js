const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

function resolvePath(dir) {
    return path.join(__dirname, "..", dir)
}

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: resolvePath('demo'),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'kind-ui',
            // 模板，支持ejs
            template: 'index.html',
            // 最终写入的目标文件
            filename: 'index.html',
            favicon: 'favicon.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            }
        }),
        new CleanWebpackPlugin()
    ]
})