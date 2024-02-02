const { readFileSync, writeFileSync} = require('fs') 

const hari = readFileSync('./content/hari.txt', 'utf-8')
const luffy = readFileSync('./content/luffy.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt',
     `Here the result : ${hari}, ${luffy}`,
    { flag: 'a'}
 )

