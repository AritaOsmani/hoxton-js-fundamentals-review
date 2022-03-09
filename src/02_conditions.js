/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
// 1.1 Call the function with "Bob" and "Steven" as arguments.
// 1.2. Call the function with "Henrica" and "Mark" as arguments.
// 1.3. Call the function with any arguments we like to test the remaining use case.

function getShorterString(str1, str2) {

    if (str1.length < str2.length) {
        return str1
    } else if (str1.length > str2.length) {
        return str2
    } else {
        return "They're the same length!"
    }
}
console.log(getShorterString('Bob', 'Steven'))
console.log(getShorterString('Henrica', 'Mark'))
console.log(getShorterString('Arita', 'Arita'))

// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean

function checkDirtyBirds(birds) {
    let countNastyBirds = 0;
    for (let i = 0; i < birds.length; i++) {
        if (birds[i].toLowerCase() === 'pigeon' || birds[i].toLowerCase() === 'seagull' || birds[i].toLowerCase() === 'chicken') {
            countNastyBirds++;
        }
    }
    if (countNastyBirds === 1) {
        return 'Eww'
    } else if (countNastyBirds === 2) {
        return 'Oh god'
    } else if (countNastyBirds >= 3) {
        return 'Where the hell am I?'
    } else {
        return 'Birds are cute!'
    }
}

// 2.1 Test all the scenarios by calling the function with different arguments.

console.log(checkDirtyBirds(['pigeon', 'seagull', 'chicken']))
console.log(checkDirtyBirds(['dove', 'pigeon', 'goose']))
console.log(checkDirtyBirds(['dove', 'pigeon', 'goose', 'seagull']))
console.log(checkDirtyBirds(['dove', 'goose']))