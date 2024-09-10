console.log('Hello, World!');

var obj = {
    name: 'Haley',
    age: 30
}

console.log(obj);

let student = {
    name: 'John',
    age: 20,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    result: ''
}

console.log(typeof(student.name));
console.log(typeof(student.age));
console.log(typeof(student.isAdmin));
console.log(typeof(student.courses));
console.log(typeof(student.wife));
console.log(typeof(student.result));
console.log(typeof(student));

function sayHello() {
    console.log('Hello');
}

sayHello();
console.log(typeof(sayHello));

var sayHello = function() {
    console.log('Hello');
}

sayHello();
console.log(typeof(sayHello));

var greet = () => {
    console.log('Hi!');
}

greet();
console.log(typeof(greet));

const name = "Haley Kim"
console.log(name);
console.log(name.length);

const age = 30;