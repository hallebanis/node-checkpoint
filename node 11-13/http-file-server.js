const http=require('http')  
const fs=require('fs')

const server=http.createServer((req,res)=>{
    let bf=fs.createReadStream(process.argv[3])
    bf.pipe(res)
});
server.listen(process.argv[2]);