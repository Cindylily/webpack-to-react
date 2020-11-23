const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
	// 设置为开发模式
    mode: 'development',
    devtool: 'inline-source-map',
    // 配置服务端目录和端口
    devServer: {
        contentBase: './dist',
        port: 3000,
        historyApiFallback: {
            rewrites: [
                {
                    "from": 'index', to: path.posix.join("", "index.html")
                },
                {
                    "from": 'cookie', to: path.posix.join("", "index.html")
                }
            ]
        }
    }
});
