const fs=require('fs')
let str=fs.readFileSync(process.argv[2]).toString()
let nbL=str.split('\n')
console.log(nbL.length-1)