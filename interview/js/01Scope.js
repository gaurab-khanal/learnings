// Scope is a certain region of the program where a defined variable can be accessed.
// Types of scope - Global scope, Local scope, Block scope, Lexical scope
// Global scope - A variable declared outside of a function becomes global scope.
// let name = "gaurab";
// Local scope - A variable declared inside a function becomes local scope.
function myFunction() {
  let name = "gaurab";
  console.log(name);
}
// Block scope - A variable declared inside a block becomes block scope.
if (true) {
  let name = "gaurab";
  // console.log(name);
}
// Lexical scope - A variable declared inside a function can be accessed from another function.
function outerFunction() {
  let name = "gaurab";
  function innerFunction() {
    console.log(name);
  }
  innerFunction();
}

// var vs let vs const
// var - var is function scoped, can be redeclared and updated.
{
  var a = "gaurab";
}
// console.log(a);/// valid
// let - let is block scoped, can't be redeclared but can be updated.
{
  let b = "gaurab";
}
// console.log(b); // invalid error: b is not defined(reference error)
// const - const is block scoped, can't be redeclared and can't be updated.
{
  const c = "gaurab";
}
// console.log(c); //  invalid error: c is not defined(reference error)

// Shadowing - When a variable declared in a local scope has the same name as a variable in the global scope.
//
// variable declared with let can be shadowed by only let.
// variable declared with let cannot be shadowed by var. This is called illegal shadowing.
// variable declared with var can be shadowed by let and var.
function myFunction() {
  var name = "khanal";
  if (true) {
    let name = "gaurab";
    console.log(name);
  }
}

myFunction();
