const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'video/mp4' })

    // Read the video into a stream
    let vidstream = fs.createReadStream('C:\Users\hp\Desktop\Personal Projects\NodeJsServer\LightBulb.mp4')

    // Pipe our stream into the response
    vidstream.pipe(res)

})

app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')