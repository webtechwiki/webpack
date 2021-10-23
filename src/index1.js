// 使用es6语法，导入jquey
import $ from "jquery"

// 如果某个模块中，使用from 接受到的成员为 undefined, 则没有必要进行接口，也就是使用 import 即可，没必要使用 import from

// 导入样式（在webpack中，一切皆模块，都可以通过es6导入语法进行导入和使用）
import '@/css/index.css'
// 引入less样式
import '@/css/index.less'

// 1. 导入图片，得到图片文件
import logo from '@/images/logo.png'


// 2. 给img标签的 src 动态赋值
$('.box').attr('src', logo)


// 定义jquery入口函数
$(function() {
    // 奇数变成红色
    $('li:odd').css('background-color', 'red')
    // 偶数变成绿色
    $('li:even').css('background-color', 'green')
})

// 定义一个装饰器函数
function info(target) {
    target.info = 'Person info.'
}

// 定义一个普通的类
@info
class Person {}

console.log(Person.info)




