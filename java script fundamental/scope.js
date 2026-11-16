// Scope	Where it lives 
// Global	 outside everything; visible everywhere
// Function	 inside a function; only inside it
// Block	 inside { } like if and for; only inside it

const city = "tarbiz";

function show() {
  const name = "Sadra";
  if (true) {
    const age = 20;
    console.log(city, name, age);
  }
  console.log(city, name);
}

show();
console.log(city);
function g() {
  const secret = 42;
}

g();
console.log(secret);