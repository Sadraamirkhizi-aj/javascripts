// { ...user } and [...list] copy only the first level. This is a shallow copy. If an object contains another object or array, that inner one is not copied; both copies point to the same inner box
const user = {
    name : "sadra",
    age : 20,
    address : {
        city : "Tabriz",
        country : "Iran"
    }
}

console.log(user.name);
console.log(user.address.city);

const copy = {...user};
copy.name = "sssadra"
copy.address.city = "Tehran"

console.log(user.name);
console.log(user.address.city);
console.log(copy.name);
console.log(copy.address.city);

// deep copy
const deep = structuredClone(user);
deep.address.city = "mashhad"
console.log(user.address.city);
console.log(deep.address.city);

// spread in all level
const updated = {
    ...user,
    address : {
        ...user.address,
        city : "new york"
    }
};
console.log(user.address.city);
console.log(updated.address.city);

const flat = [1, 2, 3];
const copy = [...flat];

console.log(copy);

const a_1 = [[1, 2], [3]];

console.log(a.flat());
console.log([...a[0], ...a[1]]);

const a = [[1, 2], [3]];
const b = [...a];

b[0].push(99);

console.log(a);