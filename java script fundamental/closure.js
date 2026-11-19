// closure mean a function keeps the variable of the environment  where it was created
function outer(){
    const message = "hi";

    function inner(){
        console.log(message);
    }
    inner();
}
outer();

// now closure
function makeCounter(){   // count = 0 is created, the inner function is returned
    let count = 0; // a note in inner function
    return function(){
        count++;
        return count;
    }
}
const counter = makeCounter();  
console.log(counter()); // takes 0 to 1
console.log(counter());
console.log(counter());


// private data
function createAccount(start){
    let balance = start;
    return{
        deposit(amount){
            balance = balance + amount;
            return balance
        },
        getBalance(){
            return balance;
        }
    };
}

const acc = createAccount(100);

acc.deposit(50);

console.log(acc.getBalance());
console.log(acc.balance);

// closure keeps the variable not value
function demo(){
    let x = 1;
    const show = () => console.log(x);
    x = 90;
    show();
}
demo();

// famous example of closure : loop with let and var
// we remember with var we can reassign and redeclare

// but with let we can just reassign 

const print_number = [];

for (var i = 0;i < 3; i++){
    print_number.push (() => console.log(i));
}

print_number[0]();
print_number[1]();
print_number[2]();
// the output : 20, 20, 20

// lets write it with let

const print_number_1 = [];

for (let j = 0; j < 3; j++){
    print_number_1.push (() => console.log(j));
}
print_number_1[0]();
print_number_1[1]();
print_number_1[2]();


// real use : configured function

function makeLimiter(max) {  // parameters
    let used = 0;
    return function (){
        if (used >= max){
            return "limit reached";
        }
        used++;
        return "ok" + used;
    };
}

const limited = makeLimiter(2);

console.log(limited(3));
console.log(limited(2));
console.log(limited(1));

// connection to react
// useState, useEffect and most event handlers in React are built on closures. When you write onClick={() => setCount(count + 1)} in a component, that function holds count from that render. Later you’ll see why a value sometimes seems “stale”; the root is this lesson
