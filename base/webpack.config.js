const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [],
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    }
};
