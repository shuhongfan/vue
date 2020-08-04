// 导入express
const express = require('express')
const compression = require('compression')
const https = require('https')
const fs = require('fs')
const options = {
    cert: fs.readFileSync('./full_chain.pem'),
    key: fs.readFileSync('./private.key')
}
// 调用express
const app = express()
// 静态资源压缩gzip
app.use(compression())
// 托管静态资源目录
app.use(express.static('./dist'))

app.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})

// https.createServer(options, app).listen(443)
