# 打包发布

## 1. 配置webpack 打包发布

在 `webpack.json` 文件的 `script` 节点下，新增 build 命令如下：
```javascript
"scripts": {
	"dev": "webpack serve", // 开发环境中，运行 dev 命令
	"build": "webpack --mode production" // 项目发布时，运行 build 命令
}
```

-- model 是一个参数项，用来指定 webpack 的运行模式。production 代表生产环境，进行代码压缩和性能优化。

注意：通过 --model 指定的参数项，会覆盖 webpack.config.js 中的 model 选项

## 2. 打包优化

期望把生成的 js 文件统一放到 `js` 目录中
在 `webpack.config.js` 配置文件的 output 考点中，进行如下的配置
```javascript
output: {
	path: path.join(__dirname, 'dist')
	// 明确告诉 webpack 把生成的 bundle.js 文件存放到 dist 目录下的 js 目录中
	filename: 'js/bundle.js'
}
```

期望把图片文件都放在 `images` 目录中

方式1: 在配置url-loader 的时候，多个参数之间使用 & 符号进行分隔，添加上`outputPath`参数，如下代码：
```javascript
{ test: /\.jpg|png|gif$/, use: 'url-loader?limit=13000&outputPath=images' }
```
或者还可以写成以下的方式
```javascript
{
	test: /\.jpg|png|gif$/,
	use: {
		loader: 'url-loader',
		options: {
			limit: 13000,
			// 明确指定打包生成的文件，存储到 dist 目录下的 images 文件夹中
			outputPath: 'images'
		}
	}
}
```







