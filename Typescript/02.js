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
var MatchScore = /** @class */ (function () {
    function MatchScore() {
    }
    MatchScore.prototype.getScore = function () {
        return MatchScore.score;
    };
    MatchScore.prototype.incr = function () {
        MatchScore.score++;
    };
    MatchScore.score = 1;
    return MatchScore;
}());
var match1 = new MatchScore();
console.log(match1.getScore());
match1.incr();
var match2 = new MatchScore();
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
var Box = /** @class */ (function () {
    function Box(data) {
        console.log("Data: ", data);
    }
    return Box;
}());
var b = new Box(44);
var b2 = new Box("Hello World");
