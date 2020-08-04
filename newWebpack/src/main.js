// 项目JS入口文件
import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'

$(function () {
    $('li:odd').css('background','green')
    $('li:even').css('background',function () {
        return '#'+'D97634'
    })
})