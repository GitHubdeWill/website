const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    }
});
