const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join('');

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));