// TS infers that the return type will be a number. Can explicitly setting the type after defining
// the parameters
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

// This function returns nothing, hence the return type is void
const printResult = (num: number) => {
  console.log("Result " + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printResult(add(3, 56));

// Setting this is a type for a function
// let combineValues: Function;

// CombineValues accepts any function that has 2 number parameters and returns a number
let combineValues: (a: number, b: number) => number;

combineValues = add;

// Will result in undefined when combineValues is purely set as Function
// combineValues = printResult;

console.log(combineValues(2, 7));

// Passing in an anon function that calls the cb 
addAndHandle(21, 55, (result) => {
  console.log(result)
});


// A callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.