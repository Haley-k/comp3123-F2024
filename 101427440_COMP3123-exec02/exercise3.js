const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(([first, ...rest]) =>
    first.toUpperCase() + rest.join(''));

console.log(capitalizedColors);