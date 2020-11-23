const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	// 入口文件
    entry: {
        "index": "./src/pages/index/index.js",
        "cookie": "./src/pages/cookie/index.js"
    },
    output: {
        filename: '[name]-bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
    	// 配置相应的规则
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.js[x]?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                use: ['style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'],
            }
        ]
    },
    // 配置相应的插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/pages/index/index.html',
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: "cookie.html",
            template: './src/pages/cookie/index.html',
            chunks: ["cookie"]
        }),
        new CleanWebpackPlugin()
    ]
};
