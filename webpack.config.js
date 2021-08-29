const path = require('path')
// 导入html-webpack-plugin插件
const HtmlPlugin = require("html-webpack-plugin");

// 构造html-webpack-plugin实例
const htmlPlugin = new HtmlPlugin({
    template: "./src/index.html", // 指定原文件存放的路径
    filename: "./index.html", // 指定生成文件存放的路径
});

module.exports = {
    mode: "development", // mode 用来指定构建模式，可选值有 development 和 production
    entry: path.join(__dirname, './src/index1.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件的存放路径
        filename: "bundle.js" // 输出文件名称
    },
    plugins: [htmlPlugin],
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 8080
    }
};

