const http=require('http')
const bl= require('bl')
 

http.get(process.argv[2],res=>{
    res.setEncoding('utf8');
 res.pipe(bl((err,data)=>{
     if(err)
        console.log(err)
    else{
        console.log(data.length)
        console.log(data.toString())
    }
  
 }))

})
