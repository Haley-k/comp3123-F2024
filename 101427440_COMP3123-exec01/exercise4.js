// Find the types of a given angle.

function angle_Type(x) {
    if (x < 90)
        return "Acute angle"

    if (x == 90)
        return "Right angle"

    if (x < 180)
        return "Obtuse angle"

    if (x == 180)
        return "Straight angle"
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))