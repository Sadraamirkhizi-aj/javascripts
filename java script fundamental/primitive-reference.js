// primitive : makes copy of the value
// numbers,strings,boolean,undefined

let a = 1;
let b = a; // copy of value
b = 2;
console.log(b);

// reference : makes copy of the reference
// objects,arrays,functions
const c = [3,8]
const g = c
g.push(5)
console.log(c)
// real copy of the array
const d = [...c]
console.log(d)
