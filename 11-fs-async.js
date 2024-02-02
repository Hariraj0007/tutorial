const { readFile, writeFile} = require('fs') 

readFile('./content/hari.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const hari = result
    readFile('./content/luffy.txt', 'utf8',(err,result)=>{
   if (err) {
       console.log(err)
       return
   }     
   const luffy = result
   writeFile(
    './content/result-async.txt',
    `Here is the result : ${hari}, ${luffy}`, 
    (err, result) => {
          if (err) {
        console.log(err)
        return
          }
          console.log(result)
    }
   )
    })
})