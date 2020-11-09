const http=require('http')
var map = require("through2-map")
const server=http.createServer((req,res)=>{
    req.pipe(map(chunk=>chunk.toString().toUpperCase()))
    .pipe(res)
})
server.listen(process.argv[2])