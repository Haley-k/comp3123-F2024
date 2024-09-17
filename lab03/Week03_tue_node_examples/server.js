var http = require("http")
var userList = require("./users.json")
//console.log(userList)

const SERVER_PORT = 8089
//console.log(http)

let server = http.createServer((req, res) => {
    console.log(`${req.url} - ${req.method}`)
    
    //http://localhost:8089/
    if(req.url == "/" && req.method == "GET"){
        res.write("<h1>Welcome to Node Server</h1>")
    }

    //http://localhost:8089/login
    if(req.url == "/login"){
        res.write("<h1>Login Page</h1>")
    }

    //http://localhost:8089/student
    if(req.url == "/student"){
        res.write("<h1>Student Page</h1>")
        const stud = {
            sid: 1,
            snm: "Pritesh"
        }
        res.write(JSON.stringify(stud))
    }

    //http://localhost:8089/users
    if(req.url == "/users"){
        if(req.method == "POST"){
            res.write(JSON.stringify(userList))
        }else{
            const err = {
                msg: "Only GET method allowed"
            }
            res.write(JSON.stringify(err))
        }
    }
    res.end()
})

server.listen(SERVER_PORT)
//console.log(server)
console.log(`Server running at port ${SERVER_PORT}`)