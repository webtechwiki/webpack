# webpack 中的插件

## 一、webpack 插件的作用

通过安装和配置第三方插件，可以拓展 webpack 的能力，从而让 webpack 使用起来更方便。最常用的 webpack 插件有一下两个

### 1. webpack-dev-server

- 类似于 node.js 用到的 nodemon 工具
- 每次修改源代码，webpack 会进行项目自动打包和构建

### 2. html-webpack-plugin

- webpack 中的 HTML 插件（类似于一个模板引擎）
- 可以通过插件自定制 index.html 中的内容

## 二、使用 webpack-dev-server 插件

### 1. 安装 webpack-dev-server

使用以下命令，在项目中安装 webpack-dev-server 插件

```shell
npm install webpack-dev-server@3.11.2 -D
```

### 2. 配置 webpack-dev-server

- 修改`package.json`中 script 的`dev`指令，如下

```json
"scripts": {
    "dev": "webpack serve"
}
```

script 节点下的命令，可以通过`npm run`执行

- 再次执行`npm run dev`命令，重新进行项目的打包，此时自动开启一个默认端口为 8080 的 web 服务

- 在浏览器中访问`http://localhost:8080`地址，查看到自动打包效果

实际上，`dev`指令对应的是`webpack serve`命令，执行`npm run dev`最终将执行`webpack serve`命令，webpack-dev-server 会启动一个实时打包的 http 服务。此时打包后`bundel.js`存在于内存中，我们通过`http://localhost:8080/bundel.js`可以访问到实时打包的 js 文件。

> 注意：如果你安装的是新版本的 webpack-dev-server，直接访问`http://localhost:8080`，可能会看到`Cannot GET /`报错，因为新版的 webpack-dev-server 不再默认加载目录。但是通过`http://localhost:8080/bundel.js`地址依旧能访问到打包后的 js 文件。

在 webpack.config.js 的配置文件中，可以通过 devServer 节点对 webpack-dev-server 插件进行更多的配置，示例代码如下：

```javascript
devServer: {
  open: true, // 初次打包完成后，自动打开浏览器
  host: '127.0.0.1',// 实时打包所使用的主机地址
  port: 8080, // 实时打包使用的端口
}
```

> 注意：凡是修改了 webpack.config.js 配置文件，或者 修改了 package.json 文件，必须重启实时打包服务，否则最新配置文件无法生效

## 三、使用 html-webpack-plugin 插件

虽然通过 webpack-dev-server 我们完成了实时打包 js 代码的需求，并可以将 index.html 的 js 导入地址指向实时的 http 服务中的 js 文件。但在实际开发中，我们更希望，执行打包后，直接访问 http 服务首页就能访问到我们项目。这就是我们要使用 html-webpack-plugin 插件的原因。

### 1. 安装 html-webpack-plugin

通过一下命令安装指定版本的 html-webpack-plugin

```shell
npm install html-webpack-plugin@5.3.2 -D
```

### 2.配置 html-webpack-plugin

修改 webpack 配置文件，如下代码

```javascript
const path = require("path");
// 导入html-webpack-plugin插件
const HtmlPlugin = require("html-webpack-plugin");

// 构造html-webpack-plugin实例
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html", // 指定原文件存放的路径
  filename: "./index.html", // 指定生成文件存放的路径
});

module.exports = {
  mode: "development", // mode 用来指定构建模式，可选值有 development 和 production
  entry: path.join(__dirname, "./src/index1.js"), // 打包入口文件的路径
  output: {
    path: path.join(__dirname, "dist"), // 输出文件的存放路径
    filename: "bundle.js", // 输出文件名称
  },
  plugins: [htmlPlugin],
};
```

此时，我们关闭之前的 http 服务后，再次执行`npm run dev`,将启动新的 http 服务，这次访问 http 服务，我们直接访问到 web 了界面效果，在更新代码的同时，web 界面效果也会时时更新。

> 如果我们在 html 代码中将引入 js 的代码删除掉，但是在界面上并没有被影响。原因是 html-webpack-plugin 插件给实时输出的 html 文件自动注入了实时打包的 js 文件。
