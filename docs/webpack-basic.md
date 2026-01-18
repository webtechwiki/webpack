# webpack 的基本使用

## 初始化 webpack 前端项目

### 初始化 npm 包管理项目

首先用 `npm` 初始化一个 web 项目

```bash
# 创建一个test目录，相关命令行操作，都在这个目录上进行
mkdir test
# 进入test目录并初始化npm包管理项目
cd test && npm init -y
```

最终在 test 目录下生成 `package.json` 文件，文件内容如下：

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

!!! tip "项目结构"
    同时，在项目根目录下创建 `src` 目录，用于存放项目源代码，并且在 src 目录下创建 `index.html` 和 `index.js` 两个文件。

接下来我们使用 jquery 来实现隔行变色效果。

首先使用 npm 安装 jquery

```bash
npm install jquery
```

在 `index.html` 中添加以下内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="./index.js"></script>
  </head>
  <body>
    <ul>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
      <li>隔行变色效果</li>
    </ul>
  </body>
</html>
```

在 `index.js` 中添加以下内容

```javascript
// 使用es6语法，导入jquey
import $ from "jquery";

// 定义jquery入口函数
$(function () {
    // 奇数变成红色
    $('li:odd').css('background-color', 'red')
    // 偶数变成绿色
    $('li:even').css('background-color', 'green')
})
```

!!! warning "兼容性问题"
    此时我们用浏览器打开 `index.html`，发现并没有效果，原因是浏览器不支持最新的js高级语法。接下来我们将介绍webpack，并使用 webpack 进行项目打包，自动解决兼容性问题。

### 添加 webpack 依赖

打开终端，进入 test 目录，下载 webpack 和 webpack-cli 开发依赖包

```bash
npm install --save-dev webpack webpack-cli
```

!!! info "npm 参数说明"
    - `-S` (或 `--save`) 安装项目运行时依赖包
    - `-D` (或 `--save-dev`) 安装项目开发依赖包

### 配置并执行 webpack

在项目根目录中，创建名为 `webpack.config.js` 的 webpack 配置文件，并初始化如下的配置参数

```javascript
module.exports = {
  mode: "development",
};
```

在 `package.json` 的 `scripts` 节点下，新增 dev 脚本如下：

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack"
}
```

!!! tip "脚本执行"
    scripts 节点下的脚本，可以通过 `npm run` 执行，例如 `npm run dev`。

最后，在终端中使用 `npm run dev` 命令，启动 webpack 进行项目的打包构建。

最终，在项目根目录生成 `dist` 目录，并在 dist 目录中生成 `main.js` 文件，我们将 `index.html` 引入的 js 文件改为 `../dist/main.js`，再次打开浏览器，已经看到隔行预想的效果。

## webpack 的基本使用

通过上面的案例，我们已经成功的进行 webpack 的配置，并使用 webpack 进行项目打包。下面总结 webpack 的基本使用

### mode 的可选值

=== "development"
    - 用于开发环境
    - 不会对打包生成的文件进行代码压缩和性能优化
    - 打包速度快，适合在开发阶段使用

=== "production"
    - 用于生产环境
    - 会对打包生成的文件进行代码压缩和性能优化
    - 打包速度慢，适合在项目发布阶段使用

### webpack 中的默认规定

!!! note "默认约定"
    在 webpack 4.x 和 webpack 5.x 的版本中，有如下的默认约定：
    
    1. 默认的打包文件入口为 `src/index.js`
    2. 默认的输出文件路径为 `dist/main.js`

可以在 `webpack.config.js` 中修改打包的默认约定

### 自定义打包的入口和出口

在 `webpack.config.js` 配置文件中，通过 entry 节点指定打包入口，通过 output 节点指定打包出口。示例代码如下

```javascript
const path = require("path");
module.exports = {
  mode: "development", // mode 用来指定构建模式，可选值有 development 和 production
  entry: path.join(__dirname, "./src/index1.js"), // 打包入口文件的路径
  output: {
    path: path.join(__dirname, "./dist"), // 输出文件的存放路径
    filename: "bundle.js", // 输出文件名称
  },
};
```

---

!!! success "下一步"
    现在你已经掌握了webpack的基础使用，接下来让我们学习 [webpack插件](webpack-plugin.md) 的使用方法。