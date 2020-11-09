const http = require('http')
var url = require('url')
let date = new Date();

const server = http.createServer((req, res) => {
    let url=require('url').parse(req.url,true)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if(url.query.iso){
        if(url.pathname==='/api/parsetime'){
            let date=new Date(url.query.iso)
            res.end(JSON.stringify(
                {
                    hour:date.getHours(),
                    minute:date.getMinutes(),
                    second:date.getSeconds()
                }
            ))
        }
        if(url.pathname==='/api/unixtime'){
            let date=new Date(url.query.iso)
            res.end(JSON.stringify({unixtime:date.getTime(url.query.iso)}))
        }
    }
        
    else
        res.end()
}
)
server.listen(process.argv[2])

