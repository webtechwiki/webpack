// 使用es6语法，导入jquey
import $ from "jquery";

// 定义jquery入口函数
$(function () {
    // 奇数变成红色
    $('li:odd').css('background-color', 'red')
    // 偶数变成绿色
    $('li:even').css('background-color', 'green')
})
