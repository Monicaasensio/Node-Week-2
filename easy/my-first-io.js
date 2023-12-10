//load file system module
const fs = require('fs')
//blocking (synchronous), read file with path, returns a buffer (json object)
const dataBuffer = fs.readFileSync(process.argv[2])
//convert to string to be able to read in javascript
const str = dataBuffer.toString()
//split string to array at every line break, find that length and -1
const word = str.split('\n').length - 1
//console log that number

console.log(word)

