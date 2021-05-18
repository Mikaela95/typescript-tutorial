// Union Type - accept two different types

const combine2 = (input1: number | string, input2: number | string) => {
  // TS doesnt analyse what's in the union type
  // const result = input1 + input2;

  // Solution
  let result;
  // Checek if there's two numbers
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } // working with strings only
  else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges2 = combine2(29, 53);
const combinedStrings2 = combine2("M34", "444");

console.log(combinedAges2);
console.log(combinedStrings2);
