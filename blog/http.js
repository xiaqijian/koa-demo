const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.body)
    // console.log(res)
    res.end('222')
})

server.listen(3000)

