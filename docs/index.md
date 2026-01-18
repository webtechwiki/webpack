# Webpack 实战教程 - 前端工程化解决方案

!!! info "项目结构"
    ```
    ├─docs                        文档目录
    ├─src                         示例代码
    ├─package.json                npm项目依赖管理配置文件
    └─webpack.config.js           webpack配置文件
    ```

## 前端工程化概述

### 小白眼中的前端开发

- 会写 HTML + CSS + JavaScript 就会前端开发
- 需要美化界面样式，就拽一个 bootstrap 组件过来
- 需要操作 DOM 或者发起 Ajax 请求，就拽 jQuery 过来
- 需要快速实现界面布局，就拽 layUI 过来

### 实际的前端开发

现代前端开发需要考虑以下几个方面：

- **模块化**（js 模块化、css 模块化、资源模块化）
- **组件化**（复用现有的 UI 结构、样式、行为）
- **规范化**（目录结构的划分、编码规范化、接口规范化、文档规范化、Git 分支管理）
- **自动化**（自动化构建、自动部署、自动化测试）

### 什么是前端工程化

!!! note "定义"
    前端工程化是指：在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化。

企业开发中的 Vue 和 React 项目，都是基于工程化的方式进行开发的。

**好处**：前端开发自成体系，有一套标准开发方案和流程。

### 前端工程化解决方案

#### 早期的前端工程化解决方案

- [grunt](https://www.gruntjs.net)
- [gulp](https://www.gulpjs.com.cn)

#### 目前流行的前端工程化解决方案

- [webpack](https://www.webpackjs.com) :star:
- [parcel](https://zh.parceljs.org)

!!! tip "学习重点"
    在本系列文档中，我们将一起来熟悉与使用 Webpack

## 学习路径

本教程将按照以下顺序进行学习：

1. [webpack基础使用](webpack-basic.md) - 了解webpack的基本概念和使用方法
2. [webpack插件](webpack-plugin.md) - 学习如何使用和配置webpack插件
3. [webpack加载器](webpack-loader.md) - 掌握各种loader的使用技巧
4. [打包构建](build.md) - 学习项目的打包和构建流程
5. [SourceMap](sourcemap.md) - 了解源码映射的配置和使用
6. [总结](summary.md) - 回顾和总结webpack的核心知识点

---

!!! success "开始学习"
    准备好了吗？让我们从 [webpack基础使用](webpack-basic.md) 开始吧！