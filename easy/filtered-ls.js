const fs = require('fs')
const path = require('path') //gives info about folders and directories

const directory = process.argv[2]
//add . because it wont print alone
const fileExt = `.${process.argv[3]}`

//call fs and read directory string value and callback function
fs.readdir(directory, (err, list) => {
    //foreach method of list array
    list.forEach(file => {
        //iterates through list array and filters extensions
        //if ext name of file is = the file extension
        if (path.extname(file) === fileExt) {
            console.log(file)
        } 
    })

})