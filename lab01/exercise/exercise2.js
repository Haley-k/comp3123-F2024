// Find the largest of three given integers.

function max(a, b, c) {
    let max = a;

    if (b > max)
        max = b;

    if (c > max)
        max = c;

    return max;
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));