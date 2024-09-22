var http = require("http");
//TODO - Use Employee Module here
var employeeModule = require('./Employee.js');
console.log("Lab 03 -  NodeJs"); 

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Welcome to Lab Exercise 03</h1>');

            res.end();
            return;
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(employeeModule.employees));

            res.end();
            return;
        }
        
        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            let fullNames = employeeModule.employees.map(employee => `${employee.firstName} ${employee.lastName}`).sort();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(fullNames));

            res.end();
            return;
        }
        
        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            let totalSalary = employeeModule.employees.reduce((sum, employee) => sum + employee.Salary, 0);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({"total_salary" : totalSalary}));

            res.end();
            return;
        }
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})