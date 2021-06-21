// Array and Object Destructuring 

const hobbies = ['piano', 'running']
// Takes the 1st - n and stores it in the variable name you provide in the arrray
const [hobby1, hobby2] = hobbies;


const person2 = {
  firstName: 'Mikaela',
  age: 26
}

// Pull out and store values in the same key name
// how to redeclare the key name - alias
const { firstName: userNames, age } = person2;

console.log(age);