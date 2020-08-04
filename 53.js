const fs=require('fs')
const path=require('path')

// 封装读取文件方法
function getFileByPath(path,succCb,errCB){
    fs.readFile(path,'utf-8',(err,dataStr)=>{
        if (err) return errCB(err)
        succCb(dataStr)
    })
}

getFileByPath(path.join(__dirname,'./files/1.txt'),function (data) {
    console.log(data+'成功回调')
    getFileByPath(path.join(__dirname,'./files/2.txt'),function (data) {
        console.log(data)
        getFileByPath(path.join(__dirname,'./files/3.txt'),function (data) {
            console.log(data)
        })
    })
},function (err) {
    console.log(err+'失败回调')
})


