import $ from 'jquery'
import './css/1.css'
import './css/2.less'
import './css/3.scss'
import Vue from 'vue'
import App from "./components/App.vue";


$(function () {
    $("li:odd").css("background","green");
    $("li:even").css("background","pink");
})

class Person {
    static info='babel success'
}

console.log(Person.info)

const vm=new Vue({
    el:'#app',
    render:h=>h(App)
})
