let http = require('http')
let fs = require('fs')
let users = require('./data')


const PORT = 8088



var server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.write("<h1>NodeJS web server</h1>")
        res.write("<h2>NodeJS web server</h2>")
        res.end()
    }

    if(req.url == "/name"){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("<h1>Pritesh Patel</h1>")
        res.end()
    }

    //http://localhost:8088/users
    if(req.url == "/users"){
        //Convert Object to JSON String
        let data = JSON.stringify(users.users)
        //res.write(users.users.first_name)
        res.write(data)
        res.end()
    }

    //http://localhost:8088/userlist
    if(req.url = "/userlist"){
        fs.readFile( __dirname + "/employees.json", 'utf8', (err, data) => {
            //res.write(data)
            res.end(data)
            //res.end()
        })
    }
})

server.listen(PORT)
console.log(`Server started at port ${PORT}`)
