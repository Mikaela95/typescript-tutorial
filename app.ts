// Explicit types
/* const person: {
  name: string;
  age: number;
  role: [number, string] -> This is a tuple, an array with exactly 2 elements of type number and string
} = { */

// Enum - behind the scenes a number is assigned, the starting value can be changed, doenst have to be a number
enum Role { ADMIN = 5, READ_ONLY, AUTHOR};

const person = {
  name: 'Mikaela',
  age: 26,
  hobbies: ['sports', 'cooking'],
  // role: [2, 'author'] - tuple
  role: Role.ADMIN
};

// push is an exception to tuples -> TS cant catch this
// person.role.push('admin');

// The following should be caught...
//person.role[1] = 10;

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if(person.role === Role.ADMIN){
  console.log("is admin")
}