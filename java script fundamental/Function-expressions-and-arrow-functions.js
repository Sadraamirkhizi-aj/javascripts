// In JavaScript a function is also a value, like a number or text. So you can store it in a
function test(a,b){
  return a + b;
}
console.log(test(2,9));
// now we want to make it sorter with arrow 
const test2 = (c,d) => {
  return c + d;
}
console.log(test2(3,5));

// now if we have just {} and return we can remove both and write it
const end = (s,z) => s * z;
console.log(end(2,3));


// arrow rules
const double = n => n * 2; // if we have one parameter () is up to you

// but if we have 0 parameter or more than one we have to use ()
const greet = () => "Hi";
const area = (w, h) => w * h;


const show = n => {
  console.log(n);
};