// array : is list of ordered of values

const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits[10]);

// changing an array

fruits[0] = "pear";
fruits.push("melon");
fruits.pop(); // remove the last element in array
console.log(fruits);

// something interesting in array and const is happen
// when we do action in array and written by const new array wont give error 
// because we don't get the main array

// array and loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const numbers = [3, 8, 1, 9, 4];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i]);
  }
}

// nested loop
const grid = [
  [1, 2],
  [3, 4]
];

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(grid[i][j]);
  }
}