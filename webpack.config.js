const path = require('path')
// 导入html-webpack-plugin插件
const HtmlPlugin = require("html-webpack-plugin");

// 构造html-webpack-plugin实例
const htmlPlugin = new HtmlPlugin({
    template: "./src/index.html", // 指定原文件存放的路径
    filename: "./index.html", // 指定生成文件存放的路径
});

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: "development", // mode 用来指定构建模式，可选值有 development 和 production
    entry: path.join(__dirname, './src/index1.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件的存放路径
        filename: "js/bundle.js" // 输出文件名称
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 8080
    },
    module: {
        rules: [
            // 处理 css 文件的 loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理 less 文件的 loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理文件图片的loader
            // 如果要调用的 loader 只有一个，则只传递一个字符串也行，如果多个 loader ，则必须指定数组
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=13000&outputPath=images' },
            // 使用 babel-loader处理 高级js语法
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};