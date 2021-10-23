# webpack 中的loader

## loader
### 1. loader 概述
在实际开发中，webpack 只能打包处理 .js 后缀名结尾的模块。其他非 .js 后缀结尾的模块，webpack 默认处理不了，需要调用 loader 加载器才能正常打包，否则会报错。

loader 加载器的作用： 协助 webpack 打包处理固定的文件模块。比如：

- css-loader 可以打包 .css 相关的文件
- less-loader 可以打包处理 .les 相关文件
- babel-loader 可以打包处理 webpack 无法处理的高级 js 语法

下图是loader 的调用过程
![03-01.png](./img/03-01.png)

### 2. 使用案例

**（1）问题产生**

在源代码 `src` 目录创建一个 `css` 目录，并创建文件 `index.css`，添加以下代码：
```css
li {
	list-style: none;
}
```
以上css代码的目的是去除列表 前面的“小点”

然后在`index1.js`文件头部导入css,如下代码
```javascript
// 使用es6语法，导入jquey
import $ from "jquery";
// 导入样式（在webpack中，一切皆模块，都可以通过es6导入语法进行导入和使用）
import './css/index.css';
```

但是，当我们运行实时编译命令的时候，发现存在如下图的错误
![03-02.png](./img/03-02.png)

**（2）解决办法**

此问题是由于webpack 不能解决css文件引起，我们需要安装css-loader，让 webpack能够处理css

运行`npm i style-loader@3.0.0 css-loader@5.2.6 -D`命令，安装处理css文件的loader

在`webpack.config.js`的module -> rules 数组中，添加loader规则如下
```javascript
module: { // 所有第三方模块的匹配规则
	rules: [ // 文件后缀名匹配规则
	  { test: /\.css$/, use: ['style-loader', 'css-loader'] }
	]
}
```

其中，`test` 表示匹配的文件类型，`use`表示对应要调用的 `loader`

注意：
- use 数组中指定的 loader 顺序是固定的
- 多个 loader 的调用顺序是：从后往前调用

此时，我们再次运行编译命令，可以看到浏览器的 样式已经实现。


### 3. 总结
（1）webpack 默认只能处理.js 结尾的文件，处理不了其他后缀的文件

（2）由于代码中包含了`index.css`这个文件，因此webpack默认处理不了

（3）当webpack发现某个文件处理不了的时候，会查找`webpack.config.js`这个【配置文件，看module.rules数组中，是否配置了对应的loader加载器

（4）webpack把`index.css`这个文件先转交给最后一个loader进行处理（县转交给css-loader）

（5）当css-loader处理完成之后，会把处理结果转交给下一个loader（转交给style-loader）

（6）当style-loader处理完成之后，发现没有下一个loader了，于是就把处理的结果转交给webpack

（7）webpack把style-loader处理的结果合并到 `/dist/bundle.js` 中，最终生成打包好的文件

### 4. 使用less-loader
我们在 `src/css`目录县添加 `index.less` 文件，添加以下样式代码
```stylesheet
html, body, ul{
	margin: 0;
	padding: 0;
	li {
		line-height: 30px;
		padding-left: 20px;
		font-size: 12px;
	}
}
```

然后在`index1.js` 文件中引入，如下代码
```javascript
// 引入less样式
import './css/index.less';
```

此时，自定编译的命令行终端再次报错，原因是我们没有配置对应的less加载器。

使用以下方式对less文件进行打包处理

运行 `npm i less-loader@10.0.1 less@4.1.1 -D`命令

在webpack.config.js 的 module->rules数组中，添加loader规则如下：
```javascript
module: {
	rules: [
	  { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
	]
}
```

从新运行编译命令，终端不再报错，并已实现效果















