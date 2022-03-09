/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.
function getMyName() {
    return 'Arita'
}

// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.

function add(num1, num2) {
    return num1 + num2
}

// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"

function subtractWithCheck(num1, num2) {
    if (typeof (num1) !== 'number' || typeof num2 !== 'number') {
        return 'Yo dawg you can\'t subtract us!'
    }
    return num1 - num2;
}
console.log('subtractWithCheck(2,3): ', subtractWithCheck(2, 3))
console.log('subtractWithCheck(2,"hello"): ', subtractWithCheck(2, 'hello'))
console.log('subtractWithCheck("hi",2): ', subtractWithCheck("hi", 2))

// 4. now call the functions with some arguments of your choice.
// 4.1 assign results to variables.
// 4.2 print the results to the console.

const res1 = subtractWithCheck(2, 3)
const res2 = subtractWithCheck(2, 'hello')
const res3 = subtractWithCheck("hi", 2)
console.log(res1, res2, res3)

// 5. Create a function called getAge. It takes a person object as an argument.
//   - It should return the person's name and age as one single string, like "John is 26".
//   - The person's shape is { id: number, bornIn: number, name: string }
// 5.1 Call the function with a person argument of your choosing.

function getAge(person) {
    if (person.name && typeof person.bornIn === 'number') {
        const age = 2022 - person.bornIn
        return `${person.name} is ${age}`
    }
    return `Wrong argument type`
}
const person1 = {
    id: 1,
    bornIn: 2000,
    name: 'Arita'
}
const person2 = {
    id: 1,
    name: 'Arita',
    bornIn: 'hello'
}
console.log(getAge(person1))
console.log(getAge(person2))

// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
//   - returns a function that greets the person with the given string.
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.
// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it

function getGreet(shouldCapitalise, name) {
    const greet = () => {
        if (shouldCapitalise) {
            return `Hello, ${name.toUpperCase()}`
        } else {
            return `Hello, ${name}`
        }
    }

    return greet()
}

console.log(getGreet(true, 'arita'))
console.log(getGreet(false, 'arita'))