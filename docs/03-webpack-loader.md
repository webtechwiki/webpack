# webpack 中的loader

## loader
### 1. loader 概述
在实际开发中，webpack 只能打包处理 .js 后缀名结尾的模块。其他非 .js 后缀结尾的模块，webpack 默认处理不了，需要调用 loader 加载器才能正常打包，否则会报错。

loader 加载器的作用： 协助 webpack 打包处理固定的文件模块。比如：

- css-loader 可以打包 .css 相关的文件
- less-loader 可以打包处理 .les 相关文件
- babel-loader 可以打包处理 webpack 无法处理的高级 js 语法
