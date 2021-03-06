var path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    // node_modules配下のパッケージをWebpackに含まないように設定
    externals: [nodeExternals()],
    entry: [path.join(__dirname, '/src/main.ts')],
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    module: {
        rules: [{
            // TypeScriptをコンパイル
            test: /\.ts$/,
            use: {
                loader: 'ts-loader'
            }
        }, {
            // javascriptをコンパイル
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};