const me = {
    name:"sadra",
    age : 20,
    city : "tabriz",
};
console.log(me.name);

// when we want to change things:
me.age = 21;
delete me.city;
console.log(me)

// adding another object to another object if there is no object
me.major={university : "ce"};
console.log(me)

me["lastname"]="amirkhizi";
console.log(me)

const product = {
    name : "laptop",
    price : 1000,
}
product.year = 2023;
console.log(product);
for(let key in product){
    console.log(key);
}
