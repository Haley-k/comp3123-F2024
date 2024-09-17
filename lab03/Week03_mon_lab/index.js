//console.log("Welcome to Node JS Example")

let artihmetics = require('./Addition.js')
let student = require("./Student")
let collegeName = require("./myName")

let result = artihmetics.add(10, 20)
console.log(`SUM : ${result}`)
console.log(`SUB : ${artihmetics.sub(20, 10)}`)
console.log(`Name : ${artihmetics.name}`)

let s1 = new student("Pritesh", "Patel")
s1.display()

console.log(collegeName)