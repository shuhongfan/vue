const fs=require('fs')
const path=require('path')

function getFileByPath(path,callback){
    fs.readFile(path,'utf-8',(err,dataStr)=>{
        if (err) return callback(err)
        callback(null,dataStr)
    })
}

getFileByPath(path.join(__dirname,'./files/2.txt'),(err,dataStr)=>{
    if (err) return console.log(err.message)
    console.log(dataStr)
})

