const fs = require('fs')
//asynchronous with path of file and utf8 as buffer object, returns string
//callback function with 2 args
fs.readFile(process.argv[2], 'utf8', (err, dataString) => {
    //error handling
    if (err) {
        return console.log(err)
    } else {
        //use returned string to split and find amount of line breaks
        const result = dataString.split('\n').length - 1
        console.log(result)
    }
}
)