// mutate something is changing in place
// array, object, function

// immutable is cant change in place
// numbers, strings, boolean, undefined

const s = "cat";
const up = s.toUpperCase();

console.log(s);
console.log(up);

const mut = [3,3];
mut[0] = 5;
console.log(mut);

// const not connected to the value, it is connected to the reference of the value, so if we change the value of the reference, it will change the value of the const variable. But if we change the reference of the const variable, it will give an error.
// immutable the itself cant be change


// react need to know the changes 
// so:
const todos = [
  { id: 1, text: "Study", completed: false },
  { id: 2, text: "Sleep", completed: false }
];

const toggled = todos.map(todo =>
  todo.id === 1 ? { ...todo, completed: !todo.completed } : todo
);

console.log(todos[0].completed);
console.log(toggled[0].completed);
console.log(toggled === todos);
// In React, never change the old data. Build a new copy with the change and replace the old one with it