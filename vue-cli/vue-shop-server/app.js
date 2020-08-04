const express = require('express')
const compression = require('compression')
const https = require('https')
const fs = require('fs')
const app = express()

const options = {
    cert: fs.readFileSync('./2_shuhongfan.online.crt'),
    key: fs.readFileSync('3_shuhongfan.online.key')
}
// gzip压缩
app.use(compression())
app.use(express.static('./dist'))

app.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})

// https.createServer(options, app).listen(443)
