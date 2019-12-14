const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
    plugins: [
        new optimizeCss({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new ManifestPlugin()
    ],
    devtool: "source-map",
    output:{
        filename: "js/[name][chunkhash].js"
    }
}

const options = {
    mode: "production"
}

module.exports = merge(webpackConfigCreator(options), config);