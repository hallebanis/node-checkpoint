const fs=require('fs')
let str=''
/* let str=fs.readFileSync(process.argv[2]).toString()
let nbL=str.split('\n')
console.log(nbL.length-1) */
if(process.argv[2]){
fs.readFile(process.argv[2],'utf8',(err,data)=>{
    if(err)
    console.log(err)
    else
    str=data.toString()
    let nbL=str.split('\n').length-1
    console.log(nbL)
}
)
}
else
console.log('invalid entry')