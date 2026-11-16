console.log(a); // in var it gives an undefined because of hoisting, the variable declaration is hoisted to the top of its scope, but its assignment is not. Therefore, when we try to log the value of 'a' before it is assigned, it returns 'undefined'.
var a = 5;
console.log(a);

// but in let and const it gives an error because of TDZ (Temporal Dead Zone), which is the time between the entering of the scope and the actual declaration of the variable. During this time, the variable cannot be accessed, and trying to do so will result in a ReferenceError.
// console.log(b); error: Cannot access 'b' before initialization
// let b = 5;

// in functions : functions are hoisted

// normal function
function sayHi(){
    console.log("hi");
}
sayHi();

// but if we want to hoisting
sayBye();
function sayBye(){
    console.log("bye bye");
}

// with arrow function is tdz
greet();

const greet = () => {
  console.log("Hi");
};

console.log(add(2, 3));

function add(a, b) {
  return a + b;
}

