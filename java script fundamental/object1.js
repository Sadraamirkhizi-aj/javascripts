const name = "sadra";
const age = 21;

const sadra = {name, age};
console.log(sadra);

// using method in object

// function
const dad = {
    name: "reza",
    sayHello(){
        return"hey son";
    }
};

console.log(dad.sayHello());
console.log(typeof dad.sayHello);

//dad.sayHello  the function itself
//dad.sayHello() run it

// this
const obb = {
    name : "json",
    testing(){
        return "Hi" + this.name; // this mean obb
    }
};
console.log(obb.testing());

// changing object
const counter = {
    count: 0,
    inc(){
        this.count++; // it changes the count itself
        return this.count;
    }
};
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.count);

// we dont write arrow function in this
// const bad = {
//   name: "A",
//   hi: () => this.name
// };

// object .entries - object.values - object.keys

// because we dont have map and length in object 
const cars = { brand: "mercedes benz", model: "amg gle 63"};

console.log(object.keys(cars));
console.log(object.values(cars));
console.log(object.entries(cars));
console.log(object.keys(cars).length);
console.log(cars.length);
