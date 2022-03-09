/**
 * @description This is a test to see how well you understand data types in javascript.
 * Write your solutions right below the comments. Use any tools you need to check the answers
 *
 * Don't remove the comments, Ed needs to know what's going on.
 *
 * As tempting as it may be, don't look in the previous exercises for answers. I don't care if you can open them.
 * I care if you can do these yourself 😊
 *
 * If you get stuck on a task - that's good. It means that we're not wasting time here.
 * Note it and skip it. We will later cover it in a 1x1 session and make sure you udnerstand it :P
 */

// 1. create a constant called 'pi' and assign it the value of 3.14
const PI = 3.14;

// 2 create a variable called 'radius' and assign it the value of 10
// 2.1 now, change its value to 20
let radius = 10;
radius = 20;


// 3. create a variable called 'area' and calculate the area using your variables
//   The formula is: area = pi x radius-squared
const area = PI * radius * radius;

// 4. Create an array called 'garage' with these cars inside:
//   - volvo
//   - audi
//   - mercedes
//   - bmw
let garage = ['volvo', 'audi', 'mercedes', 'bmw']


// Now, without manually typing the array:
// 4.1 add 'ferrari' to the garage
garage.push('ferrari')

// 4.2 remove Mercedes from the array
garage = garage.filter(car => car !== 'mercedes')

// 4.3 replace the 2nd car in the array with 'lada'
garage[1] = 'lada'

// 4.4 create an array with all of the cars in the garage capitalized
garage = garage.map(car => car.toUpperCase())


// 4.5 find the volvo. pretend you don't know what the array looks like.
const volvo = garage.find(car => car === 'VOLVO')


// 5 Create an object called 'myself' with these properties and assign them your values.
// Use appropriate datatypes for the values:
//   - name
//   - age
//   - isHungry
//   - favouriteAnimal

const myself = {
    name: 'Arita',
    age: 21,
    isHungry: true,
    favouriteAnimal: 'giraffe'
}

// 5.1 Replace the favouriteAnimal with 'turtle'
myself.favouriteAnimal = 'turtle'


// 5.2 add an address property, which tracks your city, country and street name
myself.address = {
    city: 'Pristina',
    country: 'Kosovo',
    street: 'Mother Teresa'
}

// 5.3 add a list of favouriteFoods to the object. Add your favourite foods to the list (duhhh!)
myself.favouriteFoods = ['Pizza', 'Lasagna', 'Potatoes']

// 5.3 remove the age property
delete myself.age

// 5.4 Have a snack. Set isHungry to false (even if you're not really hungry).
myself.isHungry = false

// 5.5 Add a function to the object called 'eat'. It should take a food as an argument and return "Name ate food!"
const eat = {
    eat: (name, food) => `${name} ate ${food}`
}
console.log(eat.eat('Nico', 'banana!'))
// That's a mouthful, so here's an example:
// e.g. calling the eat function with a banana argument, in an object where the name is 'Nico' should return "Nico ate banana!"
// e.g. calling the eat function with an apple argument, in an object where the name is 'Ilir' should return "Ilir ate apple!"
