let add = (a, b) => {
    return a + b
}

let sub = (a, b) => {
    return a - b
}

let mul = (a, b) => {
    return a * b
}

let div = (a, b) => {
    return a / b
}

class Student {
    constructor(sid, snm){
        this.sid = sid
        this.snm = snm
    }

    display(){
        console.log(this.sid)
        console.log(this.snm)
    }
}

module.exports = { sum:add, sub, mul, div, Student }
//module.exports = add