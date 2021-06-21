const add1 = (n1: number, n2: number) => {
  return n1 + n2;
}

// Type inference
const number1 = 5
const number2 = 3.6

//Explicitly define the type - unneccesary
const num3: number = 4


// TS only helps before compililng to JS -> no browser support for TS
const result = add1(number1, number2)
console.log(result)

// typeof is a built in type checker from JS, however JS wont throw an error until runtime as oppose to 
// TS that will throw it immediately because it checks during compilation.