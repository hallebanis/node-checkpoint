
const fs=require('fs')
/* function foodemo(value){
    return 'hello '+value;
}

function funct(a, foo){
    console.log(foo(a));
}

//call funct    
funct('world!',foodemo); */
module.exports =function(path,extension,callback){
    fs.readdir(path,'utf8',(err,data)=>{
  
        if(err)
            return callback(err)
        
        return callback(null,data.filter(el=>el.endsWith(`.${extension}`)))
        
            
        
    })
}


