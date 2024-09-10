// Capitalize the first letter of each word of a given string.

function capitalizeFirstLetter(s) {
    return s.replace(/\b\w/g, char => char.toUpperCase());
}

const input = "the quick brown fox";
const result = capitalizeFirstLetter(input);
console.log(result); 