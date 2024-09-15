var array = [1, 2, 3, 4];

const calculateSum = array.reduce((accu, curr) => accu + curr);
const calculateProduct = array.reduce((accu, curr) => accu * curr);

console.log(calculateSum);
console.log(calculateProduct);