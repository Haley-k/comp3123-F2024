// Move last three character to the start of a given string.
// The string length must be greater or equal to three.

function right(s) {
    if (s.lenght < 3)
        return s;

    let lastThree = s.slice(-3);
    let remaining = s.slice(0, -3);

    return lastThree + remaining;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));