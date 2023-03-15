# 前端工程化解决方案 -- Webpack

```
├─docs                        文文档目录
├─src                         示例代码
├─package.json                npm项目依赖管理配置文件
└─webpack.config.php          webpack配置文件
```

## 一、前端工程化

### 1. 小白眼中的前端开发

- 会写 HTML + CSS + JavaScript 就会前端开发
- 需要美化界面样式，就拽一个 bootstrap 组件过来
- 需要操作 DOM 或者发起 Ajax 请求，就拽 jQuery 过来
- 需要快速实现界面布局，就拽 layUI 过来

### 2. 实际的前端开发

- 模块化（js 模块化、css 模块化、资源模块化）
- 组件化（复用现有的 UI 结构、样式、行为）
- 规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、Git 分支管理）
- 自动化（自动化构建、自动部署、自动化测试）

### 3.什么是前端工程化

前端工程化是指：在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化。

企业开发中的 Vue 和 React 项目，都是基于工程化的方式进行开发的。

好处：前端开发自成体系，有一套标准开发方案和流程。

### 4. 前端工程化解决方案

早期的前端工程化解决方案

- [grunt](https://www.gruntjs.net)
- [gulp](https://www.gulpjs.com.cn)

目前流行的前端工程化解决方案

- [webpack](https://www.webpackjs.com)
- [parcel](https://zh.parceljs.org)

> 在本系列文档中，我们将一起来熟悉与使用 Webpack

## 二、文档列表

- [01-webpack的基本使用](./docs/01-webpack-basic.md)
- [02-webpack中的插件](./docs/02-webpack-plugin.md)
- [03-webpack中的加载器](./docs/03-webpack-loader.md)
- [04-打包构建](./docs/04-build.md)
- [05-SourceMap](./docs/05-sourcemap.md)
- [06-总结](./docs/06-summary.md)
