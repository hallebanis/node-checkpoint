var fs=require('fs')

fs.readdir(process.argv[2],'utf8',(err,files)=>{
   files.filter(el=>
    el.endsWith(`.${process.argv[3]}`)? console.log(el):null
    )
   
})