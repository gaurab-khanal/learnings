let age: number;

// Union
let year: number | string;

// Union (Literal Types)
let gender: "Male" | "Female";

gender = "Female";

// Tuple

let x: [string, number];

x = ["d", 1];

// any

let salary: any; // can assign any value

// unknown
let b: unknown; // it means you dont know what kind of datatype b holds
// so you dont use it.  Only do operation if you find the datatype that b holds

// Narrowing
if (typeof b === "string") {
}

// type assertions
let c = "name" as string; // specify that c always holds string by ourself
// dont let typescript compiler decides the datatype

// Functions
// can specify the type of paramater passed
// can specify the return type of function as well
function isCanVote(age: number): boolean {
  return age >= 18;
}
