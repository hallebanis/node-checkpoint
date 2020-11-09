
const http = require('http')
const bl = require('bl')

function urlList(path){
    
    http.get(path, res => {
    res.setEncoding('utf8');
    res.pipe(bl((err, data) => {
        if (err)
            console.log(err)
        else {
            console.log(data.toString())
        }        
    }))


})
}

const p=new Promise(resolve=>resolve())
p.then(()=>urlList(process.argv[2]))
.then(()=>urlList(process.argv[3]))
.then(()=>urlList(process.argv[4]))
.catch(err=>console.log("err"))

