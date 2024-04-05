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

// type

// prefer PascalCase for defining type
type Gender = "MALE" | "FEMALE";

let citizenGender: Gender;

citizenGender = "FEMALE";

// Object type

type Area = {
  length: number;
  breadth: number;
  dimension: `${number}x${number}`;
};

function calculateArea(value: Area) {
  return value.breadth * value.breadth;
}

calculateArea({ length: 23, breadth: 11, dimension: "33x22" });
// calculateArea({ length: 23, breadth: 11, dimension: "33d22" });  Error cause dimension format mismatched

// Object
type Developer = {
  name: string;
  hobbides: string[];
  isCertified: boolean;
  description: () => number; // void is here return type of function
};

const Gaurab: Developer = {
  name: "Gaurab Khanal",
  hobbides: ["chess", "cricket"],
  isCertified: true,
  description: function () {
    return 1;
  },
};

// Custom Types
type Animal = {
  name: string;
};

type Bear = Animal & {
  // & is also called intersection
  food: "Fish" | "Grass";
};

let polarBear: Bear = {
  name: "PolarBear 1",
  food: "Fish",
};

// Interface
// prefer PascalCase
interface IAnimal {
  name: string;
}

interface IBear extends IAnimal {
  food: "Fish" | "Grass";
}

let PolarBear: IBear = {
  name: "Bear1",
  food: "Grass",
};

// same Interface can be defined multiple times
// this will combine all the properties of existing interface to new one.
// this isnt available for type

interface IWindow {
  title: string;
}

interface IWindow {
  ts: string;
}

let win: IWindow = {
  title: "Hello",
  ts: "def",
};
