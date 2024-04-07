// Enums, Generics, Utility, Types, Classes
// Enums are like array where constant values are stored in form of object
var LogType;
(function (LogType) {
    LogType["ERROR"] = "ERROR";
    LogType["INFO"] = "INFO";
})(LogType || (LogType = {}));
// if value of enum members arent provided then it initialize
// its values as its index in increasing order starting from 0
// if the first member value is initialized then the rest of it is in increasing
// order starting from the value of 1st member
var Demo;
(function (Demo) {
    Demo[Demo["hi"] = 23] = "hi";
    Demo[Demo["hello"] = 24] = "hello";
})(Demo || (Demo = {}));
// console.log(LogType.ERROR);
// private, public, static
class MatchScore {
    getScore() {
        return MatchScore.score;
    }
    incr() {
        MatchScore.score++;
    }
}
MatchScore.score = 1;
let match1 = new MatchScore();
console.log(match1.getScore());
match1.incr();
let match2 = new MatchScore();
console.log(match2.getScore());
// Generics -> acceps any kind of datatype in a function, class
// and you must mention what kind of datatype is being passed to function while calling it and class while creating
// its instance
function swap(i1, i2) {
    return [i2, i1];
}
function swapString(i1, i2) {
    return [i2, i1];
}
// can implement dry principle for above code using generics
function swapGeneric(a, b) {
    return [b, a];
}
swapGeneric("Hello, ", "Gaurab");
swapGeneric(3, 2);
class Box {
    constructor(data) {
        console.log("Data: ", data);
    }
}
const b3 = new Box(44);
const b2 = new Box("Hello World");
// Utility Types
// Record specifies the datatype of object key and values, 1st string is for key and 2nd string is for value
let info = {
    name: "Ram",
    location: "Nepa;",
};
info["profession"] = "Teacher";
// now here key is always either admin or owner and the key contain both owner and admin
// can only hold two keys
let PeopleAndRoles = {
    owner: [],
    admin: [],
};
const todo = {
    title: "Task1",
    completed: true,
};
// both omit and exclude, removed specified values
// but omit works in object and exclude is for type
// Partial
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo4 = {
    title: "Task 1",
    description: "This is decription",
    completed: true,
};
const todo3 = updateTodo(todo4, { description: "description updated" });
