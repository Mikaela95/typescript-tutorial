// Type alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

// Union Type - accept two different types
const combine = (
  // Example of union types
  /* input1: number | string,
  input2: number | string, 
  resultConversion: 'as-number' | 'as-string' */

  // How to use type alias
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
  
) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // Type casting
  /* if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  } */
};

const combinedAges = combine(29, 53, "as-number");
const combinedAgesAsStrings = combine(29, 53, "as-string");
const combinedStrings = combine("M34", "444", "as-string");

console.log(combinedAges);
console.log(combinedAgesAsStrings);
console.log(combinedStrings);
