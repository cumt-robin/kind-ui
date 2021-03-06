const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const portfinder = require('portfinder');
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = () => {
    return new Promise((resolve, reject) => {
        portfinder.getPort({port: 8080}, function (err, port) {
            if (err) {
                reject()
            } else {
                const webpackOptions = merge(baseWebpackConfig, {
                    mode: 'development',
                    entry: './src/main.js',
                    output: {
                        path: '/',
                        filename: "[name].bundle.js",
                        publicPath: '/'
                    },
                    devServer: {
                        port,
                        open: true,
                        hot: true,
                        historyApiFallback: true,
                        overlay: {
                            warnings: false,
                            errors: true
                        }
                    },
                    devtool: 'cheap-module-eval-source-map',
                    module: {
                        rules: [
                            {
                                enforce: 'pre',
                                test: /\.(js|vue)$/,
                                loader: 'eslint-loader',
                                exclude: /node_modules/
                            }
                        ]
                    },
                    plugins: [
                        new HtmlWebpackPlugin({
                            title: 'Kind UI',
                            // 模板，支持ejs
                            template: 'index.html',
                            // 最终写入的目标文件
                            filename: 'index.html',
                            favicon: 'favicon.ico'
                        })
                    ]
                })
                resolve(webpackOptions)
            }
        });
    })
}