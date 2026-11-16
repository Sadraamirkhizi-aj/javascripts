// at least it should give : takes function as an argument and returns a function
// function is a value 
const sayHi = () => console.log("HI");
const other = sayHi; 

other();

// callback
function test_it(time,action){
    for (let i=0;i < time; i++){
        action(i);
    }

}
test_it(6, i => console.log("part", i));

// callback with input and output
function apply(value, change){
    return change(value);
}

console.log(apply(5, n=> n*2));
console.log(apply("cat", s => s.toUpperCase()));
console.log(apply([1, 2], list => [...list, 3]));

// function that gives back a function
function multiplier(factor){
    return n => n * factor;
}
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));

// "ostad says"
// function recursive_function(n){
//     if (n ===1){
//         return n;
//     }else{
//         return n * recursive_function(n-1);
//     }
// }

// callback
console.log("A")

setTimeout(()=>{
    console.log("B");
}, 1000);
console.log("C");

// for each = same as for loop but it is a callback function
const names = ["ali", "sadra"];
names.forEach(name => console.log(name));

// all in one
function doubleIt(value){  // for one job
    return value - 4;
}
console.log(doubleIt(5));

function apply(value, change){  // the job changes each time
    return change(value);
}
console.log(apply(5,n => n*2));
console.log(apply(10, n => n + 250));

function makeChanger(factor){
    return value=> factor * value;
}
const double_1 = makeChanger(2);
const triple_1 = makeChanger(3);

console.log(double(5));
console.log(triple(5));

function apply(value, change = n => n*2){
    return change(value);
}
