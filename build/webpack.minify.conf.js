const path = require("path")
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
        'kind-ui': `./dist/kind-ui.${version}.js`
    },
    output: {
        path: resolvePath('dist'),
        publicPath: '/',
        filename: `[name].${version}.min.js`
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    devtool: false
})

module.exports = buildConfig