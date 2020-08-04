// 1.promise是一个异步构造函数 可以用new promise()得到实例
// 2.promiss上，有两个函数，
// 分别叫做resolve（成功后回调函数）
// 和 reject(失败回调)
// 3.promiss构造函数的prototype属性上，有.then方法

const fs=require('fs')

function getFilePath(path) {
    var promise=new Promise(function (resolve, reject) {
        fs.readFile(path,'utf-8',(err,dataStr)=>{
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
    return promise
}

getFilePath('./files/13.txt')
    .then(function (data) {
        console.log(data+'成功')
        return getFilePath('./files/2.txt')
    })
    .then(function (data) {
        console.log(data+'成功')
        return getFilePath('./files/3.txt')
    })
    .then(function (data) {
        console.log(data+'成功')
    })
    .catch(function (err) {//前面有任何执行失败，停止promise，进入catch
        console.log(err.message)
    })

console.log('OKOK')
