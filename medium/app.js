const fs = require('fs')

//read contents of .txt file 
//utf8 to skip buffer step, turn into string
//callback function
fs.readFile('planets.txt', 'utf8', (err, data) => {
    if (err) { return console.log('Error') }

    //split() data string to array
    const planetArr = data.split(',')

    console.log(planetArr)
})