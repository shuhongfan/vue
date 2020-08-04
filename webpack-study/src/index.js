import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function () {
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor','blue')
})


class Person {
    static info='123'
}

console.log(Person.info)

// ==========================================

import Vue from "vue";
import App from "./components/App.vue";
const vm=new Vue({
    el:'#app',
    // render:h=>h(App)
    render(html){
        return html(App)
    }
})