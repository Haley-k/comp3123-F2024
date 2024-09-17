var message = require("./message")
//var msg = require("./message")
var arith = require("./Arithmatic")
var { sum, div } = require("./Arithmatic")

var Employee = require("./Employee")

var name = require("./name")

// console.log(module)
console.log(message)
console.log(message.college)
console.log(message.greet())
console.log(message.sayHello("Pritesh"))

console.log(arith)
console.log(arith.sum(12, 12))
console.log(sum(100, 12))
console.log(div(12, 2))
var s1 = new arith.Student(1, "Pritesh")
s1.display()

var e1 = new Employee(1, "Patel")
e1.display()

console.log(name)

//Extra
let s = {
    arith,
    message,
    Employee,
    name
}
console.log(s)
