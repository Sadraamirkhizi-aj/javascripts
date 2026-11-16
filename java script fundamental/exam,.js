// 1
const name = "sadra";
let age = 20;
const student = true;

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(student));

// 2
const score = 68;
if (score >= 90){
    console.log("A")
}else if(score >= 70){
    console.log("B");
}else{
    console.log("C")
}

// 3
let day = "saturday";
switch (day){
    case "saturday":
        console.log("its weekend");
        break
    case "sunday":
        console.log("its weekend");
        break
    case "monday":
        console.log("work")
        break
    default:
        console.log("unknown")
}

// 4
for (let i = 1; i<6;i++){
    console.log(i);
}

for(let i = 2; i < 11; i+=2){
    console.log(i);
}
for (let i = 6; i<1 ;i--){
    console.log(i);
}


// testing our memory 
let number1 = 10;
let iseven = number => {
    if (number % 2===0){
        console.log(`your ${number} is odd`)
    }else {
        console.log(`your ${number} is even`)
    }
}

// true answer
const isEven = number => number % 2 === 0;

console.log(isEven(10));
console.log(isEven(7));