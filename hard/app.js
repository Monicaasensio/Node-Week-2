const express = require('express') //requires express framework
const fs = require('fs') //requires file system object
const app = express()

//endpoint to GET list of employees
app.get('/employees', (req, res) => {
    fs.readFile(__dirname + "/" + "employees.json", "utf8", (err, data) => {
        // console.log(data)
        res.end(data)
    })
})

// //endpoint to get a specific employee by ID
// app.get('/employees/:employeeID', (req, res) => {
//     //get list of all employess
//     fs.readFile(__dirname + "/" + "employees.json", "utf8", (err, data) => {
//         const employees = JSON.parse(data)
//         console.log('hello');
//         const employee = employees["employee" + req.params.employeeID]
//         console.log('hey', employee)
//         res.end(JSON.stringify(employee))
//     })
// })

app.get('/employees/:employeeID', (req, res) => {
    fs.readFile(__dirname + "/" + "employees.json", "utf8", (err, data) => {
        const employees = JSON.parse(data);
        //turn employee id from string to integer
        const employeeId = parseInt(req.params.employeeID);
        console.log('employeeId', employeeId);
        //find matching employee id through all employees
        const employee = employees.find(e => e.employeeID === employeeId);
        if (employee) {
            res.json(employee);
        } else {
            //error message
            res.status(404).send("Employee not found");
        }
    });
});

const port = 4000
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`listening on port ${port}`);
  })