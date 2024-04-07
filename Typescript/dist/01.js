let age;
// Union
let year;
// Union (Literal Types)
let gender;
gender = "Female";
// Tuple
let x;
x = ["d", 1];
// any
let salary; // can assign any value
// unknown
let b; // it means you dont know what kind of datatype b holds
// so you dont use it.  Only do operation if you find the datatype that b holds
// Narrowing
if (typeof b === "string") {
}
// type assertions
let c = "name"; // specify that c always holds string by ourself
// dont let typescript compiler decides the datatype
// Functions
// can specify the type of paramater passed
// can specify the return type of function as well
function isCanVote(age) {
    return age >= 18;
}
let citizenGender;
citizenGender = "FEMALE";
function calculateArea(value) {
    return value.breadth * value.breadth;
}
calculateArea({ length: 23, breadth: 11, dimension: "33x22" });
const Gaurab = {
    name: "Gaurab Khanal",
    hobbides: ["chess", "cricket"],
    isCertified: true,
    description: function () {
        return 1;
    },
};
let polarBear = {
    name: "PolarBear 1",
    food: "Fish",
};
let PolarBear = {
    name: "Bear1",
    food: "Grass",
};
let win = {
    title: "Hello",
    ts: "def",
};
