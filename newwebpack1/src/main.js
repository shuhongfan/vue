//项目JS入口文件
console.log('ok')

import './css/index.css'
import './css/index.less'
import './css/index.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Person {
    static info={name:'zs',age:20}
}

console.log(Person.info)

var p1=new Person()