//Create class name Student with first name and last name attribute.
//Create display method to print both values.
//Export Student class and access inside index.js
class Student {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    display = () => {
        console.log(`FIRST NAME: ${this.fName}`)
        console.log(`LAST NAME: ${this.lName}`)
    }
}

//exports.Student = Student;
module.exports = Student;