// forEach : do something return nothing

const nums = [1, 2, 3, 8, 80];

for (i = 0; i < nums.length; i++){
    console.log(nums[i])
}

nums.forEach(n => console.log(n + 3));


const names = ["sadra", "ssadra","mobin"];

names.forEach((name, index ) => {
    console.log(index +1 , name);
});

// map
const nums_1 = [1, 2, 3];
const double = nums_1.map(n => n *2);

console.log(double);
console.log(nums_1);

// map's rule
// 1) new array is the same as the old array
// 2) the original array in not changed
// 3) Whatever the callback returns goes into the new array

const team = [
    {id: 1, name: "Ali", age: 20},
    {id: 2, name: "sadra", age: 17}
];

const team_names = team.map(u => u.name);
console.log(team_names);

// filter
const tests = [1, 2, 3, 4, 5, 6, 8, 10];
const evens = nums.filter(n => n > 5);

console.log(evens);

// rule
// 1) the callback must be returned true or false
// 2) items go into the new array unchanged
// 3) the new array is shorter or equal, and can be []
const users = [
    {name : "sadra", age: 20,
    name : "ssadra", age:21}
]

const adults = users.filter(u => u.age >= 18);
console.log(adults.length);
console.log(adults[0].name);

// find and findIndex
const sadra = team.find(u => u.id===2);
const idx = team.findIndex(u => u.id===1);
const none = team.find(u => u.id === 99);
const noIdx = team.findIndex(u => u.id === 99);

console.log(sadra.name);
console.log(idx);
console.log(none);
console.log(noIdx);

// some and every
// some mean at least pass one condition
// every mean at least pass all condition

const hasMinor = team.some(u => u.age < 18);
const allAdults = team.every(u => u.age >= 18);

console.log(hasMinor);
console.log(allAdults);

// chaining
const num = [1, 2, 3, 4, 5, 6];

const result = num
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result);

// reduce : a value that is built up each round and carried to next year

const nums3 = [1, 2, 3, 4];
let total = 0;

for (let i = 0; i < nums3.length; i++) {
  total = total + nums3[i];
}

console.log(total);

const totalll = nums3.reduce((acc, n) => acc + n,0);
console.log(totalll);

// the starting value
console.log([66, 11, 22, 33].reduce((max, n) => (n > max ? n : max))) // (?) = mean that if the condition true / : mean else in if
console.log([].reduce((ttl,n) => ttl + n, 0));

// rule = always write the base array for not getting type error

// real use of reduce
const cart = [
    {name: "book", price: 5, qty: 2},
    {name: "pencil", price: 20, qty: 1}
];

const sum = cart.reduce((accomplished, item) => accomplished + item.price * item.qty, 0) // 10+20
console.log(sum);
const max = [4, 8, 6].reduce((best, n) => (n > best ? n : best), 0);

// sort (it changes the original array)
const alphabet = ["x", "g", "o"];
alphabet.sort();

console.log(alphabet);

// default sort compares everything as text
console.log([30, 22, 3, 0].sort()); // 0,22,3,30
console.log([33,1333,2222,44,222225522,12856358].sort());

console.log([20, 3, 5].sort((a, b) => a + b ));
console.log([20, 3, 5].sort((a, b) => b + a ));
// there is a thing in positive there is no difference

console.log([20, 3, 5].sort((a, b) => a - b )); // lowest to highest
console.log([20, 3, 5].sort((a, b) => b - a )); // highest to lowest

// object sorting

const family = [
    {name: "sadra", age:21},
    {name: "reza", age:56}
];

family.sort((a,b) => a.name - b.name);
family.sort((a,b) => a.age - b.age);

console.log(users);
console.log(users[0].name);
// console.log(users[1].name);
// console.log(users[1].age);

        // localecompare : is a string method that compares two strings using language ordering rules

        console.log(["pear", "apple"].sort((a,b) => a.localeCompare(b)))
        // it doesn't work for string it gives nan
        const fruits = ["pear", "apple", "mango"];
        fruits.sort((a, b) => a.localeCompare(b));
        console.log(fruits);
// continuing
// just sort is not enough 
console.log(["b", "a", "C"].sort());
console.log(["b", "a", "C"].sort((x, y) => x.localeCompare(y)));

console.log(["z", "é", "e", "a"].sort());
console.log(["z", "é", "e", "a"].sort((x, y) => x.localeCompare(y)));

const letters = ["ت", "پ", "ب"];

console.log([...letters].sort());
console.log([...letters].sort((x, y) => x.localeCompare(y, "fa")));


const files = ["file10", "file2", "file1"];

console.log([...files].sort((a, b) => a.localeCompare(b)));
console.log([...files].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })));

console.log("a".localeCompare("A", undefined, { sensitivity: "base" }));
console.log("a".localeCompare("á", undefined, { sensitivity: "base" }));
console.log("a".localeCompare("b", undefined, { sensitivity: "base" }));

console.log("a" < "b"); //
console.log("B" < "a"); // in ascii uppercase is lower-num than lowercase
console.log("B".localeCompare("a")); // 

const original = [3, 1, 2];
const sorted = [...original].sort((a, b) => a - b);

console.log(original);
console.log(sorted);

// slice : choosing which index's you want
const slicing = [1, 2, 3 ,5];
console.log(slicing.slice(1,3 + 1)); // get index 1 and 2 (3-1)
console.log(slicing.slice(-3)); // -1 -2 -3
console.log(slicing.slice(-1,1+1)); // it cant because order of writing is wrong
console.log(slicing.slice(1,-1)); // it returns 2, 3 because ordering is correct
                           // -2

// splice : remove what len you choose and add to another array

const a = [1, 2, 3 ,5 ,8 , 9 ];
const removed = a.splice(2,4);
console.log(a);

      // start(its by len +1)   // delete count       // new items
a.splice(3+1  ,      3,                      65);
console.log(removed);
console.log(a);


const items = [1, 2, 3, 4];

const without = items.filter((x, i) => i !== 1);
const inserted = [...items.slice(0, 2), 99, ...items.slice(2)];

console.log(without);
console.log(inserted);

// concat : adding arrays to another arrays just use spread .concat is old
console.log([...[2,3,5], ...[5,7,4,455,6]])
// but 
const array_1 = [2, 3, 5, 8];
const array_2 = [65, 85 ,41 ,6];

console.log([...array_1,...array_2]);
console.log(array_1.concat(array_2));

// include / indexof : searching for a value

const alpha = ["x", "y", "z"];

console.log(alpha.includes("a"));
console.log(alpha.includes("Y"));
console.log(alpha.includes("y"));
console.log(alpha.includes("z"));

console.log(alpha.indexOf("z"));
console.log(alpha.indexOf("x"));
console.log(alpha.indexOf("y"));
console.log(alpha.indexOf("Y"));

console.log([{ id: 1 }].includes({ id: 1 }));

const obj = { id: 1 };
console.log([obj].includes(obj));

// split(arrays method) and join(string method)

console.log(["a", "b", "c"].join("-"));
console.log(["a", "b", "c"].join(" "));
console.log(["a", "b", "c"].join()); // do nothing
console.log([1, 2, 3].join(" + ")); // automatically add between indexes
console.log("a-b-c".split("-"));

// flat : combine arrays in arrays in to the one arrays
const n = [1, [2, 3], [4, [5]]];

console.log(n.flat());
console.log(n.flat(2));

// the arrays that don't mutate : (filter, map), (concat, slice), (join, flat), (every, some, find),(reduce, indexOF, includes)
// the arrays that mutate : (pop, push),(shift,unshift),(splice),(reverse, sort)

// .shift() = removes first item
// .unshift(x) = add x first
// .reverse() = reverse the order

// first get spread then do what do you want

