// instead of print 100 time "hi" we write loop
// structure 
for (let i = 10; i < 19 ; i++){
    console.log(i);
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}
for (let i = 1; i<6;i++){
    console.log(i);
}

for(let i = 2; i < 11; i+=2){
    console.log(i);
}
for (let i = 6; i<1 ;i--){
    console.log(i);
}
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// loop and if combine
for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// while
let count = 0; // start outside the loop
while (count < 3) { // condition, checked before every round
  console.log(count);
  count++;
  // most important thing
}
// inside a while body, always write something that eventually makes the condition false

let x = 0;
let rounds = 0;

while (x > 0) {
  x = x - 8;
  rounds++;
}

console.log(rounds);

// do while
let n = 10;

do {
  console.log(n);
  n++;
} while (n < 3);

do {
  body
} while (condition);

// nested loops
const grid = [
  [1, 2],
  [3, 4]
];

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(grid[i][j]);
  }
}