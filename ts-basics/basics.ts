// Any is used as default type to represent any kind of value.
let z: any;
z = [1, 3, 4];
z = 2;
z = "22";
z = false;
z = { a: "rat", b: "cat" };

// Primitive data types
// String
let c: string;
c = "5";

// Number
let d: number;
d = 5;

// Boolean
let e: boolean;
e = false;

// Array and array of string.
let f: [];
let g: string[];

// Objects and object properties.
let h: {};
let person: {
  name: string;
  age: number;
};

person = { name: "bis", age: 0 };
console.log(person);

// type inference - if a variable is initialized then the type of value of variable is used to assign type to the variable so it shows error if another primitive type is assigned to same variable.
let rat = "rat";
rat = "33";

// error is removed using union type ie multiple primitive types using or (|). We can assign as may types as possible.
let course: string | number = "React";
course = 1233;

// Type alias - we do not have to repeat same type again and again. Instead we will create a type alias, and use that alias to initialize variables using 'type' keyword from TS.
type Person = {
  name: string;
  age: number;
};

let person1: Person;
let people: Person[];

// Function and types
// return can be inferred or we can explicitly define using :type after parenthesis.
function adds(a: number, b: number): number {
  return a + b;
}

// If a function do not return anything then the return type is void.
function printOutput(value: any) {
  console.log(value);
}

// Generics
// Generics type <T> is available only inside the function. It infers that the type of array and value should be same so returned value also have same type. It takes any value, but the values of array , value and return value should be same. Unlike any, where all array, value and return value can have any type, irrespective to the input values. The type of array will set type of all the values as it comes first.
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

let demoArray = ["cat", "mat"];
let updatedArray = insertAtBeginning(demoArray, "2");
console.log(updatedArray);

updatedArray = ["a", "b"];
updatedArray = ["3", "a"];
console.log("updatedArray", updatedArray);

let stArray = ["a", "b"];
console.log(insertAtBeginning(stArray, "3"));
