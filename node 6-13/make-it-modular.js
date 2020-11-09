const filterList=require('./mymodule.js')
filterList(process.argv[2],process.argv[3],(error,files)=>{
    if(error){
        console.error(error)
        return
    }
    files.map(elm=>console.log(elm))
    return;
})