# 总结

## 一、在实际开发中需要自己配置  webpack 吗？

- 实际开发中会使用命令行工具（cli）一键生成带有 webpack 的项目

- 开箱即用，所有的 webpack 都是现成的！

- 我们只需要知道 webpack 中的基本概念即可！


## 二、@ 符号的使用
在以上的笔记中，我们多次使用了 `import` 关键字导入相关的代码，假如目录层级比较多，就会导致不直观，如下：

```javascript
import '../../css/index.less'
```

此时 我们可以将 `@` 符号定义源代码的根目录，那么我们引入代码模块的的方式就如下以下代码

```javascript
import '@/css/index.css'
```

为了实现这个效果，我们需要在 `webpack.config.js` 中追加如下代码：

```javascript
resolve: {
    alias: {
        // 告诉 webpack ，项目中的代码，@ 符号表示 src 目录
        '@': path.join(__dirname, './src/')
    }
}
```

添加以上配置后，我们在之前 js  文件中都可以使用 `@` (对应src目录) 作为导入文件的相对路径，如下代码

```javascript
// 导入css样式
import '@/css/index.css'
// 引入less样式
import '@/css/index.less'
// 导入图片，得到图片文件
import logo from '@/images/logo.png'
```

## 三、最后

到此结束，环境关注作者的微信公众号 **极客开发者**
