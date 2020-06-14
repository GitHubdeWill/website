const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'development',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // hot: true,
        historyApiFallback: true
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    }
});