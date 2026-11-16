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