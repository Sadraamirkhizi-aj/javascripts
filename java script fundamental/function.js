function sayHi() {
  console.log("Hi");
}

sayHi();
sayHi();
function double(n) {
  return n * 2;
}

console.log(double(4));
console.log(double(10));

let sum = 10;

for (let i = 1; i <= 4; i++) {
  sum = sum + i;
}

console.log(sum);
let count = 0;

for (let i = 0; i < 3; i++) {
  console.log(i);
  count = count + 1;
}

console.log(count);