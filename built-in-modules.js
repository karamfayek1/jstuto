const os =require('os')
const path =require('path')
const {readFileSync,writeFileSync} = require('fs')
// in fo about the current user 
console.log(os.userInfo())
// method that returns the systems uptime in seconds 

console.log(os.uptime())
console.log(path.sep)
const absolutepath=path.resolve(__dirname,'test','subtest','test1.txt')
console.log(absolutepath)
const var1=readFileSync(absolutepath,'utf-8')
const var2=readFileSync('./test/test2.txt','utf-8')

//console.log(readFileSync(writeFileSync('./test/result.txt',`this is the result of the two files combined:${var1} ${var2}`)))
console.log(writeFileSync('./test/result.txt',`this is the result of the two files combined:${var1} ${var2}`))