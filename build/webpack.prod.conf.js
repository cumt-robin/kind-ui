const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const packageJson = require('../package.json')
const version = packageJson.version

function resolvePath(dir) {
    return path.join(__dirname, "..", dir)
}

const buildConfig = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        'kind-ui': './src/components/index.js'
    },
    output: {
        path: resolvePath('dist'),
        publicPath: '/',
        filename: `[name].${version}.js`,
        library: 'KindUI',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    devtool: false,
    plugins: [
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: false
    }
})

if (process.env.report) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    buildConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = buildConfig