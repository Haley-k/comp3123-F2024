var module1 = require('./module1.js');
var arith = require('./calc.js');

console.log(arith.add(3, 5))
console.log(arith.sub(5, 4))
console.log(arith.multiply(3, 5))
console.log(arith.divide(15, 5))

// console.log(module1);
// console.log(module);
// console.log(module1.greet());
// console.log(module1.name);
// console.log(module1.fullname);
// console.log(module1.age);
// console.log(module1.course);

console.log(__dirname);
console.log(__filename);

// console.log(console);

// //setTimeout
// setTimeout(() => {
//     console.log('Hello World 3');
// }, 3000)

// //setTimeout
// setTimeout(() => {
//     console.log('Hello World 5');
// }, 5000)

// console.log(global);